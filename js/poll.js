// poll.js — renders the active poll and handles voting

export async function initPoll() {
  const el = document.getElementById('poll-widget');
  if (!el) return;

  let poll;
  try {
    const res = await fetch('/api/polls');
    const data = await res.json();
    poll = data.poll;
  } catch (e) {
    el.style.display = 'none';
    return;
  }

  if (!poll) { el.style.display = 'none'; return; }

  const votedKey = `farius-poll-voted:${poll.id}`;
  const votedOptionId = localStorage.getItem(votedKey);

  render(poll, votedOptionId);

  async function render(p, pickedId) {
    const totalVotes = p.options.reduce((s, o) => s + (o.votes || 0), 0);
    const revealed = !!pickedId;

    el.innerHTML = `
      <div class="poll-eyebrow">Poll</div>
      <div class="poll-q">${p.question}</div>
      <div class="poll-options">
        ${p.options.map(o => {
          const pct = totalVotes ? Math.round((o.votes / totalVotes) * 100) : 0;
          const isCorrect = revealed && o.id === p.correctOptionId;
          const isWrongPick = revealed && pickedId === o.id && o.id !== p.correctOptionId;
          return `
            <button class="poll-opt${isCorrect ? ' correct' : ''}${isWrongPick ? ' wrong-pick' : ''}"
                    data-id="${o.id}" ${revealed ? 'disabled' : ''}>
              <span class="fill" style="width:${revealed ? pct : 0}%"></span>
              <span class="label">
                <span>${o.text}</span>
                <span>${revealed ? pct + '%' : ''}</span>
              </span>
            </button>`;
        }).join('')}
      </div>
      ${revealed ? `<div class="poll-note">${totalVotes} vote${totalVotes === 1 ? '' : 's'} · correct answer marked ✓</div>` : ''}
    `;

    if (!revealed) {
      el.querySelectorAll('.poll-opt').forEach(btn => {
        btn.addEventListener('click', async () => {
          el.querySelectorAll('.poll-opt').forEach(b => b.disabled = true);
          try {
            const res = await fetch('/api/polls', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ action: 'vote', pollId: p.id, optionId: btn.dataset.id }),
            });
            const data = await res.json();
            localStorage.setItem(votedKey, btn.dataset.id);
            render(data.poll, btn.dataset.id);
          } catch (e) {
            render(p, null);
          }
        });
      });
    }
  }
}
