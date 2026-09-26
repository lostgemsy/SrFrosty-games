const { get, set } = require('./_store');
const { checkPassword } = require('./_auth');

function newId() {
  return Math.random().toString(36).slice(2, 10);
}

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const activeId = await get('polls:active');
    const poll = activeId ? await get(`polls:${activeId}`) : null;
    return res.status(200).json({ poll });
  }

  if (req.method === 'POST') {
    const body = req.body || {};

    // --- anyone can vote ---
    if (body.action === 'vote') {
      const { pollId, optionId } = body;
      const poll = await get(`polls:${pollId}`);
      if (!poll) return res.status(404).json({ error: 'Poll not found' });
      poll.options = poll.options.map((o) =>
        o.id === optionId ? { ...o, votes: (o.votes || 0) + 1 } : o
      );
      await set(`polls:${pollId}`, poll);
      return res.status(200).json({ poll });
    }

    // --- everything past this point is admin-only (creating/closing polls) ---
    if (!checkPassword(req)) return res.status(401).json({ error: 'Unauthorized' });

    if (body.action === 'close') {
      await set('polls:active', null);
      return res.status(200).json({ ok: true });
    }

    const { question, options, correctOptionIndex } = body;
    if (!question || !Array.isArray(options) || options.filter(Boolean).length < 2) {
      return res.status(400).json({ error: 'Need a question and at least 2 options' });
    }
    const id = newId();
    const poll = {
      id,
      question,
      options: options.filter(Boolean).map((text, i) => ({ id: `o${i}`, text, votes: 0 })),
      correctOptionId: `o${correctOptionIndex}`,
      createdAt: Date.now(),
    };
    await set(`polls:${id}`, poll);
    await set('polls:active', id);
    return res.status(200).json({ poll });
  }

  res.status(405).json({ error: 'Method not allowed' });
};
