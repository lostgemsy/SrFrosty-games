const { get, set } = require('./_store');
const { checkPassword } = require('./_auth');

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const a = await get('announcement:active');
    if (a && a.expiresAt > Date.now()) return res.status(200).json({ announcement: a });
    return res.status(200).json({ announcement: null });
  }

  if (req.method === 'POST') {
    if (!checkPassword(req)) return res.status(401).json({ error: 'Unauthorized' });
    const body = req.body || {};

    if (body.action === 'clear') {
      await set('announcement:active', null);
      return res.status(200).json({ ok: true });
    }

    const { text, durationSeconds } = body;
    if (!text || !durationSeconds || Number(durationSeconds) <= 0) {
      return res.status(400).json({ error: 'Need text and a positive durationSeconds' });
    }
    const announcement = {
      id: Math.random().toString(36).slice(2, 10),
      text,
      createdAt: Date.now(),
      durationSeconds: Number(durationSeconds),
      expiresAt: Date.now() + Number(durationSeconds) * 1000,
    };
    await set('announcement:active', announcement);
    return res.status(200).json({ announcement });
  }

  res.status(405).json({ error: 'Method not allowed' });
};
