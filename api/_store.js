// _store.js — thin key/value wrapper.
//
// If a Vercel KV database is attached to the project (KV_REST_API_URL /
// KV_REST_API_TOKEN get injected automatically), everything is shared
// across all visitors and survives deploys — this is what you want in
// production.
//
// If no KV is attached, this falls back to an in-memory Map so the site
// still runs locally, but data will NOT reliably persist or be shared
// across visitors in real production traffic. See README.md.

let kv = null;
if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
  try {
    kv = require('@vercel/kv').kv;
  } catch (e) {
    kv = null;
  }
}

const mem = globalThis.__FARIUS_MEM_STORE__ || (globalThis.__FARIUS_MEM_STORE__ = new Map());

async function get(key) {
  if (kv) return (await kv.get(key)) ?? null;
  return mem.has(key) ? mem.get(key) : null;
}

async function set(key, value) {
  if (kv) {
    if (value === null || value === undefined) return kv.del(key);
    return kv.set(key, value);
  }
  mem.set(key, value);
  return value;
}

module.exports = { get, set, usingKv: !!kv };
