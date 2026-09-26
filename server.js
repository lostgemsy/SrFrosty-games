/* =========================================================
   Yumix Games — Node server
   Runs with `npm start`. Uses PORT env var if set.
   Serves static files, handles clean URLs, mounts any
   /api/*.js handlers, and returns JSON for API 404s.
   ========================================================= */

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const ROOT = __dirname;
const PORT = process.env.PORT || 3000;

/* =========================================================
   Middleware
   ========================================================= */
app.use(express.json({ limit: '1mb' }));

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Request logger
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const ms = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} → ${res.statusCode} (${ms}ms)`);
  });
  next();
});

/* =========================================================
   Clean URL resolver
   Tries: exact file → file.html → folder/index.html
   ========================================================= */
function resolvePath(urlPath) {
  let clean = decodeURIComponent(urlPath.split('?')[0]);
  if (clean.includes('..')) return null;
  if (clean.startsWith('/')) clean = clean.slice(1);

  const exact = path.join(ROOT, clean);
  if (fs.existsSync(exact) && fs.statSync(exact).isFile()) return exact;

  const withHtml = path.join(ROOT, clean + '.html');
  if (fs.existsSync(withHtml) && fs.statSync(withHtml).isFile()) return withHtml;

  const indexPath = path.join(ROOT, clean, 'index.html');
  if (fs.existsSync(indexPath) && fs.statSync(indexPath).isFile()) return indexPath;

  return null;
}

/* =========================================================
   Mount API routes from /api/
   Skips files starting with _ (helpers)
   ========================================================= */
const apiDir = path.join(ROOT, 'api');
const mounted = [];

if (fs.existsSync(apiDir)) {
  fs.readdirSync(apiDir)
    .filter(f => f.endsWith('.js') && !f.startsWith('_'))
    .forEach(file => {
      const route = '/api/' + file.replace(/\.js$/, '');
      const full = path.join(apiDir, file);
      try {
        delete require.cache[require.resolve(full)];
        const handler = require(full);
        if (typeof handler === 'function') {
          app.all(route, handler);
          mounted.push(route);
        }
      } catch (err) {
        console.warn('  Could not load', route + ':', err.message);
      }
    });
}

/* =========================================================
   Static files with clean URLs
   ========================================================= */
app.get('/*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();

  const filePath = resolvePath(req.path);
  if (!filePath) {
    const custom404 = path.join(ROOT, '404.html');
    if (fs.existsSync(custom404)) return res.status(404).sendFile(custom404);
    return res.status(404).send('404 — Not Found');
  }
  res.sendFile(filePath);
});

/* =========================================================
   API 404 — JSON, not HTML
   ========================================================= */
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API route not found: ' + req.originalUrl });
});

/* =========================================================
   Error handler
   ========================================================= */
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Server error' });
});

/* =========================================================
   Start
   ========================================================= */
app.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('  ┌────────────────────────────────────────────┐');
  console.log('  │                                            │');
  console.log('  │   Yumix Games is running                   │');
  console.log('  │                                            │');
  console.log('  │   Local:   http://localhost:' + PORT);
  console.log('  │                                            │');
  if (mounted.length) {
    console.log('  │   API routes mounted:                      │');
    mounted.forEach(r => {
      console.log('  │     - ' + r.padEnd(36) + ' │');
    });
  } else {
    console.log('  │   No API routes found (that\'s fine)       │');
  }
  console.log('  │                                            │');
  console.log('  └────────────────────────────────────────────┘');
  console.log('');
});