const { Server } = require("socket.io");
const { neon } = require("@neondatabase/serverless");
const { Redis } = require("@upstash/redis");

const sql = neon(process.env.DATABASE_URL);
const redis = Redis.fromEnv();

let io;

async function getIO(res) {
  if (io) return io;
  const httpServer = res.socket.server;
  io = new Server(httpServer, {
    path: "/socket.io/",
    cors: { origin: "*" },
    transports: ["websocket", "polling"]
  });

  io.on("connection", async (socket) => {
    // Chat history from DB (last 100)
    try {
      const history = await sql`
        SELECT id, username, avatar, text, sticker_url AS "stickerUrl",
               reply_to AS "replyTo", time
        FROM messages
        ORDER BY time DESC
        LIMIT 100
      `;
      socket.emit("chat-history", history.reverse());
    } catch (e) { console.error("history error:", e); }

    // Track online
    socket.on("join", async ({ username, avatar }) => {
      if (!username) return;
      socket.username = username;
      socket.avatar = avatar || "png/logo.png";
      await redis.hset("online", { [username]: JSON.stringify({ avatar: socket.avatar, joined: Date.now() }) });
      const all = await redis.hgetall("online");
      const list = Object.entries(all || {}).map(([name, data]) => {
        const parsed = typeof data === "string" ? JSON.parse(data) : data;
        return { username: name, avatar: parsed.avatar };
      });
      io.emit("user-list", list);
      io.emit("system", { text: `${username} joined the chat` });
    });

    // Messages
    socket.on("message", async (payload) => {
      if (!socket.username) return;
      let text = "", replyTo = null, stickerUrl = null;
      if (typeof payload === "string") text = payload;
      else if (payload && typeof payload === "object") {
        text = payload.text || "";
        replyTo = payload.replyTo || null;
        stickerUrl = payload.stickerUrl || null;
      }
      if (!text && !stickerUrl) return;

      const msg = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        username: socket.username,
        avatar: socket.avatar,
        text: text.slice(0, 500),
        stickerUrl,
        replyTo,
        time: Date.now()
      };

      try {
        await sql`
          INSERT INTO messages (id, username, avatar, text, sticker_url, reply_to, time)
          VALUES (${msg.id}, ${msg.username}, ${msg.avatar}, ${msg.text},
                  ${msg.stickerUrl}, ${msg.replyTo ? JSON.stringify(msg.replyTo) : null}, ${msg.time})
        `;
      } catch (e) { console.error("msg insert error:", e); }

      io.emit("message", msg);
    });

    socket.on("refresh-friends", async () => {
      if (!socket.username) return;
      const rows = await sql`
        SELECT b AS username, u.avatar
        FROM friends f JOIN users u ON u.username = f.b
        WHERE f.a = ${socket.username}
      `;
      socket.emit("friends-update", rows);
    });

    socket.on("disconnect", async () => {
      if (socket.username) {
        await redis.hdel("online", socket.username);
        const all = await redis.hgetall("online");
        const list = Object.entries(all || {}).map(([name, data]) => {
          const parsed = typeof data === "string" ? JSON.parse(data) : data;
          return { username: name, avatar: parsed.avatar };
        });
        io.emit("user-list", list);
        io.emit("system", { text: `${socket.username} left the chat` });
      }
    });
  });

  // Also create the messages table if it doesn't exist
  await sql`
    CREATE TABLE IF NOT EXISTS messages (
      id TEXT PRIMARY KEY,
      username TEXT,
      avatar TEXT,
      text TEXT,
      sticker_url TEXT,
      reply_to TEXT,
      time BIGINT
    );
  `;

  return io;
}

module.exports = async (req, res) => {
  await getIO(res);
  // Vercel needs us to let the underlying http server handle it
  res.end();
};

module.exports.config = { api: { bodyParser: false } };