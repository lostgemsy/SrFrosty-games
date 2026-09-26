const { get, set, authorized } = require('./_store');

const KEY = 'farius:poll';

const MAX_QUESTION = 300;
const MAX_OPTIONS = 8;
const MIN_OPTIONS = 2;

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

function normalizeQuestion(value) {
  if (value === undefined || value === null) return '';
  return String(value).trim().slice(0, MAX_QUESTION);
}

function normalizeOptions(value) {
  if (!Array.isArray(value)) return [];
  return value
    .map(function (opt) {
      if (opt === undefined || opt === null) return '';
      return String(opt).trim();
    })
    .filter(function (opt) { return opt.length > 0; })
    .slice(0, MAX_OPTIONS);
}

function normalizeCorrectIndex(value, optionCount) {
  const n = Number(value);
  if (!Number.isInteger(n) || n < 0 || n >= optionCount) return 0;
  return n;
}

function ensureVotesShape(poll) {
  // Always make sure votes is an array of the right length,
  // filled with non-negative integers.
  const count = poll.options.length;
  if (!Array.isArray(poll.votes) || poll.votes.length !== count) {
    poll.votes = Array(count).fill(0);
  } else {
    poll.votes = poll.votes.map(function (v) {
      const n = Number(v);
      return Number.isFinite(n) && n >= 0 ? Math.floor(n) : 0;
    });
  }
  return poll;
}

/* ============================================
   Handler
   ============================================ */
module.exports = async (req, res) => {
  try {
    /* ------------------------------------------
       GET — public. Returns the current poll
       with votes stripped out, so no one can
       peek at the tally before answering.
       ------------------------------------------ */
    if (req.method === 'GET') {
      const poll = await get(KEY);
      if (!poll) return res.status(200).json({ active: false });

      const safe = { ...poll };
      delete safe.votes;
      return res.status(200).json(safe);
    }

    /* ------------------------------------------
       POST — two actions:
         - action: 'vote'  → public
         - anything else   → admin (creates poll)
       ------------------------------------------ */
    if (req.method === 'POST') {
      const body = parseBody(req);

      /* ----- Vote ----- */
      if (body.action === 'vote') {
        const poll = await get(KEY);
        if (!poll || !poll.active) {
          return res.status(404).json({ error: 'No active poll' });
        }

        const index = Number(body.option);
        if (
          !Number.isInteger(index) ||
          index < 0 ||
          index >= poll.options.length
        ) {
          return res.status(400).json({ error: 'Invalid option' });
        }

        ensureVotesShape(poll);
        poll.votes[index] += 1;
        poll.totalVotes = (poll.totalVotes || 0) + 1;

        await set(KEY, poll);

        return res.status(200).json({
          correct: index === poll.correctIndex
        });
      }

      /* ----- Create poll (admin only) ----- */
      if (!authorized(req)) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const question = normalizeQuestion(body.question);
      const options = normalizeOptions(body.options);

      if (!question) {
        return res.status(400).json({ error: 'Question required' });
      }
      if (options.length < MIN_OPTIONS) {
        return res.status(400).json({
          error: 'At least ' + MIN_OPTIONS + ' options are required'
        });
      }

      const correctIndex = normalizeCorrectIndex(
        body.correctIndex,
        options.length
      );

      const poll = {
        id: Date.now().toString(36),
        question,
        options,
        correctIndex,
        active: body.active !== false,
        votes: Array(options.length).fill(0),
        totalVotes: 0,
        createdAt: new Date().toISOString()
      };

      await set(KEY, poll);
      return res.status(200).json(poll);
    }

    /* ------------------------------------------
       PUT — toggle active state (admin only).
       ------------------------------------------ */
    if (req.method === 'PUT') {
      if (!authorized(req)) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const poll = await get(KEY);
      if (!poll) {
        return res.status(404).json({ error: 'No poll' });
      }

      const body = parseBody(req);
      const nextActive =
        typeof body === 'boolean' ? body : Boolean(body.active);

      poll.active = nextActive;
      poll.updatedAt = new Date().toISOString();

      await set(KEY, poll);
      return res.status(200).json(poll);
    }

    /* ------------------------------------------
       DELETE — clear the current poll (admin).
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
    console.error('[poll] error:', error);
    return res.status(500).json({ error: error.message || 'Server error' });
  }
};