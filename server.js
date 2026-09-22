const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

// ============================================
// ONLINE USERS
// ============================================
const onlineUsers = new Map();
const onlineList  = new Map();

// ============================================
// DATA FILES
// ============================================
const DATA_DIR = path.join(ROOT, "data");
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

const USERS_FILE    = path.join(DATA_DIR, "users.json");
const FRIENDS_FILE  = path.join(DATA_DIR, "friends.json");
const PENDING_FILE  = path.join(DATA_DIR, "pending.json");
const SUGGEST_FILE  = path.join(DATA_DIR, "suggestions.json");
const BANS_FILE     = path.join(DATA_DIR, "bans.json");
const MUTES_FILE    = path.join(DATA_DIR, "mutes.json");
const RATE_FILE     = path.join(DATA_DIR, "suggest-rate.json");
const WARN_FILE     = path.join(DATA_DIR, "warnings.json");
const MESSAGES_FILE = path.join(DATA_DIR, "messages.json");
const STICKERS_FILE = path.join(DATA_DIR, "stickers.json");
const LEADERBOARD_FILE = path.join(DATA_DIR, "leaderboard.json");

function loadJSON(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, "utf8")); }
  catch { return fallback; }
}
function saveJSON(file, data) {
  try { fs.writeFileSync(file, JSON.stringify(data, null, 2)); }
  catch (e) { console.error("saveJSON failed:", file, e); }
}

let users         = loadJSON(USERS_FILE, []);
let friends       = loadJSON(FRIENDS_FILE, {});
let pending       = loadJSON(PENDING_FILE, {});
let suggests      = loadJSON(SUGGEST_FILE, []);
let chatMessages  = loadJSON(MESSAGES_FILE, []);
let customStickers = loadJSON(STICKERS_FILE, []);
let leaderboard   = loadJSON(LEADERBOARD_FILE, []);

// ============================================
// STICKERS DIRECTORY
// ============================================
const STICKER_DIR = path.join(ROOT, "stickers");
if (!fs.existsSync(STICKER_DIR)) fs.mkdirSync(STICKER_DIR);
const CUSTOM_STICKER_DIR = path.join(STICKER_DIR, "custom");
if (!fs.existsSync(CUSTOM_STICKER_DIR)) fs.mkdirSync(CUSTOM_STICKER_DIR, { recursive: true });

// ============================================
// ADMIN CONFIG
// ============================================
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "farius2024";
const adminTokens = new Set();

function makeToken() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 12);
}

function requireAdmin(req, res, next) {
  const token = req.headers["x-admin-token"] || req.query.token;
  if (!token || !adminTokens.has(token)) {
    return res.status(401).json({ error: "Not authorized" });
  }
  next();
}

// ============================================
// RATE / BAN HELPERS
// ============================================
const SUGGEST_COOLDOWN_MS = 20 * 60 * 1000;

function getClientIp(req) {
  return (req.headers["x-forwarded-for"] || "").split(",")[0].trim()
      || req.socket.remoteAddress
      || "unknown";
}

function getIdentifier(req, body) {
  const name = (body && body.yourName || "").trim();
  if (name && name.toLowerCase() !== "anonymous") {
    return "user:" + name.toLowerCase();
  }
  return "ip:" + getClientIp(req);
}

function isBanned(identifier) {
  const bans = loadJSON(BANS_FILE, {});
  const entry = bans[identifier];
  if (!entry) return null;
  if (entry.until && entry.until > Date.now()) return entry;
  delete bans[identifier];
  saveJSON(BANS_FILE, bans);
  return null;
}

function isMuted(identifier) {
  const mutes = loadJSON(MUTES_FILE, {});
  const entry = mutes[identifier];
  if (!entry) return null;
  if (entry.until && entry.until > Date.now()) return entry;
  delete mutes[identifier];
  saveJSON(MUTES_FILE, mutes);
  return null;
}

function getLastSubmit(identifier) {
  const rate = loadJSON(RATE_FILE, {});
  return rate[identifier] || 0;
}

function setLastSubmit(identifier) {
  const rate = loadJSON(RATE_FILE, {});
  rate[identifier] = Date.now();
  saveJSON(RATE_FILE, rate);
}

// ============================================
// MIDDLEWARE
// ============================================
app.use(express.json({ limit: "8mb" }));

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  res.setHeader("Service-Worker-Allowed", "/");
  next();
});

// ============================================
// AUTH ROUTES
// ============================================
app.post("/api/signup", (req, res) => {
  try {
    const { username, password, avatar } = req.body || {};
    if (!username || !password) {
      return res.status(400).json({ error: "Missing username or password" });
    }
    if (username.length < 3) {
      return res.status(400).json({ error: "Username must be 3+ characters" });
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return res.status(400).json({ error: "Letters, numbers, underscores only" });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be 6+ characters" });
    }
    if (users.find(u => u.username.toLowerCase() === username.toLowerCase())) {
      return res.status(400).json({ error: "Username already taken" });
    }

    const user = { username, password, avatar: avatar || "png/logo.png" };
    users.push(user);
    saveJSON(USERS_FILE, users);

    friends[username] = friends[username] || [];
    saveJSON(FRIENDS_FILE, friends);

    res.json({ user: { username: user.username, avatar: user.avatar } });
  } catch (err) {
    console.error("signup error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/signin", (req, res) => {
  try {
    const { username, password } = req.body || {};
    const user = users.find(
      u => u.username.toLowerCase() === (username || "").toLowerCase() &&
           u.password === password
    );
    if (!user) {
      return res.status(401).json({ error: "Wrong username or password" });
    }
    res.json({ user: { username: user.username, avatar: user.avatar } });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ============================================
// FRIENDS ROUTES
// ============================================
app.get("/api/users/search", (req, res) => {
  try {
    const q = (req.query.q || "").toLowerCase();
    if (!q) return res.json({ results: [] });

    const results = users
      .filter(u => u.username.toLowerCase().includes(q))
      .map(u => ({ username: u.username, avatar: u.avatar }))
      .slice(0, 20);

    res.json({ results });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/friends/request", (req, res) => {
  try {
    const { from, to } = req.body || {};
    if (!from || !to) return res.status(400).json({ error: "Missing fields" });
    if (from === to) return res.status(400).json({ error: "Can't add yourself" });

    const target = users.find(u => u.username === to);
    if (!target) return res.status(404).json({ error: "User not found" });

    const fromUser = users.find(u => u.username === from);

    pending[to] = pending[to] || [];
    if (!pending[to].find(r => r.from === from)) {
      pending[to].push({ from, avatar: fromUser?.avatar || "png/logo.png" });
      saveJSON(PENDING_FILE, pending);
    }

    const socketId = onlineUsers.get(to);
    if (socketId) io.to(socketId).emit("friend-request", { from });

    res.json({ ok: true });
  } catch (err) {
    console.error("friend request error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/friends/requests", (req, res) => {
  try {
    res.json({ requests: pending[req.query.user] || [] });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/friends/respond", (req, res) => {
  try {
    const { user, from, accept } = req.body || {};
    pending[user] = (pending[user] || []).filter(r => r.from !== from);
    saveJSON(PENDING_FILE, pending);

    if (accept) {
      friends[user] = friends[user] || [];
      friends[from] = friends[from] || [];
      if (!friends[user].includes(from)) friends[user].push(from);
      if (!friends[from].includes(user)) friends[from].push(user);
      saveJSON(FRIENDS_FILE, friends);

      const sid1 = onlineUsers.get(user);
      const sid2 = onlineUsers.get(from);
      if (sid1) io.to(sid1).emit("friend-request");
      if (sid2) io.to(sid2).emit("friend-request");
    }
    res.json({ ok: true });
  } catch (err) {
    console.error("respond error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/friends", (req, res) => {
  try {
    const list = (friends[req.query.user] || []).map(name => {
      const u = users.find(x => x.username === name);
      return { username: name, avatar: u?.avatar || "png/logo.png" };
    });
    res.json({ friends: list });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ============================================
// STICKER ROUTES
// ============================================
const stickerStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, CUSTOM_STICKER_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase() || ".bin";
    cb(null, "sticker-" + Date.now() + "-" + Math.round(Math.random() * 1e6) + ext);
  }
});

const stickerUpload = multer({
  storage: stickerStorage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const ok = [
      "image/gif", "image/png", "image/jpeg", "image/webp",
      "video/mp4", "video/webm", "video/quicktime"
    ];
    if (ok.includes(file.mimetype)) cb(null, true);
    else cb(new Error("Only GIF, PNG, JPEG, WEBP, MP4, WEBM allowed"));
  }
});

app.use("/stickers", express.static(STICKER_DIR));

app.get("/api/stickers", (req, res) => {
  const builtin = [];
  for (let i = 1; i <= 10; i++) {
    builtin.push({ id: "builtin-" + i, url: "/stickers/" + i + ".gif", custom: false });
  }
  res.json({
    builtin,
    custom: customStickers.map(s => ({ id: s.id, url: s.url, custom: true }))
  });
});

app.post("/api/stickers/upload", stickerUpload.single("sticker"), (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file" });
    const url = "/stickers/custom/" + req.file.filename;
    const sticker = {
      id: "custom-" + Date.now().toString(36),
      url,
      uploadedAt: Date.now(),
      size: req.file.size,
      mimetype: req.file.mimetype
    };
    customStickers.push(sticker);
    saveJSON(STICKERS_FILE, customStickers);
    res.json({ ok: true, sticker });
  } catch (err) {
    console.error("sticker upload error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.delete("/api/stickers/:id", (req, res) => {
  const idx = customStickers.findIndex(s => s.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  const [removed] = customStickers.splice(idx, 1);
  saveJSON(STICKERS_FILE, customStickers);
  try {
    const filePath = path.join(ROOT, removed.url);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  } catch {}
  res.json({ ok: true });
});

// ============================================
// SUGGEST ROUTES (PUBLIC)
// ============================================
app.post("/api/suggest", (req, res) => {
  try {
    const {
      gameName,
      gameLink,
      gameCategory,
      gameDescription,
      yourName
    } = req.body || {};

    const identifier = getIdentifier(req, req.body);

    const ban = isBanned(identifier);
    if (ban) {
      const remaining = Math.ceil((ban.until - Date.now()) / 1000);
      return res.status(403).json({
        error: "You are banned from suggesting games.",
        reason: ban.reason || "Violation of rules",
        until: ban.until,
        remainingSeconds: remaining
      });
    }

    const mute = isMuted(identifier);
    if (mute) {
      const remaining = Math.ceil((mute.until - Date.now()) / 1000);
      return res.status(403).json({
        error: "You are muted and cannot suggest games right now.",
        reason: mute.reason || "You are muted",
        until: mute.until,
        remainingSeconds: remaining
      });
    }

    const lastSubmit = getLastSubmit(identifier);
    const elapsed = Date.now() - lastSubmit;
    if (lastSubmit && elapsed < SUGGEST_COOLDOWN_MS) {
      const remaining = Math.ceil((SUGGEST_COOLDOWN_MS - elapsed) / 1000);
      return res.status(429).json({
        error: "You're suggesting too fast. Please wait before submitting another game.",
        remainingSeconds: remaining,
        cooldownMinutes: 20
      });
    }

    if (!gameName || !gameLink || !gameCategory) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    if (gameName.length > 60) {
      return res.status(400).json({ error: "Game name too long" });
    }

    let parsed;
    try { parsed = new URL(gameLink); }
    catch { return res.status(400).json({ error: "Invalid game link" }); }

    if (!/^https?:$/.test(parsed.protocol)) {
      return res.status(400).json({ error: "Link must use http:// or https://" });
    }

    const suggestion = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      gameName: String(gameName).trim(),
      gameLink: String(gameLink).trim(),
      gameCategory: String(gameCategory).trim(),
      gameDescription: String(gameDescription || "").trim().slice(0, 300),
      yourName: String(yourName || "Anonymous").trim().slice(0, 40),
      identifier,
      ip: getClientIp(req),
      submittedAt: Date.now(),
      status: "pending"
    };

    suggests.push(suggestion);
    saveJSON(SUGGEST_FILE, suggests);
    setLastSubmit(identifier);

    io.emit("suggestion-new", suggestion);

    res.json({
      ok: true,
      id: suggestion.id,
      cooldownUntil: Date.now() + SUGGEST_COOLDOWN_MS
    });
  } catch (err) {
    console.error("suggest error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/suggest/status", (req, res) => {
  try {
    const identifier = getIdentifier(req, req.body);
    const ban = isBanned(identifier);
    const mute = isMuted(identifier);
    const lastSubmit = getLastSubmit(identifier);
    const elapsed = Date.now() - lastSubmit;
    const cooldownRemaining = lastSubmit && elapsed < SUGGEST_COOLDOWN_MS
      ? Math.ceil((SUGGEST_COOLDOWN_MS - elapsed) / 1000)
      : 0;

    res.json({
      banned: !!ban,
      banReason: ban?.reason || null,
      banUntil: ban?.until || null,
      muted: !!mute,
      muteReason: mute?.reason || null,
      muteUntil: mute?.until || null,
      cooldownSeconds: cooldownRemaining
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/suggest/warnings", (req, res) => {
  try {
    const identifier = getIdentifier(req, req.body);
    const warnings = loadJSON(WARN_FILE, {});
    const list = warnings[identifier] || [];
    const unseen = list.filter(w => !w.seen);

    if (unseen.length) {
      list.forEach(w => { w.seen = true; });
      warnings[identifier] = list;
      saveJSON(WARN_FILE, warnings);
    }

    res.json({ warnings: unseen });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ============================================
// LEADERBOARD
// ============================================
app.get("/api/leaderboard", (req, res) => {
  const scores = leaderboard
    .filter(score => score.status === "approved")
    .sort((a, b) => b.submittedAt - a.submittedAt);
  res.json({ scores });
});

app.post("/api/leaderboard/submit", (req, res) => {
  try {
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
    leaderboard.push(entry);
    saveJSON(LEADERBOARD_FILE, leaderboard);
    io.emit("leaderboard-new", { id: entry.id });
    res.status(201).json({ ok: true, score: entry });
  } catch (err) {
    console.error("leaderboard submit error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ============================================
// ADMIN ROUTES — AUTH
// ============================================
app.post("/api/admin/login", (req, res) => {
  try {
    const { password } = req.body || {};
    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: "Wrong password" });
    }
    const token = makeToken();
    adminTokens.add(token);
    setTimeout(() => adminTokens.delete(token), 12 * 60 * 60 * 1000);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/admin/logout", requireAdmin, (req, res) => {
  const token = req.headers["x-admin-token"] || req.query.token;
  adminTokens.delete(token);
  res.json({ ok: true });
});

app.get("/api/admin/verify", requireAdmin, (req, res) => {
  res.json({ ok: true });
});

app.get("/api/admin/leaderboard", requireAdmin, (req, res) => {
  const scores = leaderboard.slice().sort((a, b) => b.submittedAt - a.submittedAt);
  res.json({ scores, total: scores.length });
});

app.post("/api/admin/leaderboard/:id/:action", requireAdmin, (req, res) => {
  const score = leaderboard.find(entry => entry.id === req.params.id);
  if (!score) return res.status(404).json({ error: "Score not found" });
  if (!["approve", "reject"].includes(req.params.action)) {
    return res.status(400).json({ error: "Invalid action" });
  }
  score.status = req.params.action === "approve" ? "approved" : "rejected";
  score[score.status + "At"] = Date.now();
  saveJSON(LEADERBOARD_FILE, leaderboard);
  io.emit("leaderboard-updated", { id: score.id, status: score.status });
  res.json({ ok: true, score });
});

app.delete("/api/admin/leaderboard/:id", requireAdmin, (req, res) => {
  const index = leaderboard.findIndex(entry => entry.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Score not found" });
  leaderboard.splice(index, 1);
  saveJSON(LEADERBOARD_FILE, leaderboard);
  io.emit("leaderboard-updated", { id: req.params.id, deleted: true });
  res.json({ ok: true });
});

// ============================================
// ADMIN ROUTES — SUGGESTIONS
// ============================================
app.get("/api/admin/suggestions", requireAdmin, (req, res) => {
  const filter = req.query.status || "all";
  let list = suggests;
  if (filter !== "all") list = suggests.filter(s => s.status === filter);
  list = list.slice().sort((a, b) => b.submittedAt - a.submittedAt);
  res.json({ suggestions: list, total: suggests.length });
});

app.post("/api/admin/suggestions/:id/approve", requireAdmin, (req, res) => {
  const s = suggests.find(x => x.id === req.params.id);
  if (!s) return res.status(404).json({ error: "Not found" });
  s.status = "approved";
  s.approvedAt = Date.now();
  saveJSON(SUGGEST_FILE, suggests);
  io.emit("suggestion-updated", s);
  res.json({ ok: true, suggestion: s });
});

app.post("/api/admin/suggestions/:id/reject", requireAdmin, (req, res) => {
  const s = suggests.find(x => x.id === req.params.id);
  if (!s) return res.status(404).json({ error: "Not found" });
  s.status = "rejected";
  s.rejectedAt = Date.now();
  saveJSON(SUGGEST_FILE, suggests);
  io.emit("suggestion-updated", s);
  res.json({ ok: true, suggestion: s });
});

app.delete("/api/admin/suggestions/:id", requireAdmin, (req, res) => {
  const idx = suggests.findIndex(x => x.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  const [removed] = suggests.splice(idx, 1);
  saveJSON(SUGGEST_FILE, suggests);
  io.emit("suggestion-deleted", { id: removed.id });
  res.json({ ok: true });
});

app.get("/api/approved-games", (req, res) => {
  const approved = suggests
    .filter(s => s.status === "approved")
    .sort((a, b) => (b.approvedAt || b.submittedAt) - (a.approvedAt || a.submittedAt));
  res.json({ games: approved });
});

// ============================================
// ADMIN ROUTES — BANS / MUTES
// ============================================
app.get("/api/admin/bans", requireAdmin, (req, res) => {
  const bans = loadJSON(BANS_FILE, {});
  const mutes = loadJSON(MUTES_FILE, {});
  const now = Date.now();

  const activeBans = {};
  const activeMutes = {};
  Object.entries(bans).forEach(([k, v]) => { if (v.until > now) activeBans[k] = v; });
  Object.entries(mutes).forEach(([k, v]) => { if (v.until > now) activeMutes[k] = v; });

  res.json({ bans: activeBans, mutes: activeMutes });
});

app.post("/api/admin/ban", requireAdmin, (req, res) => {
  const { identifier, minutes, reason } = req.body || {};
  if (!identifier) return res.status(400).json({ error: "Missing identifier" });

  const mins = Math.max(1, parseInt(minutes) || 1440);
  const bans = loadJSON(BANS_FILE, {});
  bans[identifier] = {
    reason: String(reason || "Violation of rules").slice(0, 200),
    until: Date.now() + mins * 60 * 1000,
    bannedAt: Date.now()
  };
  saveJSON(BANS_FILE, bans);
  io.emit("ban-updated", { identifier, banned: true });
  res.json({ ok: true, until: bans[identifier].until });
});

app.post("/api/admin/unban", requireAdmin, (req, res) => {
  const { identifier } = req.body || {};
  if (!identifier) return res.status(400).json({ error: "Missing identifier" });

  const bans = loadJSON(BANS_FILE, {});
  delete bans[identifier];
  saveJSON(BANS_FILE, bans);
  io.emit("ban-updated", { identifier, banned: false });
  res.json({ ok: true });
});

app.post("/api/admin/mute", requireAdmin, (req, res) => {
  const { identifier, minutes, reason } = req.body || {};
  if (!identifier) return res.status(400).json({ error: "Missing identifier" });

  const mins = Math.max(30, parseInt(minutes) || 30);
  const mutes = loadJSON(MUTES_FILE, {});
  mutes[identifier] = {
    reason: String(reason || "You are muted").slice(0, 200),
    until: Date.now() + mins * 60 * 1000,
    mutedAt: Date.now()
  };
  saveJSON(MUTES_FILE, mutes);
  io.emit("mute-updated", { identifier, muted: true });
  res.json({ ok: true, until: mutes[identifier].until });
});

app.post("/api/admin/unmute", requireAdmin, (req, res) => {
  const { identifier } = req.body || {};
  if (!identifier) return res.status(400).json({ error: "Missing identifier" });

  const mutes = loadJSON(MUTES_FILE, {});
  delete mutes[identifier];
  saveJSON(MUTES_FILE, mutes);
  io.emit("mute-updated", { identifier, muted: false });
  res.json({ ok: true });
});

// ============================================
// ADMIN ROUTES — WARNINGS
// ============================================
app.post("/api/admin/warn", requireAdmin, (req, res) => {
  const { identifier, message } = req.body || {};
  if (!identifier || !message) {
    return res.status(400).json({ error: "Missing identifier or message" });
  }

  const warnings = loadJSON(WARN_FILE, {});
  warnings[identifier] = warnings[identifier] || [];
  warnings[identifier].push({
    message: String(message).slice(0, 500),
    sentAt: Date.now(),
    seen: false
  });
  saveJSON(WARN_FILE, warnings);

  io.emit("warn-sent", { identifier });
  res.json({ ok: true });
});

// ============================================
// ADMIN ROUTES — SUGGESTERS LIST
// ============================================
app.get("/api/admin/suggesters", requireAdmin, (req, res) => {
  const bans = loadJSON(BANS_FILE, {});
  const mutes = loadJSON(MUTES_FILE, {});
  const now = Date.now();

  const map = {};
  suggests.forEach(s => {
    const id = s.identifier || "ip:" + (s.ip || "unknown");
    if (!map[id]) {
      map[id] = {
        identifier: id,
        name: s.yourName || "Anonymous",
        ip: s.ip || "",
        count: 0,
        lastSubmit: 0,
        lastGame: ""
      };
    }
    map[id].count++;
    if (s.submittedAt > map[id].lastSubmit) {
      map[id].lastSubmit = s.submittedAt;
      map[id].lastGame = s.gameName;
    }
    if (s.yourName && s.yourName.toLowerCase() !== "anonymous") {
      map[id].name = s.yourName;
    }
  });

  const list = Object.values(map).map(u => ({
    ...u,
    banned: !!(bans[u.identifier] && bans[u.identifier].until > now),
    banUntil: bans[u.identifier]?.until || null,
    banReason: bans[u.identifier]?.reason || null,
    muted: !!(mutes[u.identifier] && mutes[u.identifier].until > now),
    muteUntil: mutes[u.identifier]?.until || null,
    muteReason: mutes[u.identifier]?.reason || null
  }));

  list.sort((a, b) => b.lastSubmit - a.lastSubmit);
  res.json({ suggesters: list });
});

// ============================================
// API 404
// ============================================
app.use("/api", (req, res) => {
  res.status(404).json({ error: "API route not found: " + req.originalUrl });
});

// ============================================
// STATIC FILES
// ============================================
app.use(express.static(ROOT));
app.use("/uploads", express.static(path.join(ROOT, "uploads")));

// ============================================
// SOCKET.IO
// ============================================
io.on("connection", (socket) => {
  // Send chat history to this new client
  socket.emit("chat-history", chatMessages.slice(-100));

  socket.on("join", ({ username, avatar }) => {
    if (!username) return;

    socket.username = username;
    socket.avatar = avatar || "png/logo.png";

    onlineUsers.set(username, socket.id);
    onlineList.set(username, { avatar: socket.avatar });

    io.emit("user-list", Array.from(onlineList.entries()).map(([name, data]) => ({
      username: name,
      avatar: data.avatar
    })));

    io.emit("system", { text: `${username} joined the chat` });

    const list = (friends[username] || []).map(name => {
      const u = users.find(x => x.username === name);
      return { username: name, avatar: u?.avatar || "png/logo.png" };
    });
    socket.emit("friends-update", list);
  });

  socket.on("message", (payload) => {
    if (!socket.username) return;

    let text = "";
    let replyTo = null;
    let stickerUrl = null;

    if (typeof payload === "string") {
      text = payload;
    } else if (payload && typeof payload === "object") {
      text = payload.text || "";
      replyTo = payload.replyTo || null;
      stickerUrl = payload.stickerUrl || null;
    }

    if (!text && !stickerUrl) return;

    const msg = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      username: socket.username,
      avatar: socket.avatar,
      text: text ? String(text).slice(0, 500) : "",
      stickerUrl: stickerUrl || null,
      replyTo: replyTo ? {
        id: replyTo.id,
        username: replyTo.username,
        text: replyTo.text ? String(replyTo.text).slice(0, 120) : "",
        stickerUrl: replyTo.stickerUrl || null
      } : null,
      time: Date.now()
    };

    chatMessages.push(msg);
    if (chatMessages.length > 300) {
      chatMessages = chatMessages.slice(-300);
    }
    saveJSON(MESSAGES_FILE, chatMessages);

    io.emit("message", msg);
  });

  socket.on("refresh-friends", () => {
    if (!socket.username) return;
    const list = (friends[socket.username] || []).map(name => {
      const u = users.find(x => x.username === name);
      return { username: name, avatar: u?.avatar || "png/logo.png" };
    });
    socket.emit("friends-update", list);
  });

  socket.on("disconnect", () => {
    if (socket.username) {
      onlineUsers.delete(socket.username);
      onlineList.delete(socket.username);
      io.emit("system", { text: `${socket.username} left the chat` });
      io.emit("user-list", Array.from(onlineList.entries()).map(([name, data]) => ({
        username: name,
        avatar: data.avatar
      })));
    }
  });
});

// ============================================
// START
// ============================================
server.listen(PORT, () => {
  console.log("");
  console.log("  Farius running on http://localhost:" + PORT);
  console.log("  Chat:     /chat.html");
  console.log("  Suggest:  /suggest.html");
  console.log("  Admin:    /adminSuggested.html");
  console.log("  Admin password: " + ADMIN_PASSWORD);
  console.log("");
});