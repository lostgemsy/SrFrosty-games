(() => {
  const grid = document.getElementById('gameGrid');
  const searchInput = document.getElementById('search');
  const resultCount = document.getElementById('resultCount');
  const gameCount = document.getElementById('gameCount');
  const clearSearch = document.getElementById('clearSearch');
  const randomButton = document.getElementById('randomBtn');
  const imageExtensions = ['webp', 'png', 'jpg', 'jpeg', 'gif', 'svg'];
  let games = [];

  function safeUrl(value) {
    try {
      const url = new URL(value, window.location.href);
      return url.origin === window.location.origin ? url.href : null;
    } catch {
      return null;
    }
  }

  function normalizeGame(item) {
    if (typeof item === 'string') item = { path: item };
    if (!item || typeof item !== 'object') return null;

    const path = item.path || item.url || item.href || '';
    const url = safeUrl(path);
    if (!url) return null;

    const name = item.name || item.title || decodeURIComponent(
      new URL(url).pathname.replace(/\/$/, '').split('/').pop() || 'Game'
    ).replace(/[-_]/g, ' ');
    const slug = item.slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const cover = item.image || item.cover || item.thumbnail || '';

    return { name, slug, url, cover: cover ? safeUrl(cover) : null };
  }

  async function loadGames() {
    const suppliedCatalog = window.GAMES || window.games;
    if (Array.isArray(suppliedCatalog) && suppliedCatalog.length) {
      return suppliedCatalog.map(normalizeGame).filter(Boolean);
    }

    try {
      const response = await fetch('/games/games.json', { cache: 'no-store' });
      if (response.ok) {
        const catalog = await response.json();
        const list = Array.isArray(catalog) ? catalog : catalog.games;
        if (Array.isArray(list)) return list.map(normalizeGame).filter(Boolean);
      }
    } catch {
      // Fall back to a browsable /games directory when no manifest is available.
    }

    try {
      const response = await fetch('/games/', { cache: 'no-store' });
      if (!response.ok) return [];
      const html = await response.text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const found = new Map();

      doc.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('?') || href.startsWith('#')) return;
        const url = safeUrl(new URL(href, response.url).href);
        if (!url) return;
        const parsed = new URL(url);
        if (!parsed.pathname.startsWith('/games/')) return;
        const relativePath = parsed.pathname.slice('/games/'.length);
        if (!relativePath || relativePath === 'games.json' || relativePath.startsWith('../')) return;

        const isDirectory = parsed.pathname.endsWith('/');
        const isEntryPage = /\/index\.html?$/i.test(parsed.pathname);
        if (!isDirectory && !isEntryPage) return;

        const cleanPath = isEntryPage ? parsed.pathname.replace(/index\.html?$/i, '') : parsed.pathname;
        const title = link.textContent.trim().replace(/\/$/, '') ||
          decodeURIComponent(cleanPath.split('/').filter(Boolean).pop() || 'Game').replace(/[-_]/g, ' ');
        found.set(cleanPath, { name: title, path: cleanPath });
      });

      return [...found.values()].map(normalizeGame).filter(Boolean);
    } catch {
      return [];
    }
  }

  function imageCandidates(game) {
    if (game.cover) return [game.cover];
    return imageExtensions.map(extension => `/images/${encodeURIComponent(game.slug)}.${extension}`);
  }

  function render() {
    const query = searchInput.value.trim().toLocaleLowerCase();
    const visibleGames = games.filter(game => game.name.toLocaleLowerCase().includes(query));
    grid.replaceChildren();
    clearSearch.hidden = !query;
    resultCount.textContent = query
      ? `${visibleGames.length} of ${games.length} games`
      : `${games.length} ${games.length === 1 ? 'game' : 'games'} available`;

    if (!visibleGames.length) {
      const message = document.createElement('p');
      message.className = 'empty-state';
      message.textContent = games.length
        ? 'No games match that search. Try another title.'
        : 'No games found yet. Add a /games/games.json catalog or enable directory listing for /games/.';
      grid.append(message);
      return;
    }

    visibleGames.forEach((game, index) => {
      const card = document.createElement('a');
      card.className = 'game-card';
      card.href = game.url;
      card.setAttribute('aria-label', `Play ${game.name}`);
      card.style.animationDelay = `${Math.min(index * 35, 350)}ms`;

      const artwork = document.createElement('div');
      artwork.className = 'game-art';
      const placeholder = document.createElement('span');
      placeholder.className = 'game-placeholder';
      placeholder.setAttribute('aria-hidden', 'true');
      placeholder.textContent = game.name.trim().charAt(0).toUpperCase() || '▶';
      artwork.append(placeholder);

      const image = document.createElement('img');
      image.alt = '';
      image.loading = 'lazy';
      const candidates = imageCandidates(game);
      let candidateIndex = 0;
      image.addEventListener('error', () => {
        candidateIndex += 1;
        if (candidateIndex < candidates.length) image.src = candidates[candidateIndex];
        else image.remove();
      });
      image.src = candidates[0];
      artwork.append(image);

      const title = document.createElement('h3');
      title.className = 'game-title';
      title.textContent = game.name;
      const hint = document.createElement('span');
      hint.className = 'game-hint';
      hint.textContent = 'PLAY GAME ↗';
      card.append(artwork, title, hint);
      grid.append(card);
    });
  }

  searchInput.addEventListener('input', render);
  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.focus();
    render();
  });
  randomButton.addEventListener('click', () => {
    const cards = grid.querySelectorAll('a.game-card');
    if (cards.length) cards[Math.floor(Math.random() * cards.length)].click();
  });

  loadGames().then(loadedGames => {
    games = loadedGames;
    gameCount.textContent = games.length;
    render();
  }).catch(() => {
    games = [];
    gameCount.textContent = '0';
    render();
  });
})();
