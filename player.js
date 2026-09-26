/* ============================================
   Farius Games — player page script
   Loads a game inside #gameFrame based on ?game=<folder>
   ============================================ */

(function () {
  'use strict';

  /* --------------------------------------------
     DOM
     -------------------------------------------- */
  var titleEl = document.querySelector('#title');
  var frame = document.querySelector('#gameFrame');
  var statusEl = document.querySelector('#status');
  var errorEl = document.querySelector('#loadError');
  var errorTextEl = document.querySelector('#errorText');
  var backBtn = document.querySelector('#back');
  var fullscreenBtn = document.querySelector('#fullscreen');

  /* --------------------------------------------
     Helpers
     -------------------------------------------- */
  function displayName(folder) {
    return String(folder)
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  // Builds a safe URL for a game folder + entry file
  function buildGameUrl(folder, entry) {
    var folderParts = String(folder).split('/').map(encodeURIComponent);
    var entryParts = String(entry || 'index.html').split('/').map(encodeURIComponent);
    return '/games/' + folderParts.join('/') + '/' + entryParts.join('/');
  }

  function setStatus(text, state) {
    if (!statusEl) return;
    statusEl.textContent = text;
    // Remove any previous state class
    statusEl.classList.remove('ready', 'error', 'loading');
    if (state) statusEl.classList.add(state);
  }

  function showError(message) {
    if (!errorEl || !errorTextEl) return;
    errorEl.hidden = false;
    errorTextEl.textContent = message || '';
  }

  function hideError() {
    if (!errorEl) return;
    errorEl.hidden = true;
    if (errorTextEl) errorTextEl.textContent = '';
  }

  /* --------------------------------------------
     Parse the ?game= parameter
     -------------------------------------------- */
  var params = new URLSearchParams(location.search);
  var folder = params.get('game');

  // No game specified — bounce back to the library
  if (!folder) {
    location.href = '/';
    return;
  }

  /* --------------------------------------------
     Find the game in the catalog
     -------------------------------------------- */
  var games = Array.isArray(window.FARIUS_GAMES) ? window.FARIUS_GAMES : [];
  var game = games.find(function (g) {
    return g && g.folder === folder;
  });

  // If it's not in the catalog, try a HEAD request to see if the folder exists
  var gameCheckPromise;
  if (game) {
    gameCheckPromise = Promise.resolve(game);
  } else {
    gameCheckPromise = fetch(
      '/games/' + encodeURIComponent(folder) + '/index.html',
      { method: 'HEAD' }
    )
      .then(function (response) {
        if (!response.ok) throw new Error('not found');
        return { folder: folder, entry: 'index.html' };
      })
      .catch(function () {
        return null;
      });
  }

  /* --------------------------------------------
     Load the game
     -------------------------------------------- */
  gameCheckPromise.then(function (resolvedGame) {
    if (!resolvedGame) {
      setStatus('NOT FOUND', 'error');
      showError('The game "' + folder + '" is not listed in the catalog and no files were found in /games/.');
      return;
    }

    game = resolvedGame;

    // Update the page title
    var displayTitle = game.name || displayName(game.folder);
    if (titleEl) titleEl.textContent = displayTitle;
    document.title = displayTitle + ' · Farius Games';

    // Show a loading state
    setStatus('LOADING', 'loading');
    hideError();

    // Build the final URL and load it
    var entry = game.entry || 'index.html';
    var url = buildGameUrl(game.folder, entry);

    if (frame) {
      frame.src = url;

      // Success
      frame.onload = function () {
        setStatus('READY', 'ready');
        hideError();
      };

      // Browser-level error (rare — usually fires only for network failures)
      frame.onerror = function () {
        setStatus('ERROR', 'error');
        showError('The game could not be loaded: ' + url);
      };

      // Safety timeout: if the frame never fires onload within 15s,
      // assume something blocked embedding and show an error state.
      var timeoutId = setTimeout(function () {
        if (statusEl && statusEl.textContent === 'LOADING') {
          setStatus('BLOCKED', 'error');
          showError(
            'This game took too long to load. It may refuse to be embedded inside another site. ' +
            'Try opening it in a new tab.'
          );
        }
      }, 15000);

      // Clear the timeout as soon as the frame reports it finished loading
      frame.addEventListener('load', function () {
        clearTimeout(timeoutId);
      }, { once: true });
    }
  });

  /* --------------------------------------------
     Back button
     -------------------------------------------- */
  if (backBtn) {
    backBtn.addEventListener('click', function () {
      if (history.length > 1) {
        history.back();
      } else {
        location.href = '/';
      }
    });
  }

  /* --------------------------------------------
     Fullscreen button
     -------------------------------------------- */
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', function () {
      if (!frame) return;

      // If we're already fullscreen, exit
      if (document.fullscreenElement) {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();
        return;
      }

      // Otherwise, try to fullscreen the frame itself first,
      // then fall back to the document element.
      var target = frame;
      var request =
        target.requestFullscreen ||
        target.webkitRequestFullscreen ||
        target.msRequestFullscreen;

      if (request) {
        var result = request.call(target);
        if (result && typeof result.catch === 'function') {
          result.catch(function () {
            // Fall back to fullscreening the whole document
            var el = document.documentElement;
            var req2 =
              el.requestFullscreen ||
              el.webkitRequestFullscreen ||
              el.msRequestFullscreen;
            if (req2) req2.call(el).catch(function () {});
          });
        }
      } else {
        // No requestFullscreen available — try the document element
        var el2 = document.documentElement;
        if (el2.requestFullscreen) el2.requestFullscreen().catch(function () {});
      }
    });
  }

  /* --------------------------------------------
     Update the fullscreen button label
     -------------------------------------------- */
  document.addEventListener('fullscreenchange', function () {
    if (!fullscreenBtn) return;
    fullscreenBtn.textContent = document.fullscreenElement
      ? 'Exit fullscreen'
      : 'Fullscreen';
  });

  /* --------------------------------------------
     Keyboard shortcuts
     -------------------------------------------- */
  document.addEventListener('keydown', function (e) {
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;

    // Esc: exit fullscreen (don't navigate away — the browser already handles this)
    if (e.key === 'Escape' && document.fullscreenElement) {
      if (document.exitFullscreen) document.exitFullscreen();
    }

    // F: toggle fullscreen
    if ((e.key === 'f' || e.key === 'F') && !e.ctrlKey && !e.metaKey) {
      if (fullscreenBtn) fullscreenBtn.click();
    }
  });
})();