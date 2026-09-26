// announcement.js — fullscreen announcement overlay with a countdown auto-hide

export function initAnnouncement() {
  const overlay = document.getElementById('announce-overlay');
  if (!overlay) return;
  const textEl = document.getElementById('announce-text');
  const fillEl = document.getElementById('announce-bar-fill');
  const closeBtn = document.getElementById('announce-close');

  let hideTimer = null;
  let shownId = null;

  async function poll() {
    try {
      const res = await fetch('/api/announcements');
      const data = await res.json();
      const a = data.announcement;

      if (!a) return;
      if (a.id === shownId) return; // already showing/dismissed this one
      if (sessionStorage.getItem('farius-announce-dismissed') === a.id) return;

      const remainingMs = a.expiresAt - Date.now();
      if (remainingMs <= 0) return;

      shownId = a.id;
      show(a, remainingMs);
    } catch (e) { /* fail silent, site still works */ }
  }

  function show(a, remainingMs) {
    textEl.textContent = a.text;
    overlay.classList.add('show');
    fillEl.style.transition = 'none';
    fillEl.style.transform = 'scaleX(1)';
    // next frame, animate the bar down over the remaining time
    requestAnimationFrame(() => {
      fillEl.style.transition = `transform ${remainingMs}ms linear`;
      fillEl.style.transform = 'scaleX(0)';
    });
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hide, remainingMs);
  }

  function hide() {
    overlay.classList.remove('show');
    if (shownId) sessionStorage.setItem('farius-announce-dismissed', shownId);
  }

  closeBtn && closeBtn.addEventListener('click', hide);

  poll();
  setInterval(poll, 15000); // pick up new announcements without a refresh
}
