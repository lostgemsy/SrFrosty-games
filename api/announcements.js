const { get, set, authorized } = require('./_store');

const KEY = 'farius:announcement';

// Bounds — keep these in sync with the frontend hints
const MAX_TITLE = 120;
const MAX_MESSAGE = 1000;
const MAX_DELAY_SECONDS = 86400; // 24 hours

/* ============================================
   Helpers
   ============================================ */
function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body || '{}');
    } catch {
      return {};
    }
  }
  return req.body;
}

function normalizeString(value, maxLength, fallback = '') {
  if (value === undefined || value === null) return fallback;
  return String(value).trim().slice(0, maxLength);
}

function normalizeDelay(value) {
  const n = Number(value);
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(Math.floor(n), MAX_DELAY_SECONDS);
}

/* ============================================
   Handler
   ============================================ */
module.exports = async (req, res) => {
  try {
    /* ------------------------------------------
       GET — public. Returns the current announcement.
       ------------------------------------------ */
    if (req.method === 'GET') {
      const current = await get(KEY);
      return res.status(200).json(current || { active: false });
    }

    /* ------------------------------------------
       Everything below requires the admin password.
       ------------------------------------------ */
    if (req.method === 'POST' || req.method === 'PUT') {
      if (!authorized(req)) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
    }

    /* ------------------------------------------
       POST — create or replace the announcement.
       ------------------------------------------ */
    if (req.method === 'POST') {
      const body = parseBody(req);

      const message = normalizeString(body.message, MAX_MESSAGE);
      if (!message) {
        return res.status(400).json({ error: 'Message required' });
      }

      const title = normalizeString(body.title, MAX_TITLE) || 'Farius Games';
      const delaySeconds = normalizeDelay(body.delaySeconds);

      const announcement = {
        id: Date.now().toString(36),
        title,
        message,
        delaySeconds,
        active: body.active !== false,
        createdAt: new Date().toISOString()
      };

      await set(KEY, announcement);
      return res.status(200).json(announcement);
    }

    /* ------------------------------------------
       PUT — toggle or update just the active flag.
       ------------------------------------------ */
    if (req.method === 'PUT') {
      const body = parseBody(req);

      const current = await get(KEY);
      if (!current) {
        return res.status(404).json({ error: 'No announcement' });
      }

      // Accept either { active: true/false } or a raw boolean
      const nextActive =
        typeof body === 'boolean'
          ? body
          : Boolean(body.active);

      current.active = nextActive;
      current.updatedAt = new Date().toISOString();

      await set(KEY, current);
      return res.status(200).json(current);
    }

    /* ------------------------------------------
       DELETE — optional: let admins clear the announcement.
       ------------------------------------------ */
    if (req.method === 'DELETE') {
      if (!authorized(req)) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      await set(KEY, { active: false });
      return res.status(200).json({ active: false });
    }

    /* ------------------------------------------
       Anything else
       ------------------------------------------ */
    res.setHeader('Allow', 'GET, POST, PUT, DELETE');
    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('[announcement] error:', error);
    return res.status(500).json({ error: error.message || 'Server error' });
  }
};