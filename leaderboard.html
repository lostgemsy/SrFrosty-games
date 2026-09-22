<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="image/png" href="png/logo.png">
<title>Leaderboard — Farius</title>
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
   LOADING
   ============================================ */
#loading-screen {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f7f7f7;
    z-index: 9999;
    transition: opacity 0.6s ease, visibility 0.6s ease;
}

#loading-screen.hidden { opacity: 0; visibility: hidden; pointer-events: none; }

.dots { display: flex; gap: 12px; margin-bottom: 20px; }

.dot {
    width: 12px; height: 12px; background: #111; border-radius: 50%;
    animation: loadingBounce 1s infinite ease-in-out;
}

.dot:nth-child(2) { animation-delay: 0.15s; }
.dot:nth-child(3) { animation-delay: 0.3s; }

@keyframes loadingBounce {
    0%, 100% { transform: translateY(0); opacity: 0.15; }
    50% { transform: translateY(-14px); opacity: 1; }
}

#loading-text { color: #666; font-size: 13px; font-weight: 500; letter-spacing: 2px; }

/* ============================================
   TOP NAV
   ============================================ */
.top-nav {
    width: 100%;
    max-width: 760px;
    margin: 0 auto 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    animation: fadeInUp 0.6s ease-out both;
}

.nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 22px;
    border-radius: 13px;
    background: #ffffff;
    border: 2px solid #e2e2e2;
    color: #111;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    transition: all 0.22s cubic-bezier(.2,.8,.2,1);
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    letter-spacing: -0.01em;
}

.nav-item:hover {
    background: #111;
    border-color: #111;
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.14);
}

.nav-item[aria-current="page"] { background: #111; border-color: #111; color: #fff; }

.nav-item img {
    width: 16px; height: 16px;
    filter: brightness(0);
    opacity: 0.7;
    transition: filter 0.22s ease, opacity 0.22s ease;
}

.nav-item:hover img, .nav-item[aria-current="page"] img {
    filter: brightness(0) invert(1);
    opacity: 1;
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ============================================
   LAYOUT
   ============================================ */
.layout {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 32px;
    align-items: start;
}

@media (max-width: 1000px) {
    .layout { grid-template-columns: 1fr; }
}

/* ============================================
   PAGE HEADER
   ============================================ */
.page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 24px;
    flex-wrap: wrap;
    animation: fadeInUp 0.5s ease-out both;
}

.page-header h1 {
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -0.05em;
    color: #111;
    line-height: 1;
}

.page-header p {
    font-size: 0.9rem;
    color: #777;
    font-weight: 500;
}

.page-header .game-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    border-radius: 999px;
    background: #111;
    color: #fff;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

/* ============================================
   LEADERBOARD CARD
   ============================================ */
.lb-card {
    background: #ffffff;
    border: 2px solid #e8e8e8;
    border-radius: 22px;
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
    animation: fadeInUp 0.6s 0.1s ease-out both;
}

.lb-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 20px;
    border-bottom: 2px solid #f0f0f0;
    gap: 10px;
}

.lb-title {
    font-size: 13px;
    font-weight: 800;
    color: #111;
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    gap: 8px;
}

.lb-title .count {
    padding: 2px 8px;
    border-radius: 999px;
    background: #f0f0f0;
    color: #666;
    font-size: 10px;
    font-weight: 800;
}

.lb-refresh {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #e0e0e0;
    border-radius: 11px;
    background: #fafafa;
    color: #111;
    cursor: pointer;
    transition: all 0.2s ease;
    flex: none;
}

.lb-refresh:hover {
    background: #111;
    border-color: #111;
    color: #fff;
    transform: rotate(180deg);
}

.lb-refresh svg {
    width: 17px; height: 17px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2.2;
    stroke-linecap: round;
    stroke-linejoin: round;
}

/* ============================================
   LEADERBOARD ENTRIES (with proof image)
   ============================================ */
.lb-list {
    padding: 14px;
    max-height: 700px;
    overflow-y: auto;
}

.lb-entry {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 18px;
    border-radius: 16px;
    background: #fafafa;
    border: 2px solid transparent;
    margin-bottom: 10px;
    transition: all 0.22s cubic-bezier(.2,.8,.2,1);
    animation: entryIn 0.4s ease-out both;
}

@keyframes entryIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
}

.lb-entry:hover {
    background: #ffffff;
    border-color: #111;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.lb-entry:last-child { margin-bottom: 0; }

.lb-entry-top {
    display: flex;
    align-items: center;
    gap: 14px;
}

.lb-rank {
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: #111;
    color: #fff;
    font-size: 17px;
    font-weight: 900;
    flex: none;
    letter-spacing: -0.02em;
}

.lb-rank.gold {
    background: linear-gradient(135deg, #f1c40f, #f39c12);
    color: #fff;
    box-shadow: 0 0 20px rgba(241, 196, 15, 0.4);
}

.lb-rank.silver {
    background: linear-gradient(135deg, #bdc3c7, #95a5a6);
    color: #fff;
    box-shadow: 0 0 16px rgba(189, 195, 199, 0.4);
}

.lb-rank.bronze {
    background: linear-gradient(135deg, #cd7f32, #a0522d);
    color: #fff;
    box-shadow: 0 0 16px rgba(205, 127, 50, 0.4);
}

.lb-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #e8e8e8;
    flex: none;
}

.lb-info {
    flex: 1;
    min-width: 0;
}

.lb-name {
    font-size: 15.5px;
    font-weight: 800;
    color: #111;
    letter-spacing: -0.01em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.lb-game {
    font-size: 11.5px;
    color: #888;
    font-weight: 600;
    margin-top: 2px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
}

.lb-score {
    font-size: 24px;
    font-weight: 900;
    color: #111;
    letter-spacing: -0.04em;
    flex: none;
    font-variant-numeric: tabular-nums;
    text-align: right;
}

/* "Show image" button */
.lb-proof-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 11px;
    background: #ffffff;
    color: #111;
    font-family: inherit;
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;
    justify-content: center;
}

.lb-proof-btn:hover {
    background: #111;
    border-color: #111;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.lb-proof-btn svg {
    width: 15px; height: 15px;
    stroke: currentColor; fill: none; stroke-width: 2.2;
    stroke-linecap: round; stroke-linejoin: round;
}

.lb-proof-btn.no-proof {
    color: #aaa;
    cursor: default;
    border-style: dashed;
}

.lb-proof-btn.no-proof:hover {
    background: #ffffff;
    border-color: #e0e0e0;
    color: #aaa;
    transform: none;
    box-shadow: none;
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
    max-width: min(900px, 100%);
    max-height: 90vh;
    border-radius: 16px;
    overflow: hidden;
    background: #111;
    border: 2px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
    transform: scale(0.92);
    transition: transform 0.3s cubic-bezier(.2,.8,.2,1);
}

.img-modal.active .img-modal-inner { transform: scale(1); }

.img-modal-inner img {
    display: block;
    max-width: 100%;
    max-height: 85vh;
    object-fit: contain;
    background: #000;
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
}

.img-modal-close:hover {
    background: #c0392b;
    border-color: #c0392b;
    transform: scale(1.05);
}

/* ============================================
   EMPTY / LOADING
   ============================================ */
.lb-empty {
    padding: 80px 24px;
    text-align: center;
    color: #888;
}

.lb-empty h3 {
    font-size: 1.1rem;
    font-weight: 800;
    color: #333;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
}

.lb-empty p {
    font-size: 0.9rem;
    color: #999;
    font-weight: 500;
}

.lb-loading {
    padding: 60px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

.lb-loading .spinner {
    width: 36px;
    height: 36px;
    border: 3px solid #e0e0e0;
    border-top-color: #111;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.lb-loading p {
    color: #888;
    font-size: 13px;
    font-weight: 600;
}

/* ============================================
   SUBMIT FORM
   ============================================ */
.submit-card {
    background: #ffffff;
    border: 2px solid #e8e8e8;
    border-radius: 22px;
    padding: 28px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
    position: sticky;
    top: 24px;
    animation: fadeInUp 0.6s 0.2s ease-out both;
}

.submit-card h2 {
    font-size: 1.25rem;
    font-weight: 900;
    letter-spacing: -0.03em;
    color: #111;
    margin-bottom: 6px;
}

.submit-card > p {
    font-size: 0.85rem;
    color: #888;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 22px;
}

.game-lock {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 16px;
    border-radius: 13px;
    background: #f5f5f5;
    border: 2px solid #e0e0e0;
    margin-bottom: 18px;
}

.game-lock-icon {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #111;
    color: #fff;
    flex: none;
}

.game-lock-icon svg {
    width: 18px; height: 18px;
    stroke: currentColor; fill: none; stroke-width: 2.2;
    stroke-linecap: round; stroke-linejoin: round;
}

.game-lock-info {
    flex: 1;
    min-width: 0;
}

.game-lock-name {
    font-size: 14px;
    font-weight: 800;
    color: #111;
    letter-spacing: -0.01em;
}

.game-lock-sub {
    font-size: 11px;
    color: #888;
    font-weight: 600;
    margin-top: 1px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
}

.field {
    margin-bottom: 16px;
}

.field label {
    display: block;
    font-size: 12px;
    font-weight: 800;
    color: #111;
    margin-bottom: 7px;
    letter-spacing: 0.02em;
}

.field label .req { color: #c0392b; margin-left: 2px; }

.field input {
    width: 100%;
    height: 50px;
    padding: 0 16px;
    border-radius: 12px;
    border: 2px solid #e0e0e0;
    background: #fafafa;
    color: #111;
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    outline: none;
    transition: all 0.2s ease;
}

.field input::placeholder { color: #aaa; font-weight: 500; }

.field input:focus {
    border-color: #111;
    background: #fff;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.06);
}

/* Uploader */
.upload-drop {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 24px 16px;
    border-radius: 12px;
    border: 2px dashed #d0d0d0;
    background: #fafafa;
    color: #666;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: center;
}

.upload-drop:hover {
    border-color: #111;
    background: #f5f5f5;
    color: #111;
}

.upload-drop.dragover {
    border-color: #111;
    background: #f0f0f0;
    transform: scale(1.01);
}

.upload-drop svg {
    width: 26px;
    height: 26px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    opacity: 0.6;
}

.upload-drop .upload-main {
    font-size: 13px;
    font-weight: 800;
    color: #111;
    letter-spacing: -0.01em;
}

.upload-drop .upload-sub {
    font-size: 11px;
    font-weight: 500;
    color: #999;
}

.upload-drop input[type="file"] { display: none; }

.proof-preview {
    display: none;
    margin-top: 10px;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid #e0e0e0;
    background: #f0f0f0;
    aspect-ratio: 16 / 9;
}

.proof-preview.show { display: block; }

.proof-preview img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    background: #111;
}

.proof-preview .remove {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.72);
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 800;
    backdrop-filter: blur(6px);
}

.proof-preview .remove:hover { background: #c0392b; }

.proof-preview .label {
    position: absolute;
    left: 8px;
    bottom: 8px;
    padding: 4px 10px;
    border-radius: 7px;
    background: rgba(0, 0, 0, 0.72);
    color: #fff;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    backdrop-filter: blur(6px);
}

.submit-btn {
    width: 100%;
    height: 54px;
    border: 2px solid #111;
    border-radius: 13px;
    background: #111;
    color: #fff;
    font-family: inherit;
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(.2,.8,.2,1);
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    letter-spacing: -0.01em;
}

.submit-btn:hover:not(:disabled) {
    background: #333;
    border-color: #333;
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
}

.submit-btn:active:not(:disabled) { transform: translateY(0); }

.submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.submit-btn .spinner-inline {
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 2.5px solid rgba(255, 255, 255, 0.35);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
}

.status {
    display: none;
    padding: 12px 16px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 700;
    margin-top: 14px;
    text-align: center;
    animation: fadeInUp 0.3s ease both;
    line-height: 1.5;
}

.status.show { display: block; }
.status.success { background: #eaf7f0; border: 2px solid #b9e6ce; color: #27764c; }
.status.error { background: #fff0f0; border: 2px solid #ffd4d4; color: #c0392b; }

.info-panel {
    margin-top: 20px;
    padding: 16px 18px;
    border-radius: 14px;
    background: #f7f7f7;
    border: 2px solid #ececec;
}

.info-panel h3 {
    font-size: 11px;
    font-weight: 800;
    color: #111;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.info-panel ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.info-panel li {
    position: relative;
    padding-left: 16px;
    margin-bottom: 6px;
    color: #666;
    font-size: 12.5px;
    font-weight: 500;
    line-height: 1.5;
}

.info-panel li:last-child { margin-bottom: 0; }

.info-panel li::before {
    content: "→";
    position: absolute;
    left: 0;
    top: 0;
    color: #aaa;
    font-weight: 800;
}

/* ============================================
   TOAST
   ============================================ */
.toast {
    position: fixed;
    left: 50%;
    bottom: 28px;
    z-index: 10001;
    padding: 13px 22px;
    border-radius: 14px;
    background: #111;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, 20px);
    transition: opacity 0.25s ease, transform 0.3s cubic-bezier(.2,.8,.2,1);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

.toast.show { opacity: 1; transform: translate(-50%, 0); }

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 720px) {
    body { padding: 16px; }

    .top-nav { gap: 6px; margin-bottom: 24px; }
    .nav-item { padding: 9px 14px; font-size: 12.5px; border-radius: 10px; gap: 6px; }
    .nav-item img { width: 14px; height: 14px; }

    .page-header h1 { font-size: 1.5rem; }
    .page-header p { font-size: 0.82rem; }

    .lb-list { padding: 10px; max-height: 550px; }
    .lb-entry { padding: 14px; }
    .lb-rank { width: 40px; height: 40px; font-size: 15px; }
    .lb-avatar { width: 38px; height: 38px; }
    .lb-name { font-size: 14px; }
    .lb-score { font-size: 20px; }

    .submit-card { padding: 22px 18px; border-radius: 18px; }
    .submit-card h2 { font-size: 1.1rem; }
}

@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; transition: none !important; }
}
</style>
</head>
<body>

<!-- Loading -->
<div id="loading-screen">
    <div class="dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>
    <h5 id="loading-text">Loading leaderboard...</h5>
</div>

<!-- Top nav -->
<nav class="top-nav" aria-label="Main navigation">
    <a href="index.html" class="nav-item" title="Home">
        <img src="png/house-solid.svg" alt="" onerror="this.style.display='none'"> Home
    </a>
    <a href="games.html" class="nav-item" title="Games">
        <img src="png/gamepad-solid.svg" alt="" onerror="this.style.display='none'"> Games
    </a>
    <a href="leaderboard.html" class="nav-item" title="Leaderboard" aria-current="page">
        <img src="png/trophy-solid.svg" alt="" onerror="this.style.display='none'"> Leaderboard
    </a>
    <a href="chat.html" class="nav-item" title="Chat">
        <img src="png/comment-solid.svg" alt="" onerror="this.style.display='none'"> Chat
    </a>
    <a href="suggest.html" class="nav-item suggest" title="Suggest a game">
        <img src="suggest.png" alt="" onerror="this.style.display='none'"> Suggest
    </a>
    <a href="settings.html" class="nav-item" title="Settings">
        <img src="png/gear-solid.svg" alt="" onerror="this.style.display='none'"> Settings
    </a>
</nav>

<!-- Layout -->
<div class="layout">

    <!-- Leaderboard (left) -->
    <div>
        <div class="page-header">
            <div>
                <h1>Leaderboard</h1>
                <p>Top Tunnel Rush scores</p>
            </div>
            <span class="game-chip">Tunnel Rush</span>
        </div>

        <div class="lb-card">
            <div class="lb-toolbar">
                <div class="lb-title">
                    Top Scores
                    <span class="count" id="entryCount">0</span>
                </div>
                <button class="lb-refresh" id="refreshBtn" title="Refresh">
                    <svg viewBox="0 0 24 24">
                        <path d="M23 4v6h-6M1 20v-6h6"/>
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                    </svg>
                </button>
            </div>

            <div class="lb-list" id="lbList">
                <div class="lb-loading">
                    <div class="spinner"></div>
                    <p>Loading scores...</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Submit form (right) -->
    <div>
        <div class="submit-card">
            <h2>Submit a Score</h2>
            <p>Got a high score in Tunnel Rush? Send it in with a screenshot. Approved scores appear on the leaderboard.</p>

            <div class="game-lock">
                <div class="game-lock-icon">
                    <svg viewBox="0 0 24 24">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                </div>
                <div class="game-lock-info">
                    <div class="game-lock-name">Tunnel Rush</div>
                    <div class="game-lock-sub">Locked game</div>
                </div>
            </div>

            <div class="status" id="statusMsg"></div>

            <form id="scoreForm" novalidate>
                <div class="field">
                    <label for="playerName">Your name <span class="req">*</span></label>
                    <input type="text" id="playerName" placeholder="e.g. xX_ProGamer_Xx" maxlength="24" autocomplete="off" required>
                </div>

                <div class="field">
                    <label for="scoreValue">Score <span class="req">*</span></label>
                    <input type="text" id="scoreValue" placeholder="e.g. 12345" maxlength="20" autocomplete="off" required>
                </div>

                <div class="field">
                    <label>Proof screenshot <span class="req">*</span></label>
                    <label class="upload-drop" id="uploadDrop">
                        <svg viewBox="0 0 24 24">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <path d="M17 8l-5-5-5 5"/>
                            <path d="M12 3v12"/>
                        </svg>
                        <div class="upload-main">Click to upload or drag &amp; drop</div>
                        <div class="upload-sub">PNG, JPG, GIF · max 5MB</div>
                        <input type="file" id="proofFile" accept="image/*">
                    </label>

                    <div class="proof-preview" id="proofPreview">
                        <img id="proofPreviewImg" src="" alt="">
                        <span class="label">Your proof</span>
                        <button type="button" class="remove" id="proofRemove" title="Remove">✕</button>
                    </div>
                </div>

                <button type="submit" class="submit-btn" id="submitBtn">
                    Submit score
                </button>
            </form>

            <div class="info-panel">
                <h3>Rules</h3>
                <ul>
                    <li>Only Tunnel Rush scores</li>
                    <li>A screenshot of your score is required</li>
                    <li>Fake scores get rejected</li>
                    <li>Admin reviews every submission before it appears</li>
                </ul>
            </div>
        </div>
    </div>

</div>

<!-- Image modal (for viewing proof) -->
<div class="img-modal" id="imgModal">
    <button class="img-modal-close" id="imgModalClose" title="Close">✕</button>
    <div class="img-modal-inner">
        <img id="imgModalImg" src="" alt="">
    </div>
</div>

<!-- Toast -->
<div class="toast" id="toast"></div>

<!-- Loading screen handler -->
<script>
    (function() {
        const ls = document.getElementById('loading-screen');
        if (ls) setTimeout(() => ls.classList.add('hidden'), 600);
    })();
</script>

<!-- ============================================
     LEADERBOARD LOGIC
     ============================================ -->
<script>
(function () {
    "use strict";

    const API = "";
    const GAME_NAME = "Tunnel Rush"; // Locked game

    const lbList = document.getElementById("lbList");
    const entryCount = document.getElementById("entryCount");
    const refreshBtn = document.getElementById("refreshBtn");
    const scoreForm = document.getElementById("scoreForm");
    const playerName = document.getElementById("playerName");
    const scoreValue = document.getElementById("scoreValue");
    const proofFile = document.getElementById("proofFile");
    const proofPreview = document.getElementById("proofPreview");
    const proofPreviewImg = document.getElementById("proofPreviewImg");
    const proofRemove = document.getElementById("proofRemove");
    const uploadDrop = document.getElementById("uploadDrop");
    const submitBtn = document.getElementById("submitBtn");
    const statusMsg = document.getElementById("statusMsg");
    const toastEl = document.getElementById("toast");

    const imgModal = document.getElementById("imgModal");
    const imgModalImg = document.getElementById("imgModalImg");
    const imgModalClose = document.getElementById("imgModalClose");

    let allScores = [];
    let proofDataUrl = null;   // base64 of uploaded image

    /* ---------- UTIL ---------- */
    function showToast(msg) {
        toastEl.textContent = msg;
        toastEl.classList.add("show");
        clearTimeout(showToast._t);
        showToast._t = setTimeout(() => toastEl.classList.remove("show"), 2000);
    }

    function showStatus(type, msg) {
        statusMsg.textContent = msg;
        statusMsg.className = "status show " + type;
        clearTimeout(showStatus._t);
        showStatus._t = setTimeout(() => statusMsg.classList.remove("show"), 6000);
    }

    function escapeHtml(str) {
        return String(str).replace(/[&<>"']/g, c => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        })[c]);
    }

    /* ---------- LOAD SCORES ---------- */
    async function loadScores() {
        lbList.innerHTML = '<div class="lb-loading"><div class="spinner"></div><p>Loading scores...</p></div>';

        try {
            const res = await fetch(API + "/api/leaderboard");
            const data = await res.json();
            allScores = data.scores || [];
            renderScores();
        } catch (err) {
            lbList.innerHTML = '<div class="lb-empty"><h3>Couldn\'t load scores</h3><p>Try again in a moment.</p></div>';
        }
    }

    function renderScores() {
        // Filter to Tunnel Rush only
        let list = allScores.filter(s =>
            (s.gameName || "").toLowerCase() === GAME_NAME.toLowerCase()
        );

        if (!list.length) {
            lbList.innerHTML = '<div class="lb-empty"><h3>No scores yet</h3><p>Be the first to submit one!</p></div>';
            entryCount.textContent = "0";
            return;
        }

        // Sort by numeric score desc
        list = list.slice().sort((a, b) => {
            const an = parseFloat(String(a.score).replace(/[^0-9.-]/g, ""));
            const bn = parseFloat(String(b.score).replace(/[^0-9.-]/g, ""));
            if (!isNaN(an) && !isNaN(bn)) return bn - an;
            return 0;
        });

        entryCount.textContent = list.length;
        lbList.innerHTML = "";

        list.slice(0, 100).forEach((entry, idx) => {
            const rank = idx + 1;
            let rankClass = "";
            if (rank === 1) rankClass = "gold";
            else if (rank === 2) rankClass = "silver";
            else if (rank === 3) rankClass = "bronze";

            const el = document.createElement("div");
            el.className = "lb-entry";
            el.style.animationDelay = (idx * 0.03) + "s";

            const hasProof = !!entry.proofImage;

            el.innerHTML = `
                <div class="lb-entry-top">
                    <div class="lb-rank ${rankClass}">${rank}</div>
                    <img class="lb-avatar" src="${escapeHtml(entry.avatar || "png/logo.png")}" alt="" onerror="this.src='png/logo.png'">
                    <div class="lb-info">
                        <div class="lb-name">${escapeHtml(entry.playerName || "Anonymous")}</div>
                        <div class="lb-game">${escapeHtml(entry.gameName || GAME_NAME)}</div>
                    </div>
                    <div class="lb-score">${escapeHtml(String(entry.score))}</div>
                </div>
                <button class="lb-proof-btn ${hasProof ? "" : "no-proof"}" ${hasProof ? "" : "disabled"}>
                    <svg viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <path d="m21 15-5-5L5 21"/>
                    </svg>
                    ${hasProof ? "Show image" : "No proof uploaded"}
                </button>
            `;

            if (hasProof) {
                el.querySelector(".lb-proof-btn").addEventListener("click", () => {
                    openImage(entry.proofImage);
                });
            }

            lbList.appendChild(el);
        });
    }

    /* ---------- IMAGE MODAL ---------- */
    function openImage(src) {
        imgModalImg.src = src;
        imgModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeImage() {
        imgModal.classList.remove("active");
        imgModalImg.src = "";
        document.body.style.overflow = "";
    }

    imgModalClose.addEventListener("click", closeImage);
    imgModal.addEventListener("click", (e) => {
        if (e.target === imgModal) closeImage();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && imgModal.classList.contains("active")) closeImage();
    });

    /* ---------- IMAGE UPLOADER ---------- */
    proofFile.addEventListener("change", function () {
        const file = this.files && this.files[0];
        if (!file) return;
        handleProofFile(file);
    });

    // Drag and drop
    ["dragenter", "dragover"].forEach(ev => {
        uploadDrop.addEventListener(ev, (e) => {
            e.preventDefault();
            e.stopPropagation();
            uploadDrop.classList.add("dragover");
        });
    });

    ["dragleave", "drop"].forEach(ev => {
        uploadDrop.addEventListener(ev, (e) => {
            e.preventDefault();
            e.stopPropagation();
            uploadDrop.classList.remove("dragover");
        });
    });

    uploadDrop.addEventListener("drop", (e) => {
        const file = e.dataTransfer.files && e.dataTransfer.files[0];
        if (file) handleProofFile(file);
    });

    function handleProofFile(file) {
        if (!file.type.startsWith("image/")) {
            showStatus("error", "Please select an image file (PNG, JPG, GIF).");
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            showStatus("error", "Image must be under 5MB.");
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            proofDataUrl = e.target.result;
            proofPreviewImg.src = proofDataUrl;
            proofPreview.classList.add("show");
        };
        reader.readAsDataURL(file);
    }

    proofRemove.addEventListener("click", () => {
        proofDataUrl = null;
        proofFile.value = "";
        proofPreview.classList.remove("show");
        proofPreviewImg.src = "";
    });

    /* ---------- SUBMIT ---------- */
    scoreForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = playerName.value.trim();
        const score = scoreValue.value.trim();

        if (!name) { showStatus("error", "Please enter your name."); playerName.focus(); return; }
        if (!score) { showStatus("error", "Please enter your score."); scoreValue.focus(); return; }
        if (name.length > 24) { showStatus("error", "Name must be 24 characters or less."); return; }
        if (score.length > 20) { showStatus("error", "Score is too long."); return; }
        if (!proofDataUrl) { showStatus("error", "Please upload a screenshot of your score."); return; }

        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="spinner-inline"></span>Submitting...';

        try {
            const res = await fetch(API + "/api/leaderboard/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    playerName: name,
                    gameName: GAME_NAME,
                    score: score,
                    proofImage: proofDataUrl
                })
            });

            const text = await res.text();
            let data;
            try { data = JSON.parse(text); }
            catch { throw new Error("Server returned HTML instead of JSON."); }

            if (!res.ok) throw new Error(data.error || "Submit failed");

            showStatus("success", "Score submitted! An admin will review it before it appears on the leaderboard.");
            showToast("Score submitted");
            scoreForm.reset();
            proofDataUrl = null;
            proofPreview.classList.remove("show");
            proofPreviewImg.src = "";
        } catch (err) {
            showStatus("error", "Something went wrong: " + err.message);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });

    /* ---------- EVENTS ---------- */
    refreshBtn.addEventListener("click", loadScores);

    /* ---------- INIT ---------- */
    loadScores();

})();
</script>

</body>
</html>