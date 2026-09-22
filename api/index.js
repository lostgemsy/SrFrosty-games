const express = require("express");
const path = require("path");
const { neon } = require("@neondatabase/serverless");
const { Redis } = require("@upstash/redis");
const { put } = require("@vercel/blob");
const multer = require("multer");
const ejs = require("ejs");

const app = express();
const ROOT = path.join(__dirname, "..");

app.engine("mjs", ejs.__express);
app.set("view engine", "mjs");
app.set("views", path.join(ROOT, "views"));

const sql = neon(process.env.DATABASE_URL);
const redis = Redis.fromEnv();

/* ============================================
   DB SETUP (runs once)
   ============================================ */
let dbReady = false;
async function ensureDB() {
  if (dbReady) return;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      username TEXT PRIMARY KEY,
      password TEXT NOT NULL,
      avatar TEXT,
      created_at BIGINT
    );
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS friends (
      a TEXT NOT NULL,
      b TEXT NOT NULL,
      PRIMARY KEY (a, b)
    );
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS friend_requests (
      from_user TEXT NOT NULL,
      to_user TEXT NOT NULL,
      avatar TEXT,
      created_at BIGINT,
      PRIMARY KEY (from_user, to_user)
    );
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS suggestions (
      id TEXT PRIMARY KEY,
      game_name TEXT,
      game_link TEXT,
      game_category TEXT,
      game_description TEXT,
      your_name TEXT,
      identifier TEXT,
      ip TEXT,
      submitted_at BIGINT,
      status TEXT DEFAULT 'pending',
      approved_at BIGINT
    );
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS bans (
      identifier TEXT PRIMARY KEY,
      reason TEXT,
      until BIGINT,
      banned_at BIGINT
    );
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS mutes (
      identifier TEXT PRIMARY KEY,
      reason TEXT,
      until BIGINT,
      muted_at BIGINT
    );
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS warnings (
      id SERIAL PRIMARY KEY,
      identifier TEXT,
      message TEXT,
      sent_at BIGINT,
      seen BOOLEAN DEFAULT FALSE
    );
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS suggest_rate (
      identifier TEXT PRIMARY KEY,
      last_submit BIGINT
    );
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS stickers (
      id TEXT PRIMARY KEY,
      url TEXT NOT NULL,
      uploaded_at BIGINT
    );
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS leaderboard (
      id TEXT PRIMARY KEY,
      player_name TEXT NOT NULL,
      game_name TEXT NOT NULL,
      score TEXT NOT NULL,
      proof_image TEXT NOT NULL,
      avatar TEXT,
      ip TEXT,
      submitted_at BIGINT,
      status TEXT DEFAULT 'pending',
      approved_at BIGINT,
      rejected_at BIGINT
    );
  `;
  dbReady = true;
}
app.use(async (req, res, next) => {
  try { await ensureDB(); next(); }
  catch (e) { console.error("DB init failed:", e); res.status(500).json({ error: "DB error" }); }
});

app.use(express.json({ limit: "8mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-admin-token");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();
  next();
});

/* ============================================
   HELPERS
   ============================================ */
function getClientIp(req) {
  return (req.headers["x-forwarded-for"] || "").split(",")[0].trim()
      || req.socket?.remoteAddress
      || "unknown";
}

function mapLeaderboardRow(row) {
  return {
    id: row.id,
    playerName: row.player_name,
    gameName: row.game_name,
    score: row.score,
    proofImage: row.proof_image,
    avatar: row.avatar || "png/logo.png",
    ip: row.ip,
    submittedAt: Number(row.submitted_at),
    status: row.status,
    ...(row.approved_at ? { approvedAt: Number(row.approved_at) } : {}),
    ...(row.rejected_at ? { rejectedAt: Number(row.rejected_at) } : {})
  };
}
function getIdentifier(req, body) {
  const name = (body && body.yourName || "").trim();
  if (name && name.toLowerCase() !== "anonymous") return "user:" + name.toLowerCase();
  return "ip:" + getClientIp(req);
}
function makeId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
function makeToken() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 12);
}

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "farius2024";
const SUGGEST_COOLDOWN_MS = 20 * 60 * 1000;

/* ============================================
   AUTH
   ============================================ */
app.post("/api/signup", async (req, res) => {
  const { username, password, avatar } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: "Missing fields" });
  if (username.length < 3) return res.status(400).json({ error: "Username 3+ chars" });
  if (!/^[a-zA-Z0-9_]+$/.test(username)) return res.status(400).json({ error: "Letters, numbers, underscores only" });
  if (password.length < 6) return res.status(400).json({ error: "Password 6+ chars" });

  const existing = await sql`SELECT username FROM users WHERE LOWER(username) = LOWER(${username})`;
  if (existing.length) return res.status(400).json({ error: "Username taken" });

  await sql`INSERT INTO users (username, password, avatar, created_at)
            VALUES (${username}, ${password}, ${avatar || "png/logo.png"}, ${Date.now()})`;

  res.json({ user: { username, avatar: avatar || "png/logo.png" } });
});

app.post("/api/signin", async (req, res) => {
  const { username, password } = req.body || {};
  const rows = await sql`SELECT username, avatar FROM users
                         WHERE LOWER(username) = LOWER(${username || ""})
                         AND password = ${password || ""}`;
  if (!rows.length) return res.status(401).json({ error: "Wrong username or password" });
  res.json({ user: { username: rows[0].username, avatar: rows[0].avatar } });
});

/* ============================================
   FRIENDS
   ============================================ */
app.get("/api/users/search", async (req, res) => {
  const q = (req.query.q || "").toLowerCase();
  if (!q) return res.json({ results: [] });
  const rows = await sql`SELECT username, avatar FROM users
                         WHERE LOWER(username) LIKE ${"%" + q + "%"}
                         LIMIT 20`;
  res.json({ results: rows });
});

app.post("/api/friends/request", async (req, res) => {
  const { from, to } = req.body || {};
  if (!from || !to || from === to) return res.status(400).json({ error: "Invalid" });
  const target = await sql`SELECT username FROM users WHERE username = ${to}`;
  if (!target.length) return res.status(404).json({ error: "User not found" });

  await sql`INSERT INTO friend_requests (from_user, to_user, avatar, created_at)
            VALUES (${from}, ${to}, ${req.body.avatar || "png/logo.png"}, ${Date.now()})
            ON CONFLICT (from_user, to_user) DO NOTHING`;
  res.json({ ok: true });
});

app.get("/api/friends/requests", async (req, res) => {
  const rows = await sql`SELECT from_user AS "from", avatar FROM friend_requests
                         WHERE to_user = ${req.query.user}`;
  res.json({ requests: rows });
});

app.post("/api/friends/respond", async (req, res) => {
  const { user, from, accept } = req.body || {};
  await sql`DELETE FROM friend_requests WHERE from_user = ${from} AND to_user = ${user}`;
  if (accept) {
    await sql`INSERT INTO friends (a, b) VALUES (${user}, ${from})
              ON CONFLICT DO NOTHING`;
    await sql`INSERT INTO friends (a, b) VALUES (${from}, ${user})
              ON CONFLICT DO NOTHING`;
  }
  res.json({ ok: true });
});

app.get("/api/friends", async (req, res) => {
  const rows = await sql`SELECT b AS username, u.avatar
                         FROM friends f
                         JOIN users u ON u.username = f.b
                         WHERE f.a = ${req.query.user}`;
  res.json({ friends: rows });
});

/* ============================================
   SUGGESTIONS
   ============================================ */
app.post("/api/suggest", async (req, res) => {
  const { gameName, gameLink, gameCategory, gameDescription, yourName } = req.body || {};
  const identifier = getIdentifier(req, req.body);

  const ban = await sql`SELECT * FROM bans WHERE identifier = ${identifier} AND until > ${Date.now()}`;
  if (ban.length) {
    return res.status(403).json({
      error: "You are banned from suggesting games.",
      reason: ban[0].reason,
      until: ban[0].until,
      remainingSeconds: Math.ceil((ban[0].until - Date.now()) / 1000)
    });
  }
  const mute = await sql`SELECT * FROM mutes WHERE identifier = ${identifier} AND until > ${Date.now()}`;
  if (mute.length) {
    return res.status(403).json({
      error: "You are muted.",
      reason: mute[0].reason,
      until: mute[0].until,
      remainingSeconds: Math.ceil((mute[0].until - Date.now()) / 1000)
    });
  }

  const rate = await sql`SELECT last_submit FROM suggest_rate WHERE identifier = ${identifier}`;
  if (rate.length) {
    const elapsed = Date.now() - rate[0].last_submit;
    if (elapsed < SUGGEST_COOLDOWN_MS) {
      return res.status(429).json({
        error: "Please wait before submitting again.",
        remainingSeconds: Math.ceil((SUGGEST_COOLDOWN_MS - elapsed) / 1000)
      });
    }
  }

  if (!gameName || !gameLink || !gameCategory) return res.status(400).json({ error: "Missing fields" });
  try { new URL(gameLink); } catch { return res.status(400).json({ error: "Invalid URL" }); }

  const id = makeId();
  await sql`INSERT INTO suggestions
    (id, game_name, game_link, game_category, game_description, your_name, identifier, ip, submitted_at, status)
    VALUES (${id}, ${gameName}, ${gameLink}, ${gameCategory},
            ${gameDescription || ""}, ${yourName || "Anonymous"},
            ${identifier}, ${getClientIp(req)}, ${Date.now()}, 'pending')`;

  await sql`INSERT INTO suggest_rate (identifier, last_submit)
            VALUES (${identifier}, ${Date.now()})
            ON CONFLICT (identifier) DO UPDATE SET last_submit = ${Date.now()}`;

  res.json({ ok: true, id });
});

app.post("/api/suggest/status", async (req, res) => {
  const identifier = getIdentifier(req, req.body);
  const now = Date.now();
  const ban = await sql`SELECT * FROM bans WHERE identifier = ${identifier} AND until > ${now}`;
  const mute = await sql`SELECT * FROM mutes WHERE identifier = ${identifier} AND until > ${now}`;
  const rate = await sql`SELECT last_submit FROM suggest_rate WHERE identifier = ${identifier}`;
  const elapsed = rate.length ? now - rate[0].last_submit : SUGGEST_COOLDOWN_MS;
  const cooldownSeconds = elapsed < SUGGEST_COOLDOWN_MS
    ? Math.ceil((SUGGEST_COOLDOWN_MS - elapsed) / 1000) : 0;

  res.json({
    banned: !!ban.length,
    banReason: ban[0]?.reason || null,
    banUntil: ban[0]?.until || null,
    muted: !!mute.length,
    muteReason: mute[0]?.reason || null,
    muteUntil: mute[0]?.until || null,
    cooldownSeconds
  });
});

app.post("/api/suggest/warnings", async (req, res) => {
  const identifier = getIdentifier(req, req.body);
  const rows = await sql`SELECT id, message, sent_at AS "sentAt" FROM warnings
                         WHERE identifier = ${identifier} AND seen = FALSE`;
  if (rows.length) {
    const ids = rows.map(r => r.id);
    await sql`UPDATE warnings SET seen = TRUE WHERE id = ANY(${ids})`;
  }
  res.json({ warnings: rows });
});

/* ============================================
   ADMIN
   ============================================ */
const adminTokens = new Set();

function requireAdmin(req, res, next) {
  const token = req.headers["x-admin-token"] || req.query.token;
  if (!token || !adminTokens.has(token)) return res.status(401).json({ error: "Unauthorized" });
  next();
}

app.post("/api/admin/login", (req, res) => {
  if ((req.body || {}).password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Wrong password" });
  }
  const token = makeToken();
  adminTokens.add(token);
  res.json({ token });
});

app.post("/api/admin/logout", requireAdmin, (req, res) => {
  adminTokens.delete(req.headers["x-admin-token"] || req.query.token);
  res.json({ ok: true });
});

app.get("/api/admin/verify", requireAdmin, (req, res) => res.json({ ok: true }));

app.get("/api/leaderboard", async (req, res) => {
  const rows = await sql`
    SELECT * FROM leaderboard
    WHERE status = 'approved'
    ORDER BY submitted_at DESC
  `;
  res.json({ scores: rows.map(mapLeaderboardRow) });
});

app.post("/api/leaderboard/submit", async (req, res) => {
  const { playerName, gameName, score, proofImage } = req.body || {};
  if (!playerName || !gameName || score === undefined || !proofImage) {
    return res.status(400).json({ error: "Name, game, score, and proof image are required" });
  }
  if (String(playerName).trim().length > 24) {
    return res.status(400).json({ error: "Name must be 24 characters or less" });
  }
  if (String(score).trim().length > 20) {
    return res.status(400).json({ error: "Score is too long" });
  }
  if (typeof proofImage !== "string" || !proofImage.startsWith("data:image/")) {
    return res.status(400).json({ error: "A valid proof image is required" });
  }
  if (proofImage.length > 7 * 1024 * 1024) {
    return res.status(413).json({ error: "Proof image is too large" });
  }

  const entry = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    playerName: String(playerName).trim(),
    gameName: String(gameName).trim(),
    score: String(score).trim(),
    proofImage,
    avatar: "png/logo.png",
    ip: getClientIp(req),
    submittedAt: Date.now(),
    status: "pending"
  };
  await sql`
    INSERT INTO leaderboard (id, player_name, game_name, score, proof_image, avatar, ip, submitted_at, status)
    VALUES (${entry.id}, ${entry.playerName}, ${entry.gameName}, ${entry.score}, ${entry.proofImage}, ${entry.avatar}, ${entry.ip}, ${entry.submittedAt}, ${entry.status})
  `;
  res.status(201).json({ ok: true, score: entry });
});

app.get("/api/admin/leaderboard", requireAdmin, async (req, res) => {
  const rows = await sql`SELECT * FROM leaderboard ORDER BY submitted_at DESC`;
  const scores = rows.map(mapLeaderboardRow);
  res.json({ scores, total: scores.length });
});

app.post("/api/admin/leaderboard/:id/:action", requireAdmin, async (req, res) => {
  if (!["approve", "reject"].includes(req.params.action)) {
    return res.status(400).json({ error: "Invalid action" });
  }
  const status = req.params.action === "approve" ? "approved" : "rejected";
  const timestampColumn = status === "approved" ? "approved_at" : "rejected_at";
  const rows = timestampColumn === "approved_at"
    ? await sql`UPDATE leaderboard SET status = ${status}, approved_at = ${Date.now()} WHERE id = ${req.params.id} RETURNING *`
    : await sql`UPDATE leaderboard SET status = ${status}, rejected_at = ${Date.now()} WHERE id = ${req.params.id} RETURNING *`;
  if (!rows.length) return res.status(404).json({ error: "Score not found" });
  res.json({ ok: true, score: mapLeaderboardRow(rows[0]) });
});

app.delete("/api/admin/leaderboard/:id", requireAdmin, async (req, res) => {
  const rows = await sql`DELETE FROM leaderboard WHERE id = ${req.params.id} RETURNING id`;
  if (!rows.length) return res.status(404).json({ error: "Score not found" });
  res.json({ ok: true });
});

app.get("/api/admin/suggestions", requireAdmin, async (req, res) => {
  const filter = req.query.status || "all";
  const rows = filter === "all"
    ? await sql`SELECT * FROM suggestions ORDER BY submitted_at DESC`
    : await sql`SELECT * FROM suggestions WHERE status = ${filter} ORDER BY submitted_at DESC`;
  res.json({ suggestions: rows, total: rows.length });
});

app.post("/api/admin/suggestions/:id/approve", requireAdmin, async (req, res) => {
  await sql`UPDATE suggestions SET status = 'approved', approved_at = ${Date.now()}
            WHERE id = ${req.params.id}`;
  res.json({ ok: true });
});

app.post("/api/admin/suggestions/:id/reject", requireAdmin, async (req, res) => {
  await sql`UPDATE suggestions SET status = 'rejected' WHERE id = ${req.params.id}`;
  res.json({ ok: true });
});

app.delete("/api/admin/suggestions/:id", requireAdmin, async (req, res) => {
  await sql`DELETE FROM suggestions WHERE id = ${req.params.id}`;
  res.json({ ok: true });
});

app.get("/api/approved-games", async (req, res) => {
  const rows = await sql`SELECT * FROM suggestions WHERE status = 'approved'
                         ORDER BY approved_at DESC`;
  res.json({ games: rows });
});

/* Ban / Mute / Warn */
app.get("/api/admin/bans", requireAdmin, async (req, res) => {
  const bans = await sql`SELECT * FROM bans WHERE until > ${Date.now()}`;
  const mutes = await sql`SELECT * FROM mutes WHERE until > ${Date.now()}`;
  res.json({ bans, mutes });
});

app.post("/api/admin/ban", requireAdmin, async (req, res) => {
  const { identifier, minutes, reason } = req.body || {};
  if (!identifier) return res.status(400).json({ error: "Missing identifier" });
  const mins = Math.max(1, parseInt(minutes) || 1440);
  const until = Date.now() + mins * 60 * 1000;
  await sql`INSERT INTO bans (identifier, reason, until, banned_at)
            VALUES (${identifier}, ${reason || "Violation of rules"}, ${until}, ${Date.now()})
            ON CONFLICT (identifier) DO UPDATE
            SET reason = ${reason || "Violation of rules"}, until = ${until}, banned_at = ${Date.now()}`;
  res.json({ ok: true, until });
});

app.post("/api/admin/unban", requireAdmin, async (req, res) => {
  await sql`DELETE FROM bans WHERE identifier = ${req.body.identifier}`;
  res.json({ ok: true });
});

app.post("/api/admin/mute", requireAdmin, async (req, res) => {
  const { identifier, minutes, reason } = req.body || {};
  const mins = Math.max(30, parseInt(minutes) || 30);
  const until = Date.now() + mins * 60 * 1000;
  await sql`INSERT INTO mutes (identifier, reason, until, muted_at)
            VALUES (${identifier}, ${reason || "You are muted"}, ${until}, ${Date.now()})
            ON CONFLICT (identifier) DO UPDATE
            SET reason = ${reason || "You are muted"}, until = ${until}, muted_at = ${Date.now()}`;
  res.json({ ok: true, until });
});

app.post("/api/admin/unmute", requireAdmin, async (req, res) => {
  await sql`DELETE FROM mutes WHERE identifier = ${req.body.identifier}`;
  res.json({ ok: true });
});

app.post("/api/admin/warn", requireAdmin, async (req, res) => {
  const { identifier, message } = req.body || {};
  if (!identifier || !message) return res.status(400).json({ error: "Missing" });
  await sql`INSERT INTO warnings (identifier, message, sent_at, seen)
            VALUES (${identifier}, ${message}, ${Date.now()}, FALSE)`;
  res.json({ ok: true });
});

app.get("/api/admin/suggesters", requireAdmin, async (req, res) => {
  const rows = await sql`
    SELECT identifier,
           MAX(your_name) AS name,
           MAX(ip) AS ip,
           COUNT(*)::int AS count,
           MAX(submitted_at) AS "lastSubmit",
           (ARRAY_AGG(game_name ORDER BY submitted_at DESC))[1] AS "lastGame"
    FROM suggestions
    GROUP BY identifier
    ORDER BY MAX(submitted_at) DESC
  `;
  const bans = await sql`SELECT identifier, until AS "banUntil", reason AS "banReason"
                         FROM bans WHERE until > ${Date.now()}`;
  const mutes = await sql`SELECT identifier, until AS "muteUntil", reason AS "muteReason"
                          FROM mutes WHERE until > ${Date.now()}`;
  const banMap = Object.fromEntries(bans.map(b => [b.identifier, b]));
  const muteMap = Object.fromEntries(mutes.map(m => [m.identifier, m]));
  const list = rows.map(r => ({
    ...r,
    banned: !!banMap[r.identifier],
    banUntil: banMap[r.identifier]?.banUntil || null,
    banReason: banMap[r.identifier]?.banReason || null,
    muted: !!muteMap[r.identifier],
    muteUntil: muteMap[r.identifier]?.muteUntil || null,
    muteReason: muteMap[r.identifier]?.muteReason || null
  }));
  res.json({ suggesters: list });
});

/* ============================================
   STICKERS (Vercel Blob)
   ============================================ */
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }
});

app.get("/api/stickers", async (req, res) => {
  const builtin = [];
  for (let i = 1; i <= 10; i++) {
    builtin.push({ id: "builtin-" + i, url: "/stickers/" + i + ".gif", custom: false });
  }
  const custom = await sql`SELECT id, url FROM stickers ORDER BY uploaded_at DESC`;
  res.json({ builtin, custom: custom.map(s => ({ ...s, custom: true })) });
});

app.post("/api/stickers/upload", upload.single("sticker"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file" });
  const blob = await put("stickers/" + Date.now() + "-" + req.file.originalname, req.file.buffer, {
    access: "public",
    contentType: req.file.mimetype
  });
  const id = "custom-" + Date.now().toString(36);
  await sql`INSERT INTO stickers (id, url, uploaded_at) VALUES (${id}, ${blob.url}, ${Date.now()})`;
  res.json({ ok: true, sticker: { id, url: blob.url, custom: true } });
});

app.delete("/api/stickers/:id", async (req, res) => {
  await sql`DELETE FROM stickers WHERE id = ${req.params.id}`;
  res.json({ ok: true });
});

/* ============================================
   STATIC FILES + HTML
   ============================================ */
const viewNames = [
  "index",
  "chat",
  "leaderboard",
  "games",
  "game",
  "settings",
  "suggest",
  "adminleaderboard",
  "adminSuggested"
];

for (const viewName of viewNames) {
  app.get([`/${viewName}`, `/${viewName}.html`], (req, res) => {
    res.render(viewName);
  });
}

app.get("/", (req, res) => {
  res.render("index");
});

app.use(express.static(ROOT));

app.get("*", (req, res) => {
  res.render("index");
});

module.exports = app;