// _auth.js — very deliberately simple: one shared password, checked
// against the ADMIN_PASSWORD environment variable. This protects the
// write endpoints (creating polls/announcements), not just the admin
// page URLs. See README.md for how to set it on Vercel.

function checkPassword(req) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false; // never allow writes if nothing is configured
  const provided =
    (req.body && req.body.password) ||
    req.headers['x-admin-password'];
  return provided === expected;
}

module.exports = { checkPassword };
