<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="image/png" href="png/logo.png">
<title>Admin · Leaderboard — Farius</title>
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
    padding: 24px;
    background-image:
        radial-gradient(circle at 25% 15%, rgba(0,0,0,0.015) 0%, transparent 50%),
        radial-gradient(circle at 75% 85%, rgba(0,0,0,0.015) 0%, transparent 50%),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23e0e0e0' stroke-width='1.2'%3E%3Cpath d='M0 0h120v120H0z'/%3E%3Cpath d='M60 0v120M0 60h120'/%3E%3Ccircle cx='60' cy='60' r='20'/%3E%3C/g%3E%3C/svg%3E");
    background-size: 120px 120px;
    background-attachment: fixed;
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

.gate-input:focus { border-color: #111; background: #fff; }

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
    background: #333; border-color: #333;
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
}

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
    margin: 0 auto;
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
    font-size: clamp(1.6rem, 4vw, 2.2rem);
    font-weight: 900;
    letter-spacing: -0.05em;
    color: #111;
    margin-bottom: 6px;
}

.page-header .title-block p {
    font-size: 0.9rem;
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
    width: 15px; height: 15px;
    stroke: currentColor; fill: none; stroke-width: 2.2;
    stroke-linecap: round; stroke-linejoin: round;
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
   CARD GRID
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
    transition: all 0.25s ease;
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
    align-items: center;
    gap: 14px;
    margin-bottom: 14px;
}

.card-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #e8e8e8;
    flex: none;
}

.card-player {
    flex: 1;
    min-width: 0;
}

.card-name {
    font-size: 1.05rem;
    font-weight: 800;
    color: #111;
    letter-spacing: -0.02em;
    margin-bottom: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.card-game {
    font-size: 12px;
    color: #888;
    font-weight: 600;
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

.card-score {
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -0.05em;
    color: #111;
    margin-bottom: 14px;
    font-variant-numeric: tabular-nums;
}

/* ============================================
   PROOF IMAGE PREVIEW
   ============================================ */
.proof-block {
    margin-bottom: 14px;
}

.proof-label {
    font-size: 10px;
    font-weight: 800;
    color: #999;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 8px;
}

.proof-thumb {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid #e0e0e0;
    background: #f0f0f0;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
}

.proof-thumb:hover {
    border-color: #111;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.proof-thumb img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #111;
    display: block;
}

.proof-thumb .zoom-hint {
    position: absolute;
    bottom: 8px;
    right: 8px;
    padding: 4px 10px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.72);
    color: #fff;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    backdrop-filter: blur(6px);
    opacity: 0;
    transition: opacity 0.2s ease;
}

.proof-thumb:hover .zoom-hint { opacity: 1; }

.proof-missing {
    padding: 20px 16px;
    border-radius: 12px;
    border: 2px dashed #ddd;
    background: #fafafa;
    color: #aaa;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
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
}

.action-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.action-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
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
    width: 14px; height: 14px;
    stroke: currentColor; fill: none; stroke-width: 2.5;
    stroke-linecap: round; stroke-linejoin: round;
}

/* ============================================
   IMAGE MODAL
   ============================================ */
.img-modal {
    position: fixed;
    inset: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(10px);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.25s ease, visibility 0.25s ease;
}

.img-modal.active { opacity: 1; visibility: visible; }

.img-modal-inner {
    max-width: min(1000px, 100%);
    max-height: 90vh;
    border-radius: 16px;
    overflow: hidden;
    background: #111;
    border: 2px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
    transform: scale(0.92);
    transition: transform 0.3s cubic-bezier(.2,.8,.2,1);
    position: relative;
}

.img-modal.active .img-modal-inner { transform: scale(1); }

.img-modal-inner img {
    display: block;
    max-width: 100%;
    max-height: 88vh;
    object-fit: contain;
    background: #000;
}

.img-modal-caption {
    position: absolute;
    left: 12px;
    bottom: 12px;
    padding: 8px 14px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.72);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    backdrop-filter: blur(6px);
}

.img-modal-close {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 20px;
    font-weight: 800;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 0.2s ease;
    z-index: 10001;
}

.img-modal-close:hover {
    background: #c0392b;
    border-color: #c0392b;
    transform: scale(1.05);
}

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

@media (max-width: 720px) {
    body { padding: 16px; }

    .page-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .header-actions { width: 100%; }
    .header-btn { flex: 1; justify-content: center; }

    .stats { grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .stat-card { padding: 16px; }
    .stat-card .stat-num { font-size: 1.5rem; }

    .list { grid-template-columns: 1fr; gap: 14px; }
    .card { padding: 18px; border-radius: 15px; }
    .card-score { font-size: 1.6rem; }
}
</style>
</head>
<body>

<!-- ============================================
     LOGIN GATE
     ============================================ -->
<div id="gate">
    <div class="gate-card">
        <h1>Leaderboard Admin</h1>
        <p>Enter the admin password to review submitted scores.</p>
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
            <h1>Score Submissions</h1>
            <p>Review, approve, or reject scores before they appear on the leaderboard.</p>
        </div>
        <div class="header-actions">
            <a href="leaderboard.html" class="header-btn">
                <svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Leaderboard
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
    </div>

    <div id="contentArea">
        <div class="loading">
            <div class="spinner"></div>
            Loading scores...
        </div>
    </div>

</div>

<!-- ============================================
     IMAGE MODAL
     ============================================ -->
<div class="img-modal" id="imgModal">
    <button class="img-modal-close" id="imgModalClose" title="Close">✕</button>
    <div class="img-modal-inner">
        <img id="imgModalImg" src="" alt="">
        <div class="img-modal-caption" id="imgModalCaption"></div>
    </div>
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
    let allScores = [];
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

    const imgModal = document.getElementById("imgModal");
    const imgModalImg = document.getElementById("imgModalImg");
    const imgModalCaption = document.getElementById("imgModalCaption");
    const imgModalClose = document.getElementById("imgModalClose");

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
    async function loadScores() {
        contentArea.innerHTML = '<div class="loading"><div class="spinner"></div>Loading scores...</div>';
        try {
            const res = await fetch("/api/admin/leaderboard", {
                headers: { "x-admin-token": adminToken }
            });
            if (res.status === 401) return logout();
            const data = await res.json();
            allScores = data.scores || [];
            updateStats();
            renderList();
        } catch (err) {
            contentArea.innerHTML = `<div class="empty"><h2>Couldn't load</h2><p>${escapeHtml(err.message)}</p></div>`;
        }
    }

    function updateStats() {
        const total = allScores.length;
        const pending = allScores.filter(s => s.status === "pending").length;
        const approved = allScores.filter(s => s.status === "approved").length;
        const rejected = allScores.filter(s => s.status === "rejected").length;

        document.getElementById("statTotal").textContent = total;
        document.getElementById("statPending").textContent = pending;
        document.getElementById("statApproved").textContent = approved;
        document.getElementById("statRejected").textContent = rejected;

        document.getElementById("badgePending").textContent = pending;
        document.getElementById("badgeApproved").textContent = approved;
        document.getElementById("badgeRejected").textContent = rejected;
        document.getElementById("badgeAll").textContent = total;
    }

    /* ============================================
       RENDER
       ============================================ */
    function renderList() {
        let list = allScores;
        if (currentFilter !== "all") list = list.filter(s => s.status === currentFilter);

        if (!list.length) {
            contentArea.innerHTML = `<div class="empty"><h2>Nothing here</h2><p>No ${currentFilter === "all" ? "" : currentFilter + " "}scores.</p></div>`;
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

        const hasImage = s.proofImage && typeof s.proofImage === "string" && s.proofImage.startsWith("data:image/");

        const proofHtml = hasImage
            ? `<div class="proof-block">
                   <div class="proof-label">Proof screenshot</div>
                   <div class="proof-thumb" data-proof="${escapeHtml(s.playerName)} — ${escapeHtml(String(s.score))}">
                       <img src="${s.proofImage}" alt="">
                       <span class="zoom-hint">Click to view</span>
                   </div>
               </div>`
            : `<div class="proof-block">
                   <div class="proof-label">Proof screenshot</div>
                   <div class="proof-missing">No proof uploaded</div>
               </div>`;

        card.innerHTML = `
            <div class="card-top">
                <img class="card-avatar" src="${escapeHtml(s.avatar || "png/logo.png")}" alt="" onerror="this.src='png/logo.png'">
                <div class="card-player">
                    <div class="card-name">${escapeHtml(s.playerName || "Anonymous")}</div>
                    <div class="card-game">${escapeHtml(s.gameName || "Unknown game")}</div>
                </div>
            </div>

            <span class="status-badge ${s.status}">${s.status}</span>

            <div class="card-score">${escapeHtml(String(s.score || "0"))}</div>

            ${proofHtml}

            <div class="card-meta">
                <span>${timeAgo(s.submittedAt)}</span>
                ${s.ip ? "<span>ip: " + escapeHtml(s.ip) + "</span>" : ""}
            </div>

            <div class="card-actions"></div>
        `;

        // Attach image click
        const thumb = card.querySelector(".proof-thumb");
        if (thumb) {
            thumb.addEventListener("click", () => {
                openImage(s.proofImage, thumb.getAttribute("data-proof"));
            });
        }

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
       ACTIONS
       ============================================ */
    async function handleAction(id, action, btn) {
        if (btn) btn.disabled = true;
        try {
            const res = await fetch(`/api/admin/leaderboard/${id}/${action}`, {
                method: "POST",
                headers: { "x-admin-token": adminToken }
            });
            if (res.status === 401) return logout();
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed");

            showToast(action === "approve" ? "Score approved" : "Score rejected", "success");
            const s = allScores.find(x => x.id === id);
            if (s) s.status = action === "approve" ? "approved" : "rejected";
            updateStats();
            renderList();
        } catch (err) {
            showToast(err.message, "error");
            if (btn) btn.disabled = false;
        }
    }

    async function handleDelete(id, btn) {
        if (!confirm("Permanently delete this score?")) return;
        btn.disabled = true;
        try {
            const res = await fetch(`/api/admin/leaderboard/${id}`, {
                method: "DELETE",
                headers: { "x-admin-token": adminToken }
            });
            if (res.status === 401) return logout();
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed");
            showToast("Deleted", "success");
            allScores = allScores.filter(x => x.id !== id);
            updateStats();
            renderList();
        } catch (err) {
            showToast(err.message, "error");
            btn.disabled = false;
        }
    }

    /* ============================================
       IMAGE MODAL
       ============================================ */
    function openImage(src, caption) {
        imgModalImg.src = src;
        imgModalCaption.textContent = caption || "";
        imgModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeImage() {
        imgModal.classList.remove("active");
        imgModalImg.src = "";
        imgModalCaption.textContent = "";
        document.body.style.overflow = "";
    }

    imgModalClose.addEventListener("click", closeImage);
    imgModal.addEventListener("click", (e) => {
        if (e.target === imgModal) closeImage();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && imgModal.classList.contains("active")) closeImage();
    });

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
            loadScores();
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
        loadScores();
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
            renderList();
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
                loadScores();
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
        socket.on("leaderboard-new", () => {
            showToast("New score submitted");
            loadScores();
        });
    }

})();
</script>

</body>
</html>