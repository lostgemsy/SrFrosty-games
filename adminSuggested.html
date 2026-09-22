<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="image/png" href="png/logo.png">
<title>Admin · Suggestions — Farius</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800;14..32,900&display=swap" rel="stylesheet">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
}

body {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background: #f7f7f7;
    color: #111;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    background-image:
        radial-gradient(circle at 25% 15%, rgba(0,0,0,0.015) 0%, transparent 50%),
        radial-gradient(circle at 75% 85%, rgba(0,0,0,0.015) 0%, transparent 50%),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23e0e0e0' stroke-width='1.2'%3E%3Cpath d='M0 0h120v120H0z'/%3E%3Cpath d='M60 0v120M0 60h120'/%3E%3Ccircle cx='60' cy='60' r='20'/%3E%3C/g%3E%3C/svg%3E");
    background-size: 120px 120px;
}

/* ============================================
   LOGIN GATE
   ============================================ */
#gate {
    position: fixed;
    inset: 0;
    z-index: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(247, 247, 247, 0.96);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
}

#gate.hidden { display: none; }

.gate-card {
    width: 100%;
    max-width: 420px;
    padding: 36px 32px;
    border-radius: 22px;
    background: #ffffff;
    border: 2px solid #e8e8e8;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.12);
    text-align: center;
    animation: fadeInUp 0.5s ease-out both;
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.gate-card h1 {
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: -0.04em;
    margin-bottom: 6px;
}

.gate-card p {
    color: #777;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 26px;
}

.gate-input {
    width: 100%;
    height: 54px;
    padding: 0 20px;
    border-radius: 14px;
    border: 2px solid #e0e0e0;
    background: #fafafa;
    color: #111;
    font-family: inherit;
    font-size: 15px;
    font-weight: 500;
    outline: none;
    margin-bottom: 16px;
    transition: border-color 0.25s ease;
}

.gate-input:focus {
    border-color: #111;
    background: #fff;
}

.gate-btn {
    width: 100%;
    height: 54px;
    border: 2px solid #111;
    border-radius: 14px;
    background: #111;
    color: #fff;
    font-family: inherit;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(.2,.8,.2,1);
}

.gate-btn:hover {
    background: #333;
    border-color: #333;
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
}

.gate-btn:active { transform: translateY(0); }

.gate-error {
    margin-top: 14px;
    padding: 12px 16px;
    border-radius: 12px;
    background: #fff0f0;
    border: 2px solid #ffd4d4;
    color: #c0392b;
    font-size: 13px;
    font-weight: 600;
    display: none;
}

.gate-error.show { display: block; }

/* ============================================
   MAIN
   ============================================ */
.main-wrapper {
    width: 100%;
    max-width: 1200px;
    padding: 0 0 60px;
    animation: fadeInUp 0.6s ease-out both;
}

.page-header {
    width: 100%;
    margin-bottom: 32px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}

.page-header .title-block h1 {
    font-size: clamp(1.8rem, 4vw, 2.4rem);
    font-weight: 900;
    letter-spacing: -0.05em;
    color: #111;
    margin-bottom: 6px;
}

.page-header .title-block p {
    font-size: 0.92rem;
    color: #666;
    font-weight: 500;
}

.header-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.header-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    border-radius: 12px;
    background: #ffffff;
    border: 2px solid #e2e2e2;
    color: #111;
    text-decoration: none;
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
}

.header-btn:hover {
    background: #111;
    border-color: #111;
    color: #fff;
    transform: translateY(-2px);
}

.header-btn.signout {
    background: #111;
    border-color: #111;
    color: #fff;
}

.header-btn.signout:hover {
    background: #e74c3c;
    border-color: #e74c3c;
}

.header-btn svg {
    width: 15px;
    height: 15px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2.2;
    stroke-linecap: round;
    stroke-linejoin: round;
}

/* ============================================
   STATS
   ============================================ */
.stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 14px;
    width: 100%;
    margin-bottom: 28px;
}

.stat-card {
    padding: 20px 22px;
    border-radius: 16px;
    background: #ffffff;
    border: 2px solid #e8e8e8;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
    transition: all 0.2s ease;
}

.stat-card:hover {
    border-color: #111;
    transform: translateY(-2px);
}

.stat-card .stat-num {
    font-size: 1.9rem;
    font-weight: 900;
    letter-spacing: -0.05em;
    color: #111;
    line-height: 1;
    margin-bottom: 6px;
}

.stat-card .stat-label {
    font-size: 11px;
    font-weight: 800;
    color: #888;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

/* ============================================
   TABS
   ============================================ */
.tabs {
    display: flex;
    gap: 6px;
    padding: 5px;
    background: #ffffff;
    border: 2px solid #ececec;
    border-radius: 14px;
    margin-bottom: 24px;
    width: fit-content;
    max-width: 100%;
    overflow-x: auto;
}

.tab {
    padding: 10px 22px;
    border: 0;
    border-radius: 10px;
    background: transparent;
    color: #666;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.tab:hover { color: #111; background: #f5f5f5; }
.tab.active { background: #111; color: #fff; }

.tab .badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 999px;
    background: #f0f0f0;
    color: #666;
    font-size: 10px;
    font-weight: 800;
    min-width: 20px;
    text-align: center;
}

.tab.active .badge {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
}

/* ============================================
   SUGGESTION CARDS
   ============================================ */
.list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 20px;
    width: 100%;
}

.card {
    padding: 22px;
    border-radius: 18px;
    background: #ffffff;
    border: 2px solid #e8e8e8;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
    display: flex;
    flex-direction: column;
    animation: fadeInUp 0.4s ease both;
}

.card:hover {
    border-color: #111;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
}

.card.status-approved { background: #f6fbf8; border-color: #b9e6ce; }
.card.status-rejected { background: #fdf6f6; border-color: #ffd4d4; opacity: 0.82; }

.card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 14px;
}

.card-name {
    font-size: 1.15rem;
    font-weight: 800;
    color: #111;
    letter-spacing: -0.02em;
    line-height: 1.3;
    word-break: break-word;
    flex: 1;
}

.card-cat {
    display: inline-block;
    padding: 4px 11px;
    border-radius: 999px;
    background: #111;
    color: #fff;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    flex: none;
}

.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    border-radius: 999px;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    width: fit-content;
    margin-bottom: 14px;
}

.status-badge::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
}

.status-badge.pending { background: #fff8e0; color: #b8860b; }
.status-badge.approved { background: #d4f0e0; color: #27764c; }
.status-badge.rejected { background: #ffd4d4; color: #c0392b; }

.card-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-radius: 11px;
    background: #f7f7f7;
    border: 2px solid #ececec;
    color: #444;
    font-size: 12px;
    font-weight: 600;
    word-break: break-all;
    text-decoration: none;
    margin-bottom: 14px;
    transition: all 0.2s ease;
}

.card-link:hover {
    background: #111;
    border-color: #111;
    color: #fff;
}

.card-link svg {
    flex: none;
    width: 14px;
    height: 14px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2.2;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.card-desc {
    font-size: 13px;
    color: #555;
    font-weight: 500;
    line-height: 1.55;
    margin-bottom: 14px;
    padding: 10px 14px;
    border-left: 3px solid #e8e8e8;
    background: rgba(0, 0, 0, 0.015);
    border-radius: 0 10px 10px 0;
}

.card-desc.empty {
    color: #aaa;
    font-style: italic;
}

.card-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    padding-top: 12px;
    border-top: 2px solid #f0f0f0;
    font-size: 10.5px;
    color: #999;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 16px;
}

.card-meta .by { color: #555; }

.card-actions {
    display: flex;
    gap: 8px;
    margin-top: auto;
}

.action-btn {
    flex: 1;
    height: 44px;
    border: 2px solid #e0e0e0;
    border-radius: 11px;
    background: #fafafa;
    color: #111;
    font-family: inherit;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    letter-spacing: 0.02em;
}

.action-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.action-btn:active { transform: translateY(0); }

.action-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

.action-btn.approve {
    background: #111;
    border-color: #111;
    color: #fff;
}

.action-btn.approve:hover:not(:disabled) {
    background: #27764c;
    border-color: #27764c;
}

.action-btn.reject:hover:not(:disabled) {
    background: #e74c3c;
    border-color: #e74c3c;
    color: #fff;
}

.action-btn.delete:hover:not(:disabled) {
    background: #222;
    border-color: #222;
    color: #fff;
}

.action-btn svg {
    width: 14px;
    height: 14px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
}

/* ============================================
   USERS TAB
   ============================================ */
.users-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
}

.user-row {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px 22px;
    background: #ffffff;
    border: 2px solid #e8e8e8;
    border-radius: 16px;
    transition: all 0.2s ease;
    animation: fadeInUp 0.3s ease both;
}

.user-row:hover { border-color: #111; }
.user-row.banned { background: #fdf6f6; border-color: #ffd4d4; }
.user-row.muted { background: #fff8e0; border-color: #ffe4a3; }

.user-info { flex: 1; min-width: 0; }

.user-name {
    font-weight: 800;
    font-size: 15px;
    color: #111;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

.user-meta {
    font-size: 11.5px;
    color: #888;
    font-weight: 600;
    letter-spacing: 0.03em;
}

.user-status {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 9px;
    border-radius: 999px;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.user-status::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
}

.user-status.banned { background: #ffd4d4; color: #c0392b; }
.user-status.muted { background: #ffe4a3; color: #b8860b; }
.user-status.active { background: #d4f0e0; color: #27764c; }

.user-actions {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    flex: none;
}

.user-action-btn {
    padding: 9px 14px;
    border-radius: 10px;
    border: 2px solid #e0e0e0;
    background: #fafafa;
    color: #111;
    font-family: inherit;
    font-size: 11.5px;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
}

.user-action-btn:hover {
    background: #111;
    border-color: #111;
    color: #fff;
    transform: translateY(-1px);
}

.user-action-btn.ban { background: #111; border-color: #111; color: #fff; }
.user-action-btn.ban:hover { background: #c0392b; border-color: #c0392b; }
.user-action-btn.unban { background: #27764c; border-color: #27764c; color: #fff; }
.user-action-btn.unban:hover { background: #1a5c38; }
.user-action-btn.mute { background: #b8860b; border-color: #b8860b; color: #fff; }
.user-action-btn.mute:hover { background: #966d09; }
.user-action-btn.unmute { background: #27764c; border-color: #27764c; color: #fff; }
.user-action-btn.unmute:hover { background: #1a5c38; }
.user-action-btn.warn { background: #3b4cca; border-color: #3b4cca; color: #fff; }
.user-action-btn.warn:hover { background: #2d3b99; }

.user-action-btn svg {
    width: 13px;
    height: 13px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
}

/* ============================================
   MODAL
   ============================================ */
.modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 900;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    animation: fadeIn 0.2s ease;
}

.modal-backdrop.open { display: flex; }

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.modal {
    width: 100%;
    max-width: 480px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 28px;
    border-radius: 20px;
    background: #ffffff;
    border: 2px solid #e8e8e8;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
    animation: modalPop 0.3s cubic-bezier(.2,.8,.2,1);
}

@keyframes modalPop {
    from { opacity: 0; transform: scale(0.94) translateY(20px); }
    to { opacity: 1; transform: none; }
}

.modal h2 {
    font-size: 1.3rem;
    font-weight: 900;
    letter-spacing: -0.03em;
    color: #111;
    margin-bottom: 6px;
}

.modal .modal-sub {
    font-size: 13px;
    color: #777;
    font-weight: 500;
    margin-bottom: 22px;
    line-height: 1.5;
}

.modal .modal-sub b { color: #111; }

.modal-field {
    margin-bottom: 16px;
}

.modal-field label {
    display: block;
    font-size: 12px;
    font-weight: 800;
    color: #111;
    letter-spacing: 0.03em;
    margin-bottom: 8px;
}

.modal-field input[type="text"],
.modal-field input[type="number"],
.modal-field textarea,
.modal-field select {
    width: 100%;
    padding: 12px 16px;
    border-radius: 12px;
    border: 2px solid #e0e0e0;
    background: #fafafa;
    color: #111;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    transition: border-color 0.2s ease, background 0.2s ease;
}

.modal-field textarea {
    resize: vertical;
    min-height: 90px;
    line-height: 1.5;
}

.modal-field input:focus,
.modal-field textarea:focus,
.modal-field select:focus {
    border-color: #111;
    background: #fff;
}

.preset-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
}

.preset {
    padding: 8px 14px;
    border-radius: 10px;
    border: 2px solid #e0e0e0;
    background: #fafafa;
    color: #111;
    font-family: inherit;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
}

.preset:hover {
    background: #111;
    border-color: #111;
    color: #fff;
}

.preset.selected {
    background: #111;
    border-color: #111;
    color: #fff;
}

.modal-actions {
    display: flex;
    gap: 10px;
    margin-top: 22px;
}

.modal-btn {
    flex: 1;
    height: 48px;
    border-radius: 12px;
    border: 2px solid #e0e0e0;
    background: #fafafa;
    color: #111;
    font-family: inherit;
    font-size: 13.5px;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.2s ease;
}

.modal-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.modal-btn.cancel { background: #fafafa; }
.modal-btn.cancel:hover { background: #f0f0f0; border-color: #ccc; }

.modal-btn.primary {
    background: #111;
    border-color: #111;
    color: #fff;
}

.modal-btn.primary:hover { background: #333; border-color: #333; }

.modal-btn.danger {
    background: #c0392b;
    border-color: #c0392b;
    color: #fff;
}

.modal-btn.danger:hover { background: #a02f22; border-color: #a02f22; }

.modal-btn.warn-btn {
    background: #3b4cca;
    border-color: #3b4cca;
    color: #fff;
}

.modal-btn.warn-btn:hover { background: #2d3b99; border-color: #2d3b99; }

/* ============================================
   EMPTY / LOADING
   ============================================ */
.empty {
    width: 100%;
    padding: 80px 24px;
    text-align: center;
    border-radius: 22px;
    background: #ffffff;
    border: 2px dashed #e0e0e0;
}

.empty h2 {
    font-size: 1.3rem;
    font-weight: 800;
    color: #333;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
}

.empty p {
    font-size: 0.92rem;
    color: #888;
    font-weight: 500;
}

.loading {
    width: 100%;
    padding: 80px 24px;
    text-align: center;
    color: #888;
    font-size: 14px;
    font-weight: 600;
}

.loading .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #e0e0e0;
    border-top-color: #111;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin: 0 auto 16px;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* ============================================
   TOAST
   ============================================ */
.toast {
    position: fixed;
    left: 50%;
    bottom: 28px;
    z-index: 1000;
    padding: 13px 22px;
    border-radius: 999px;
    background: #111;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, 20px);
    transition: opacity 0.25s ease, transform 0.3s cubic-bezier(.2,.8,.2,1);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

.toast.show { opacity: 1; transform: translate(-50%, 0); }
.toast.success { background: #27764c; }
.toast.error { background: #c0392b; }
.toast.warn { background: #3b4cca; }

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 720px) {
    body { padding: 16px; }

    .page-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .page-header .title-block h1 { font-size: 1.8rem; }

    .header-actions { width: 100%; }
    .header-btn { flex: 1; justify-content: center; }

    .stats { grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .stat-card { padding: 16px; }
    .stat-card .stat-num { font-size: 1.5rem; }

    .list { grid-template-columns: 1fr; gap: 14px; }
    .card { padding: 18px; border-radius: 15px; }

    .action-btn { height: 40px; font-size: 11.5px; }

    .user-row {
        flex-direction: column;
        align-items: stretch;
        gap: 12px;
    }

    .user-actions { width: 100%; }
    .user-action-btn { flex: 1; justify-content: center; }
}
</style>
</head>
<body>

<!-- ============================================
     LOGIN GATE
     ============================================ -->
<div id="gate">
    <div class="gate-card">
        <h1>Admin Access</h1>
        <p>Enter the admin password to manage suggestions.</p>
        <input type="password" class="gate-input" id="gatePassword" placeholder="Admin password" autocomplete="current-password">
        <button class="gate-btn" id="gateLogin">Unlock</button>
        <div class="gate-error" id="gateError"></div>
    </div>
</div>

<!-- ============================================
     MAIN
     ============================================ -->
<div class="main-wrapper" id="mainWrapper" hidden>

    <header class="page-header">
        <div class="title-block">
            <h1>Game Suggestions</h1>
            <p>Review, approve, or reject community-submitted games.</p>
        </div>
        <div class="header-actions">
            <a href="games.html" class="header-btn">
                <svg viewBox="0 0 24 24">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Games
            </a>
            <button class="header-btn" id="refreshBtn">
                <svg viewBox="0 0 24 24">
                    <path d="M23 4v6h-6M1 20v-6h6"/>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                </svg>
                Refresh
            </button>
            <button class="header-btn signout" id="signoutBtn">
                <svg viewBox="0 0 24 24">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <path d="M16 17l5-5-5-5M21 12H9"/>
                </svg>
                Sign out
            </button>
        </div>
    </header>

    <div class="stats">
        <div class="stat-card">
            <div class="stat-num" id="statTotal">0</div>
            <div class="stat-label">Total</div>
        </div>
        <div class="stat-card">
            <div class="stat-num" id="statPending">0</div>
            <div class="stat-label">Pending</div>
        </div>
        <div class="stat-card">
            <div class="stat-num" id="statApproved">0</div>
            <div class="stat-label">Approved</div>
        </div>
        <div class="stat-card">
            <div class="stat-num" id="statRejected">0</div>
            <div class="stat-label">Rejected</div>
        </div>
    </div>

    <div class="tabs" role="tablist">
        <button class="tab active" data-filter="pending">
            Pending <span class="badge" id="badgePending">0</span>
        </button>
        <button class="tab" data-filter="approved">
            Approved <span class="badge" id="badgeApproved">0</span>
        </button>
        <button class="tab" data-filter="rejected">
            Rejected <span class="badge" id="badgeRejected">0</span>
        </button>
        <button class="tab" data-filter="all">
            All <span class="badge" id="badgeAll">0</span>
        </button>
        <button class="tab" data-filter="users">
            Users <span class="badge" id="badgeUsers">0</span>
        </button>
    </div>

    <div id="contentArea">
        <div class="loading">
            <div class="spinner"></div>
            Loading suggestions...
        </div>
    </div>

</div>

<!-- ============================================
     MODAL
     ============================================ -->
<div class="modal-backdrop" id="modalBackdrop">
    <div class="modal" id="modal"></div>
</div>

<div class="toast" id="toast"></div>

<script src="/socket.io/socket.io.js"></script>

<script>
(function () {
    "use strict";

    /* ============================================
       STATE
       ============================================ */
    let adminToken = sessionStorage.getItem("farius_admin_token") || null;
    let allSuggestions = [];
    let allSuggesters = [];
    let currentFilter = "pending";

    /* ============================================
       ELEMENTS
       ============================================ */
    const gate = document.getElementById("gate");
    const mainWrapper = document.getElementById("mainWrapper");
    const gatePassword = document.getElementById("gatePassword");
    const gateLogin = document.getElementById("gateLogin");
    const gateError = document.getElementById("gateError");
    const contentArea = document.getElementById("contentArea");
    const refreshBtn = document.getElementById("refreshBtn");
    const signoutBtn = document.getElementById("signoutBtn");
    const toast = document.getElementById("toast");
    const modalBackdrop = document.getElementById("modalBackdrop");
    const modal = document.getElementById("modal");

    /* ============================================
       UTIL
       ============================================ */
    function escapeHtml(str) {
        return String(str).replace(/[&<>"']/g, c => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        })[c]);
    }

    function showToast(msg, type) {
        toast.textContent = msg;
        toast.className = "toast show" + (type ? " " + type : "");
        clearTimeout(showToast._t);
        showToast._t = setTimeout(() => toast.classList.remove("show"), 2400);
    }

    function showGateError(msg) {
        gateError.textContent = msg;
        gateError.classList.add("show");
        clearTimeout(gateError._t);
        gateError._t = setTimeout(() => gateError.classList.remove("show"), 4000);
    }

    function timeAgo(ts) {
        const diff = Math.floor((Date.now() - ts) / 1000);
        if (diff < 60) return diff + "s ago";
        if (diff < 3600) return Math.floor(diff / 60) + "m ago";
        if (diff < 86400) return Math.floor(diff / 3600) + "h ago";
        if (diff < 604800) return Math.floor(diff / 86400) + "d ago";
        return new Date(ts).toLocaleDateString();
    }

    function timeUntil(ts) {
        const diff = Math.max(0, Math.ceil((ts - Date.now()) / 1000));
        if (diff < 60) return diff + "s";
        if (diff < 3600) return Math.floor(diff / 60) + "m";
        if (diff < 86400) return Math.floor(diff / 3600) + "h";
        return Math.floor(diff / 86400) + "d";
    }

    function hostOf(url) {
        try { return new URL(url).hostname; }
        catch { return url; }
    }

    /* ============================================
       AUTH
       ============================================ */
    async function verifyToken() {
        if (!adminToken) return false;
        try {
            const res = await fetch("/api/admin/verify", { headers: { "x-admin-token": adminToken } });
            return res.ok;
        } catch { return false; }
    }

    async function login(password) {
        const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Login failed");
        adminToken = data.token;
        sessionStorage.setItem("farius_admin_token", adminToken);
        return true;
    }

    function logout() {
        if (adminToken) {
            fetch("/api/admin/logout", { method: "POST", headers: { "x-admin-token": adminToken } }).catch(() => {});
        }
        adminToken = null;
        sessionStorage.removeItem("farius_admin_token");
        gate.classList.remove("hidden");
        mainWrapper.hidden = true;
        gatePassword.value = "";
    }

    /* ============================================
       LOAD
       ============================================ */
    async function loadSuggestions() {
        try {
            const res = await fetch("/api/admin/suggestions?status=all", {
                headers: { "x-admin-token": adminToken }
            });
            if (res.status === 401) return logout();
            const data = await res.json();
            allSuggestions = data.suggestions || [];
            updateStats();
            renderList();
        } catch (err) {
            contentArea.innerHTML = `<div class="empty"><h2>Couldn't load</h2><p>${escapeHtml(err.message)}</p></div>`;
        }
    }

    async function loadSuggesters() {
        try {
            const res = await fetch("/api/admin/suggesters", {
                headers: { "x-admin-token": adminToken }
            });
            if (res.status === 401) return logout();
            const data = await res.json();
            allSuggesters = data.suggesters || [];
            updateStats();
        } catch (err) {
            allSuggesters = [];
        }
    }

    function updateStats() {
        const total = allSuggestions.length;
        const pending = allSuggestions.filter(s => s.status === "pending").length;
        const approved = allSuggestions.filter(s => s.status === "approved").length;
        const rejected = allSuggestions.filter(s => s.status === "rejected").length;

        document.getElementById("statTotal").textContent = total;
        document.getElementById("statPending").textContent = pending;
        document.getElementById("statApproved").textContent = approved;
        document.getElementById("statRejected").textContent = rejected;

        document.getElementById("badgePending").textContent = pending;
        document.getElementById("badgeApproved").textContent = approved;
        document.getElementById("badgeRejected").textContent = rejected;
        document.getElementById("badgeAll").textContent = total;

        const usersBadge = document.getElementById("badgeUsers");
        if (usersBadge) usersBadge.textContent = allSuggesters.length;
    }

    /* ============================================
       RENDER — SUGGESTIONS
       ============================================ */
    function renderList() {
        if (currentFilter === "users") {
            renderUsers();
            return;
        }

        let list = allSuggestions;
        if (currentFilter !== "all") list = list.filter(s => s.status === currentFilter);

        if (!list.length) {
            contentArea.innerHTML = `<div class="empty"><h2>Nothing here</h2><p>No ${currentFilter === "all" ? "" : currentFilter + " "}suggestions.</p></div>`;
            return;
        }

        const wrapper = document.createElement("div");
        wrapper.className = "list";
        list.forEach(s => wrapper.appendChild(buildCard(s)));
        contentArea.innerHTML = "";
        contentArea.appendChild(wrapper);
    }

    function buildCard(s) {
        const card = document.createElement("div");
        card.className = "card status-" + s.status;
        card.setAttribute("data-id", s.id);

        const hasDesc = s.gameDescription && s.gameDescription.trim().length > 0;

        card.innerHTML = `
            <div class="card-top">
                <div class="card-name">${escapeHtml(s.gameName)}</div>
                <span class="card-cat">${escapeHtml(s.gameCategory)}</span>
            </div>
            <span class="status-badge ${s.status}">${s.status}</span>
            <a class="card-link" href="${escapeHtml(s.gameLink)}" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>
                ${escapeHtml(hostOf(s.gameLink))}
            </a>
            <div class="card-desc ${hasDesc ? "" : "empty"}">${hasDesc ? escapeHtml(s.gameDescription) : "No description provided."}</div>
            <div class="card-meta">
                <span class="by">by ${escapeHtml(s.yourName || "Anonymous")}</span>
                <span>${timeAgo(s.submittedAt)}</span>
            </div>
            <div class="card-actions"></div>
        `;

        const actions = card.querySelector(".card-actions");

        if (s.status !== "approved") {
            const b = document.createElement("button");
            b.className = "action-btn approve";
            b.innerHTML = `<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>Approve`;
            b.onclick = () => handleAction(s.id, "approve", b);
            actions.appendChild(b);
        }
        if (s.status !== "rejected") {
            const b = document.createElement("button");
            b.className = "action-btn reject";
            b.innerHTML = `<svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>Reject`;
            b.onclick = () => handleAction(s.id, "reject", b);
            actions.appendChild(b);
        }
        const d = document.createElement("button");
        d.className = "action-btn delete";
        d.innerHTML = `<svg viewBox="0 0 24 24"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>Delete`;
        d.onclick = () => handleDelete(s.id, d);
        actions.appendChild(d);

        return card;
    }

    /* ============================================
       RENDER — USERS
       ============================================ */
    function renderUsers() {
        if (!allSuggesters.length) {
            contentArea.innerHTML = `<div class="empty"><h2>No suggesters yet</h2><p>Nobody has submitted a game yet.</p></div>`;
            return;
        }

        const wrapper = document.createElement("div");
        wrapper.className = "users-list";
        allSuggesters.forEach(u => wrapper.appendChild(buildUserRow(u)));
        contentArea.innerHTML = "";
        contentArea.appendChild(wrapper);
    }

    function buildUserRow(u) {
        const row = document.createElement("div");
        row.className = "user-row";
        if (u.banned) row.classList.add("banned");
        else if (u.muted) row.classList.add("muted");

        let statusHtml;
        if (u.banned) {
            statusHtml = `<span class="user-status banned">Banned · ${timeUntil(u.banUntil)} left</span>`;
        } else if (u.muted) {
            statusHtml = `<span class="user-status muted">Muted · ${timeUntil(u.muteUntil)} left</span>`;
        } else {
            statusHtml = `<span class="user-status active">Active</span>`;
        }

        row.innerHTML = `
            <div class="user-info">
                <div class="user-name">${escapeHtml(u.name)} ${statusHtml}</div>
                <div class="user-meta">
                    ${u.count} suggestion${u.count === 1 ? "" : "s"} ·
                    last: ${escapeHtml(u.lastGame || "—")} (${timeAgo(u.lastSubmit)})
                    ${u.ip ? " · ip: " + escapeHtml(u.ip) : ""}
                </div>
            </div>
            <div class="user-actions"></div>
        `;

        const actions = row.querySelector(".user-actions");

        const warnBtn = document.createElement("button");
        warnBtn.className = "user-action-btn warn";
        warnBtn.innerHTML = `
            <svg viewBox="0 0 24 24"><path d="M12 9v4M12 17h.01"/><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
            Warn
        `;
        warnBtn.onclick = () => openWarnModal(u);
        actions.appendChild(warnBtn);

        if (u.banned) {
            const unbanBtn = document.createElement("button");
            unbanBtn.className = "user-action-btn unban";
            unbanBtn.textContent = "Unban";
            unbanBtn.onclick = () => unbanUser(u.identifier);
            actions.appendChild(unbanBtn);
        } else {
            const banBtn = document.createElement("button");
            banBtn.className = "user-action-btn ban";
            banBtn.textContent = "Ban";
            banBtn.onclick = () => openBanModal(u);
            actions.appendChild(banBtn);
        }

        if (u.muted) {
            const unmuteBtn = document.createElement("button");
            unmuteBtn.className = "user-action-btn unmute";
            unmuteBtn.textContent = "Unmute";
            unmuteBtn.onclick = () => unmuteUser(u.identifier);
            actions.appendChild(unmuteBtn);
        } else {
            const muteBtn = document.createElement("button");
            muteBtn.className = "user-action-btn mute";
            muteBtn.textContent = "Mute";
            muteBtn.onclick = () => openMuteModal(u);
            actions.appendChild(muteBtn);
        }

        return row;
    }

    /* ============================================
       SUGGESTION ACTIONS
       ============================================ */
    async function handleAction(id, action, btn) {
        if (btn) btn.disabled = true;
        try {
            const res = await fetch(`/api/admin/suggestions/${id}/${action}`, {
                method: "POST",
                headers: { "x-admin-token": adminToken }
            });
            if (res.status === 401) return logout();
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed");

            showToast(action === "approve" ? "Game approved ✓" : "Suggestion rejected", "success");

            const s = allSuggestions.find(x => x.id === id);
            if (s) {
                s.status = action === "approve" ? "approved" : "rejected";
                if (action === "approve") s.approvedAt = Date.now();
                if (action === "reject") s.rejectedAt = Date.now();
            }
            updateStats();
            renderList();
        } catch (err) {
            showToast(err.message, "error");
            if (btn) btn.disabled = false;
        }
    }

    async function handleDelete(id, btn) {
        if (!confirm("Permanently delete this suggestion?")) return;
        btn.disabled = true;
        try {
            const res = await fetch(`/api/admin/suggestions/${id}`, {
                method: "DELETE",
                headers: { "x-admin-token": adminToken }
            });
            if (res.status === 401) return logout();
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed");

            showToast("Deleted", "success");
            allSuggestions = allSuggestions.filter(x => x.id !== id);
            updateStats();
            renderList();
        } catch (err) {
            showToast(err.message, "error");
            btn.disabled = false;
        }
    }

    /* ============================================
       MODAL HELPERS
       ============================================ */
    function openModal(html) {
        modal.innerHTML = html;
        modalBackdrop.classList.add("open");
        const cancel = modal.querySelector(".modal-btn.cancel");
        if (cancel) cancel.onclick = closeModal;
        wirePresets();
    }

    function closeModal() {
        modalBackdrop.classList.remove("open");
        modal.innerHTML = "";
    }

    modalBackdrop.addEventListener("click", e => {
        if (e.target === modalBackdrop) closeModal();
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeModal();
    });

    function wirePresets() {
        modal.querySelectorAll(".preset-row").forEach(row => {
            const targetId = row.getAttribute("data-target");
            const input = modal.querySelector("#" + targetId);
            if (!input) return;
            row.querySelectorAll(".preset").forEach(btn => {
                btn.onclick = () => {
                    input.value = btn.getAttribute("data-value");
                    row.querySelectorAll(".preset").forEach(b => b.classList.remove("selected"));
                    btn.classList.add("selected");
                };
            });
        });
    }

    /* ============================================
       BAN / MUTE / WARN MODALS
       ============================================ */
    function openBanModal(user) {
        openModal(`
            <h2>Ban ${escapeHtml(user.name)}</h2>
            <p class="modal-sub">They won't be able to suggest games until the ban expires. They'll see a message explaining why and when they can come back.</p>

            <div class="modal-field">
                <label>Ban duration</label>
                <input type="number" id="banMinutes" value="1440" min="1" placeholder="Minutes">
                <div class="preset-row" data-target="banMinutes">
                    <button type="button" class="preset" data-value="60">1 hour</button>
                    <button type="button" class="preset" data-value="360">6 hours</button>
                    <button type="button" class="preset selected" data-value="1440">24 hours</button>
                    <button type="button" class="preset" data-value="10080">7 days</button>
                    <button type="button" class="preset" data-value="43200">30 days</button>
                </div>
            </div>

            <div class="modal-field">
                <label>Reason (shown to the user)</label>
                <textarea id="banReason" placeholder="e.g. Spamming the same game repeatedly"></textarea>
            </div>

            <div class="modal-actions">
                <button class="modal-btn cancel">Cancel</button>
                <button class="modal-btn danger" id="confirmBan">Ban user</button>
            </div>
        `);

        modal.querySelector("#confirmBan").onclick = async () => {
            const minutes = parseInt(modal.querySelector("#banMinutes").value) || 1440;
            const reason = modal.querySelector("#banReason").value.trim() || "Violation of rules";
            await banUser(user.identifier, minutes, reason);
            closeModal();
        };
    }

    function openMuteModal(user) {
        openModal(`
            <h2>Mute ${escapeHtml(user.name)}</h2>
            <p class="modal-sub">They won't be able to suggest games until the mute expires. Minimum 30 minutes.</p>

            <div class="modal-field">
                <label>Mute duration</label>
                <input type="number" id="muteMinutes" value="30" min="30" placeholder="Minutes">
                <div class="preset-row" data-target="muteMinutes">
                    <button type="button" class="preset selected" data-value="30">30 minutes</button>
                    <button type="button" class="preset" data-value="60">1 hour</button>
                    <button type="button" class="preset" data-value="180">3 hours</button>
                    <button type="button" class="preset" data-value="1440">24 hours</button>
                </div>
            </div>

            <div class="modal-field">
                <label>Reason (shown to the user)</label>
                <textarea id="muteReason" placeholder="e.g. Inappropriate game name"></textarea>
            </div>

            <div class="modal-actions">
                <button class="modal-btn cancel">Cancel</button>
                <button class="modal-btn primary" id="confirmMute">Mute user</button>
            </div>
        `);

        modal.querySelector("#confirmMute").onclick = async () => {
            const minutes = Math.max(30, parseInt(modal.querySelector("#muteMinutes").value) || 30);
            const reason = modal.querySelector("#muteReason").value.trim() || "You are muted";
            await muteUser(user.identifier, minutes, reason);
            closeModal();
        };
    }

    function openWarnModal(user) {
        openModal(`
            <h2>Warn ${escapeHtml(user.name)}</h2>
            <p class="modal-sub">The user will see this warning the next time they visit the suggest page. It does not block them — just a heads-up.</p>

            <div class="modal-field">
                <label>Warning message</label>
                <textarea id="warnMessage">Please follow the suggestion rules — repeated violations will result in a mute or ban.</textarea>
            </div>

            <div class="modal-actions">
                <button class="modal-btn cancel">Cancel</button>
                <button class="modal-btn warn-btn" id="confirmWarn">Send warning</button>
            </div>
        `);

        modal.querySelector("#confirmWarn").onclick = async () => {
            const message = modal.querySelector("#warnMessage").value.trim();
            if (!message) return showToast("Type a warning message", "error");
            await warnUser(user.identifier, message);
            closeModal();
        };
    }

    /* ============================================
       API CALLS — BAN / MUTE / WARN
       ============================================ */
    async function banUser(identifier, minutes, reason) {
        try {
            const res = await fetch("/api/admin/ban", {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-admin-token": adminToken },
                body: JSON.stringify({ identifier, minutes, reason })
            });
            if (res.status === 401) return logout();
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed");

            showToast("User banned", "success");
            await loadSuggesters();
            renderUsers();
        } catch (err) {
            showToast(err.message, "error");
        }
    }

    async function unbanUser(identifier) {
        try {
            const res = await fetch("/api/admin/unban", {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-admin-token": adminToken },
                body: JSON.stringify({ identifier })
            });
            if (res.status === 401) return logout();
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed");

            showToast("User unbanned", "success");
            await loadSuggesters();
            renderUsers();
        } catch (err) {
            showToast(err.message, "error");
        }
    }

    async function muteUser(identifier, minutes, reason) {
        try {
            const res = await fetch("/api/admin/mute", {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-admin-token": adminToken },
                body: JSON.stringify({ identifier, minutes, reason })
            });
            if (res.status === 401) return logout();
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed");

            showToast("User muted", "success");
            await loadSuggesters();
            renderUsers();
        } catch (err) {
            showToast(err.message, "error");
        }
    }

    async function unmuteUser(identifier) {
        try {
            const res = await fetch("/api/admin/unmute", {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-admin-token": adminToken },
                body: JSON.stringify({ identifier })
            });
            if (res.status === 401) return logout();
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed");

            showToast("User unmuted", "success");
            await loadSuggesters();
            renderUsers();
        } catch (err) {
            showToast(err.message, "error");
        }
    }

    async function warnUser(identifier, message) {
        try {
            const res = await fetch("/api/admin/warn", {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-admin-token": adminToken },
                body: JSON.stringify({ identifier, message })
            });
            if (res.status === 401) return logout();
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed");

            showToast("Warning sent", "warn");
        } catch (err) {
            showToast(err.message, "error");
        }
    }

    /* ============================================
       EVENTS
       ============================================ */
    gateLogin.addEventListener("click", async () => {
        const password = gatePassword.value;
        if (!password) return showGateError("Enter the password");
        gateLogin.disabled = true;
        gateLogin.textContent = "Checking...";
        try {
            await login(password);
            gate.classList.add("hidden");
            mainWrapper.hidden = false;
            loadSuggestions();
            loadSuggesters();
        } catch (err) {
            showGateError(err.message);
        } finally {
            gateLogin.disabled = false;
            gateLogin.textContent = "Unlock";
        }
    });

    gatePassword.addEventListener("keydown", e => {
        if (e.key === "Enter") gateLogin.click();
    });

    refreshBtn.addEventListener("click", () => {
        loadSuggestions();
        loadSuggesters();
        showToast("Refreshed");
    });

    signoutBtn.addEventListener("click", () => {
        if (confirm("Sign out of admin?")) logout();
    });

    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentFilter = tab.getAttribute("data-filter");
            if (currentFilter === "users") {
                loadSuggesters().then(renderUsers);
            } else {
                renderList();
            }
        });
    });

    /* ============================================
       AUTO-LOGIN
       ============================================ */
    (async function init() {
        if (adminToken) {
            const valid = await verifyToken();
            if (valid) {
                gate.classList.add("hidden");
                mainWrapper.hidden = false;
                loadSuggestions();
                loadSuggesters();
                return;
            }
            adminToken = null;
            sessionStorage.removeItem("farius_admin_token");
        }
        gate.classList.remove("hidden");
    })();

    /* ============================================
       LIVE UPDATES
       ============================================ */
    if (typeof io === "function") {
        const socket = io();
        socket.on("suggestion-new", (s) => {
            allSuggestions.push(s);
            updateStats();
            if (currentFilter === "pending" || currentFilter === "all") renderList();
            showToast("New suggestion: " + s.gameName);
        });
        socket.on("suggestion-updated", (s) => {
            const idx = allSuggestions.findIndex(x => x.id === s.id);
            if (idx !== -1) allSuggestions[idx] = s;
            updateStats();
            renderList();
        });
        socket.on("suggestion-deleted", ({ id }) => {
            allSuggestions = allSuggestions.filter(x => x.id !== id);
            updateStats();
            renderList();
        });
        socket.on("ban-updated", () => loadSuggesters());
        socket.on("mute-updated", () => loadSuggesters());
    }

})();
</script>

</body>
</html>