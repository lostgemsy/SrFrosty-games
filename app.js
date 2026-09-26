/* ============================================
   Farius Games — main client script
   Handles: game grid, search, random button,
            live polls, and announcements.
   ============================================ */

(function () {
  'use strict';

  /* --------------------------------------------
     Data source
     Expects window.FARIUS_GAMES to be set by games.js
     before this script runs.
     -------------------------------------------- */
  var games = Array.isArray(window.FARIUS_GAMES) ? window.FARIUS_GAMES : [];

  /* --------------------------------------------
     DOM
     -------------------------------------------- */
  var grid = document.querySelector('#gameGrid');
  var search = document.querySelector('#search');
  var resultCount = document.querySelector('#resultCount');
  var gameCount = document.querySelector('#gameCount');
  var clearSearch = document.querySelector('#clearSearch');
  var randomBtn = document.querySelector('#randomBtn');

  /* --------------------------------------------
     Helpers
     -------------------------------------------- */
  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, function (c) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[c];
    });
  }

  function displayName(folder) {
    return String(folder)
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  function slugify(value) {
    return String(value)
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9._-]/g, '');
  }

  // Builds a safe URL for a game folder + entry file
  function gamePath(folder, entry) {
    var parts = String(folder).split('/').map(encodeURIComponent);
    var entryParts = String(entry || 'index.html').split('/').map(encodeURIComponent);
    return '/games/' + parts.join('/') + '/' + entryParts.join('/');
  }

  // Builds a list of image URLs to try, in order
  function imageCandidates(game) {
    var base = '/images/';
    var name = slugify(game.folder);
    var list = [];

    if (game.image) list.push(base + game.image);

    ['png', 'jpg', 'jpeg', 'webp', 'gif'].forEach(function (ext) {
      list.push(base + name + '.' + ext);
    });

    return list;
  }

  /* --------------------------------------------
     Render the game grid
     -------------------------------------------- */
  function renderGrid(filter) {
    if (!grid) return;

    var query = String(filter || '').trim().toLowerCase();
    var shown = games.filter(function (g) {
      return displayName(g.folder).toLowerCase().indexOf(query) !== -1;
    });

    // Clear current grid
    grid.innerHTML = '';

    shown.forEach(function (game, index) {
      var card = document.createElement('a');
      card.className = 'game-card';
      card.href = '/game.html?game=' + encodeURIComponent(game.folder);
      card.style.setProperty('--delay', Math.min(index, 30) * 18 + 'ms');

      var art = document.createElement('div');
      art.className = 'game-art';

      var img = document.createElement('img');
      img.alt = '';
      img.loading = 'lazy';

      var sources = imageCandidates(game);
      var sourceIndex = 0;

      img.onerror = function () {
        sourceIndex++;
        if (sourceIndex < sources.length) {
          img.src = sources[sourceIndex];
        } else {
          // No image found — remove the img so the placeholder shows
          img.remove();
        }
      };

      if (sources.length) img.src = sources[0];

      var play = document.createElement('span');
      play.className = 'play';
      play.textContent = 'PLAY';

      art.appendChild(img);
      art.appendChild(play);

      var title = document.createElement('h3');
      title.textContent = displayName(game.folder);

      card.appendChild(art);
      card.appendChild(title);
      grid.appendChild(card);
    });

    // Update counters
    if (resultCount) {
      resultCount.textContent = query
        ? shown.length + ' of ' + games.length + ' games'
        : games.length + ' games';
    }

    if (clearSearch) clearSearch.hidden = !query;
    if (gameCount) gameCount.textContent = games.length;

    if (!shown.length) {
      grid.innerHTML = '<div class="empty">No games match that search.</div>';
    }
  }

  /* --------------------------------------------
     Search + clear + random
     -------------------------------------------- */
  if (search) {
    search.addEventListener('input', function () {
      renderGrid(search.value);
    });
  }

  if (clearSearch) {
    clearSearch.addEventListener('click', function () {
      if (!search) return;
      search.value = '';
      renderGrid();
      search.focus();
    });
  }

  if (randomBtn) {
    randomBtn.onclick = function () {
      if (!games.length) return;
      var pick = games[Math.floor(Math.random() * games.length)];
      location.href = '/game.html?game=' + encodeURIComponent(pick.folder);
    };
  }

  // Initial render
  renderGrid();

  /* ============================================
     Poll
     ============================================ */
  async function loadPoll() {
    try {
      var response = await fetch('/api/polls', { cache: 'no-store' });
      if (!response.ok) return;

      var poll = await response.json();
      if (!poll || !poll.active) return;

      var pollEl = document.querySelector('#poll');
      var questionEl = document.querySelector('#pollQuestion');
      var optionsEl = document.querySelector('#pollOptions');
      var resultEl = document.querySelector('#pollResult');
      var closeBtn = document.querySelector('#closePoll');

      if (!pollEl || !questionEl || !optionsEl) return;

      questionEl.textContent = poll.question || '';
      optionsEl.innerHTML = '';
      if (resultEl) resultEl.textContent = '';

      var storageKey = 'farius-poll-' + poll.id;
      var hasVoted = sessionStorage.getItem(storageKey);

      (poll.options || []).forEach(function (option, index) {
        var btn = document.createElement('button');
        btn.className = 'poll-option';
        btn.textContent = option;
        btn.disabled = !!hasVoted;

        btn.onclick = async function () {
          btn.disabled = true;

          // Disable all buttons immediately so double-clicks can't fire
          Array.prototype.forEach.call(optionsEl.children, function (child) {
            child.disabled = true;
          });

          try {
            var voteRes = await fetch('/api/polls', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify({
                action: 'vote',
                id: poll.id,
                option: index
              })
            });

            var data = await voteRes.json();
            sessionStorage.setItem(storageKey, '1');

            if (resultEl) {
              resultEl.textContent = data.correct
                ? 'Correct answer!'
                : 'Thanks for voting.';
            }
          } catch (err) {
            if (resultEl) resultEl.textContent = 'Could not record your vote.';
            // Re-enable buttons so user can retry
            Array.prototype.forEach.call(optionsEl.children, function (child) {
              child.disabled = false;
            });
          }
        };

        optionsEl.appendChild(btn);
      });

      pollEl.hidden = false;

      if (closeBtn) {
        closeBtn.onclick = function () {
          pollEl.hidden = true;
        };
      }
    } catch (err) {
      // Silent fail — polls are optional
      console.warn('[farius] poll load failed:', err);
    }
  }

  /* ============================================
     Announcement
     ============================================ */
  async function loadAnnouncement() {
    try {
      var response = await fetch('/api/announcements', { cache: 'no-store' });
      if (!response.ok) return;

      var announcement = await response.json();
      if (!announcement || !announcement.active) return;

      var storageKey = 'farius-announcement-' + announcement.id;
      if (sessionStorage.getItem(storageKey)) return;

      var delayMs = Math.max(0, Number(announcement.delaySeconds) || 0) * 1000;

      setTimeout(function () {
        var slot = document.querySelector('#announcementSlot');
        if (!slot) return;

        slot.hidden = false;

        // Build the announcement card safely
        var card = document.createElement('div');
        card.className = 'announcement';

        var close = document.createElement('button');
        close.className = 'x';
        close.textContent = '×';
        close.onclick = function () {
          card.remove();
          slot.hidden = true;
        };

        var eyebrow = document.createElement('p');
        eyebrow.className = 'eyebrow';
        eyebrow.textContent = 'ANNOUNCEMENT';

        var title = document.createElement('h2');
        title.textContent = announcement.title || 'Farius Games';

        var message = document.createElement('p');
        message.textContent = announcement.message || '';

        card.appendChild(close);
        card.appendChild(eyebrow);
        card.appendChild(title);
        card.appendChild(message);

        slot.innerHTML = '';
        slot.appendChild(card);

        sessionStorage.setItem(storageKey, '1');
      }, delayMs);
    } catch (err) {
      // Silent fail — announcements are optional
      console.warn('[farius] announcement load failed:', err);
    }
  }

  /* --------------------------------------------
     Kick off async loads
     -------------------------------------------- */
  loadPoll();
  loadAnnouncement();
})();