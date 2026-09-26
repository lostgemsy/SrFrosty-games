import { initPoll } from './poll.js';
import { initAnnouncement } from './announcement.js';

// stagger the logo letters on first load (the one orchestrated motion moment)
document.querySelectorAll('.logo .char').forEach((el, i) => {
  el.style.animationDelay = `${i * 28}ms`;
});

// games.js (a plain, non-module script) runs before this file and has
// already built one <a class="gl-card"> per game inside #gameGallery.
// This just adds search on top of that, without touching games.js.
function initSearch() {
  const input = document.getElementById('search-input');
  const grid = document.getElementById('gameGallery');
  const countEl = document.getElementById('game-count');
  if (!grid) return;

  const cards = () => Array.from(grid.querySelectorAll('.gl-card'));
  if (countEl) countEl.textContent = cards().length;

  const empty = document.createElement('div');
  empty.className = 'empty';
  empty.textContent = 'No games match your search.';
  empty.style.display = 'none';
  grid.after(empty);

  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    let visible = 0;
    cards().forEach((card) => {
      const name = (card.querySelector('h3')?.textContent || '').toLowerCase();
      const match = !q || name.includes(q);
      card.style.display = match ? '' : 'none';
      if (match) visible += 1;
    });
    empty.style.display = visible ? 'none' : 'block';
  });
}

initSearch();
initPoll();
initAnnouncement();
