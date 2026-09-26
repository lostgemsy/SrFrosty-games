/* ============================================
   Farius shared store
   Uses Upstash Redis (via Vercel KV or direct)
   with an in-memory fallback for local dev.
   ============================================ */

const crypto = require('crypto');

/* --------------------------------------------
   In-memory fallback
   Persists for the lifetime of the Node process.
   Cleared whenever the server restarts.
   -------------------------------------------- */
const memory =
  globalThis.__FARIUS_STORE ||
  (globalThis.__FARIUS_STORE = new Map());

/* --------------------------------------------
   Redis env resolution
   Supports both Vercel KV and Upstash directly.
   -------------------------------------------- */
function getRedisConfig() {
  const url =
    process.env.KV_REST_API_URL ||
    process.env.UPSTASH_REDIS_REST_URL;

  const token =
    process.env.KV_REST_API_TOKEN ||
    process.env.UPSTASH_REDIS_REST_TOKEN;

  return url && token ? { url, token } : null;
}

/* --------------------------------------------
   Low-level Redis command
   Returns the parsed JSON value, or null if
   Redis isn't configured.
   Throws on HTTP errors so callers can decide.
   -------------------------------------------- */
async function redis(command) {
  const config = getRedisConfig();
  if (!config) return null;

  const response = await fetch(config.url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.token}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(command)
  });

  if (!response.ok) {
    throw new Error('Redis error ' + response.status);
  }

  const payload = await response.json();

  // Upstash returns { result: ... } — the actual value is in .result
  return payload && Object.prototype.hasOwnProperty.call(payload, 'result')
    ? payload.result
    : null;
}

/* --------------------------------------------
   get(key)
   Returns the parsed value, or null if missing.
   Falls back to in-memory store when Redis is
   unavailable.
   -------------------------------------------- */
async function get(key) {
  if (typeof key !== 'string' || !key) return null;

  // Try Redis first
  try {
    const raw = await redis(['GET', key]);
    if (raw !== null && raw !== undefined) {
      // Raw value might be a JSON string, or already an object
      if (typeof raw === 'string') {
        try {
          return JSON.parse(raw);
        } catch {
          // Not JSON — return as-is
          return raw;
        }
      }
      return raw;
    }
  } catch (error) {
    console.warn('[store] Redis GET failed, using memory:', error.message);
  }

  // Memory fallback
  return memory.has(key) ? memory.get(key) : null;
}

/* --------------------------------------------
   set(key, value)
   Serializes to JSON and stores.
   Always writes to memory too, so if Redis is
   unavailable the value still persists for the
   lifetime of this process.
   -------------------------------------------- */
async function set(key, value) {
  if (typeof key !== 'string' || !key) return;

  // Always write memory first — cheap and safe
  memory.set(key, value);

  // Then try Redis
  try {
    await redis(['SET', key, JSON.stringify(value)]);
  } catch (error) {
    console.warn('[store] Redis SET failed, memory only:', error.message);
  }
}

/* --------------------------------------------
   authorized(req)
   Compares the x-admin-password header against
   ADMIN_PASSWORD using timing-safe comparison.
   -------------------------------------------- */
function authorized(req) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;

  const provided =
    (req.headers && (req.headers['x-admin-password'] || req.headers['X-Admin-Password'])) ||
    '';

  // Timing-safe compare requires equal lengths
  const a = Buffer.from(String(expected));
  const b = Buffer.from(String(provided));

  if (a.length !== b.length) return false;

  try {
    return crypto.timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

module.exports = { get, set, authorized };