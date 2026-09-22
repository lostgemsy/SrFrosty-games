<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="png/logo.png">
    <title>Settings — Farius</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800;14..32,900&display=swap" rel="stylesheet">
    <style>
        /* ============================================
           RESET & GLOBAL
           ============================================ */
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
           LOADING SCREEN
           ============================================ */
        #loading-screen {
            position: fixed;
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #f7f7f7;
            z-index: 99999;
            transition: opacity 0.7s ease, visibility 0.7s ease;
        }

        #loading-screen.hidden {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }

        .dots { display: flex; gap: 14px; margin-bottom: 28px; }

        .dot {
            width: 14px;
            height: 14px;
            background: #111;
            border-radius: 50%;
            animation: loadingBounce 1s infinite ease-in-out;
        }

        .dot:nth-child(2) { animation-delay: 0.18s; }
        .dot:nth-child(3) { animation-delay: 0.36s; }

        @keyframes loadingBounce {
            0%, 100% { transform: translateY(0); opacity: 0.15; }
            50% { transform: translateY(-18px); opacity: 1; }
        }

        #loading-text {
            color: #666;
            font-size: 15px;
            font-weight: 400;
            letter-spacing: 2px;
        }

        /* ============================================
           TOP NAVIGATION
           ============================================ */
        .top-nav {
            width: 100%;
            max-width: 900px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 40px;
            animation: fadeInUp 0.7s ease-out both;
        }

        .nav-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 14px 24px;
            border-radius: 14px;
            background: #ffffff;
            border: 2px solid #e2e2e2;
            color: #111;
            text-decoration: none;
            font-size: 15px;
            font-weight: 600;
            transition: all 0.25s cubic-bezier(.2,.8,.2,1);
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
            cursor: pointer;
        }

        .nav-item:hover {
            background: #111;
            border-color: #111;
            color: #fff;
            transform: translateY(-3px);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.14);
        }

        .nav-item:active { transform: translateY(-1px); }

        .nav-item[aria-current="page"] {
            background: #111;
            border-color: #111;
            color: #fff;
        }

        .nav-item.suggest {
            background: #111;
            border-color: #111;
            color: #fff;
        }

        .nav-item.suggest:hover {
            background: #333;
            border-color: #333;
        }

        .nav-item img {
            width: 18px;
            height: 18px;
            filter: brightness(0);
            opacity: 0.7;
            transition: filter 0.25s ease, opacity 0.25s ease;
        }

        .nav-item:hover img,
        .nav-item[aria-current="page"] img,
        .nav-item.suggest img {
            filter: brightness(0) invert(1);
            opacity: 1;
        }

        /* ============================================
           SITE BRAND
           ============================================ */
        .site-brand {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 40px;
            animation: fadeInUp 0.7s 0.05s ease-out both;
        }

        .site-brand strong {
            font-size: clamp(2.4rem, 7vw, 4rem);
            font-weight: 900;
            letter-spacing: -0.06em;
            color: #111;
            line-height: 1;
            margin-bottom: 8px;
            text-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
        }

        .site-brand small {
            font-size: 0.72rem;
            font-weight: 600;
            color: #888;
            letter-spacing: 0.18em;
            text-transform: uppercase;
        }

        /* ============================================
           MAIN WRAPPER
           ============================================ */
        .main-wrapper {
            width: 100%;
            max-width: 760px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 0 80px;
            animation: fadeInUp 0.8s 0.1s ease-out both;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* ============================================
           PAGE HEADER
           ============================================ */
        .page-header {
            width: 100%;
            text-align: left;
            margin-bottom: 28px;
        }

        .page-header h1 {
            font-size: clamp(1.8rem, 4vw, 2.4rem);
            font-weight: 800;
            letter-spacing: -0.04em;
            color: #111;
            margin-bottom: 6px;
        }

        .page-header p {
            font-size: 0.95rem;
            color: #666;
            font-weight: 500;
        }

        /* ============================================
           SETTINGS CARDS
           ============================================ */
        .fs-card {
            width: 100%;
            padding: 24px 24px 8px;
            margin-bottom: 20px;
            border-radius: 20px;
            background: #ffffff;
            border: 2px solid #e8e8e8;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
            transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
            animation: fadeInUp 0.6s ease-out both;
            animation-delay: calc(0.1s + var(--i, 0) * 0.08s);
        }

        .fs-card:hover {
            border-color: #111;
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
            transform: translateY(-3px);
        }

        .fs-card h2 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #111;
            letter-spacing: -0.02em;
            margin-bottom: 4px;
        }

        .fs-card > p {
            font-size: 0.9rem;
            color: #777;
            font-weight: 500;
            margin-bottom: 12px;
        }

        /* ============================================
           ROWS
           ============================================ */
        .fs-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 16px 0;
            border-top: 1.5px solid #f0f0f0;
        }

        .fs-stack {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
        }

        .fs-txt b {
            display: block;
            font-size: 0.95rem;
            font-weight: 700;
            color: #111;
            margin-bottom: 2px;
        }

        .fs-txt small {
            display: block;
            font-size: 0.82rem;
            color: #888;
            line-height: 1.45;
            font-weight: 500;
        }

        /* ============================================
           INPUTS
           ============================================ */
        .fs-field {
            display: flex;
            gap: 10px;
            width: 100%;
        }

        .fs input[type="text"] {
            flex: 1;
            min-width: 0;
            height: 48px;
            padding: 0 16px;
            border: 2px solid #e0e0e0;
            border-radius: 12px;
            outline: none;
            background: #fafafa;
            color: #111;
            font-family: inherit;
            font-size: 0.95rem;
            font-weight: 500;
            transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }

        .fs input[type="text"]::placeholder { color: #bbb; font-weight: 400; }

        .fs input[type="text"]:focus {
            border-color: #111;
            background: #ffffff;
            box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.06);
        }

        .fs input.bad { border-color: #e74c3c; }

        .fs-err {
            font-size: 0.82rem;
            color: #e74c3c;
            font-weight: 500;
            min-height: 0;
        }

        .fs-err:empty { display: none; }

        /* ============================================
           BUTTONS
           ============================================ */
        .fs-btn {
            flex: none;
            height: 48px;
            padding: 0 20px;
            border: 2px solid #e0e0e0;
            border-radius: 12px;
            background: #ffffff;
            color: #111;
            font-family: inherit;
            font-size: 0.9rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.25s cubic-bezier(.2,.8,.2,1);
        }

        .fs-btn:hover {
            background: #111;
            border-color: #111;
            color: #ffffff;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .fs-btn:active { transform: translateY(-1px); }

        .fs-btn.danger:hover {
            background: #e74c3c;
            border-color: #e74c3c;
            color: #fff;
        }

        .fs-key {
            flex: none;
            min-width: 90px;
            height: 48px;
            padding: 0 18px;
            border: 2px solid #111;
            border-radius: 12px;
            background: #111;
            color: #fff;
            font-family: inherit;
            font-size: 0.95rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.25s cubic-bezier(.2,.8,.2,1);
        }

        .fs-key:hover {
            background: #333;
            border-color: #333;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .fs-key:active { transform: translateY(-1px); }

        .fs-key.cap { animation: fsPulse 1.2s ease-in-out infinite; }

        @keyframes fsPulse {
            50% { box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.08); }
        }

        /* ============================================
           CHIPS
           ============================================ */
        .fs-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .fs-chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            height: 40px;
            padding: 0 16px;
            border: 2px solid #e0e0e0;
            border-radius: 999px;
            background: #fafafa;
            color: #333;
            font-family: inherit;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .fs-chip img {
            width: 18px;
            height: 18px;
            border-radius: 4px;
            object-fit: contain;
        }

        .fs-chip:hover {
            background: #f0f0f0;
            border-color: #aaa;
            transform: translateY(-2px);
        }

        .fs-chip.on {
            background: #111;
            border-color: #111;
            color: #ffffff;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
        }

        /* ============================================
           CUSTOM CLOAK
           ============================================ */
        .fs-custom {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            animation: fadeInUp 0.35s ease-out both;
        }

        /* ============================================
           SWITCH
           ============================================ */
        .fs-switch {
            appearance: none;
            -webkit-appearance: none;
            position: relative;
            flex: none;
            width: 52px;
            height: 30px;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 99px;
            background: #d0d0d0;
            cursor: pointer;
            transition: background 0.25s ease;
        }

        .fs-switch::after {
            content: "";
            position: absolute;
            top: 3px;
            left: 3px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #fff;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s cubic-bezier(.2,.8,.2,1);
        }

        .fs-switch:checked { background: #111; }

        .fs-switch:checked::after { transform: translateX(22px); }

        /* ============================================
           TOAST
           ============================================ */
        .fs-toast {
            position: fixed;
            left: 50%;
            bottom: 28px;
            z-index: 9999;
            padding: 12px 22px;
            border: 2px solid #111;
            border-radius: 14px;
            background: #111;
            color: #ffffff;
            font-family: inherit;
            font-size: 0.9rem;
            font-weight: 600;
            opacity: 0;
            pointer-events: none;
            transform: translate(-50%, 20px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: opacity 0.25s ease, transform 0.35s cubic-bezier(.2,.8,.2,1);
        }

        .fs-toast.show { opacity: 1; transform: translate(-50%, 0); }

        /* ============================================
           RESPONSIVE
           ============================================ */
        @media (max-width: 720px) {
            body { padding: 16px; }

            .top-nav { gap: 8px; margin-bottom: 28px; }
            .nav-item { padding: 10px 16px; font-size: 13px; border-radius: 12px; gap: 6px; }
            .nav-item img { width: 16px; height: 16px; }

            .site-brand { margin-bottom: 28px; }
            .site-brand strong { font-size: 2.2rem; }
            .site-brand small { font-size: 0.65rem; }

            .fs-card {
                padding: 20px 18px 6px;
                border-radius: 16px;
            }

            .fs-card h2 { font-size: 1.05rem; }

            .fs-row { align-items: flex-start; }

            .fs-switch { margin-top: 2px; }

            .fs-custom { grid-template-columns: 1fr; }

            .fs-field { flex-direction: column; }
            .fs-field .fs-btn { width: 100%; }

            .fs-key {
                min-width: 80px;
                height: 44px;
                font-size: 0.88rem;
            }
        }

        @media (max-width: 480px) {
            .top-nav { flex-wrap: wrap; }
            .nav-item { padding: 10px 14px; font-size: 12px; }

            .fs-chips { gap: 6px; }
            .fs-chip { height: 36px; padding: 0 12px; font-size: 0.78rem; }
            .fs-chip img { width: 15px; height: 15px; }
        }

        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation: none !important;
                transition: none !important;
            }
        }

        html.calm *,
        html.calm *::before,
        html.calm *::after {
            animation: none !important;
            transition: none !important;
        }
    </style>
</head>
<body>

    <!-- Loading Screen -->
    <div id="loading-screen">
        <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
        <h5 id="loading-text">Loading, please wait...</h5>
    </div>

    <!-- Top Navigation -->
    <nav class="top-nav" aria-label="Main navigation">
        <a href="index.html" class="nav-item" title="Home">
            <img src="png/house-solid.svg" alt="" onerror="this.style.display='none'"> Home
        </a>
        <a href="games.html" class="nav-item" title="Games">
            <img src="png/gamepad-solid.svg" alt="" onerror="this.style.display='none'"> Games
        </a>
        <a href="leaderboard.html" class="nav-item" title="Leaderboard">
            <img src="png/trophy-solid.svg" alt="" onerror="this.style.display='none'"> Leaderboard
        </a>
        <a href="chat.html" class="nav-item" title="Chat">
            <img src="png/comment-solid.svg" alt="" onerror="this.style.display='none'"> Chat
        </a>
        <a href="suggest.html" class="nav-item suggest" title="Suggest a game">
            <img src="suggest.png" alt="" onerror="this.style.display='none'"> Suggest
        </a>
        <a href="settings.html" class="nav-item" title="Settings" aria-current="page">
            <img src="png/gear-solid.svg" alt="" onerror="this.style.display='none'"> Settings
        </a>
    </nav>

    <!-- Main Content -->
    <div class="main-wrapper">

        <!-- Brand -->
        <header class="site-brand" aria-label="Farius">
            <strong>Farius</strong>
            <small>Made by Hohogames</small>
        </header>

        <!-- Page Header -->
        <div class="page-header">
            <h1>Settings</h1>
            <p>Changes save automatically in this browser.</p>
        </div>

        <!-- Panic Key -->
        <section class="fs-card" style="--i:0">
            <h2>Panic key</h2>
            <p>Press your key on any page to jump straight to a site you choose. Everything on this site respects it.</p>

            <label class="fs-row">
                <span class="fs-txt">
                    <b>Turn on panic key</b>
                    <small>Ignored while you type in a text box, unless you use Ctrl, Alt, or Meta.</small>
                </span>
                <input type="checkbox" class="fs-switch" id="panic-on" role="switch">
            </label>

            <div class="fs-row">
                <span class="fs-txt">
                    <b>Key</b>
                    <small>Click the button, then press any key or combo (like Ctrl + Q).</small>
                </span>
                <button type="button" class="fs-key" id="key-btn">Q</button>
            </div>

            <div class="fs-row fs-stack">
                <span class="fs-txt">
                    <b>Send me to</b>
                    <small>Pick a site below or paste your own link.</small>
                </span>

                <div class="fs-field">
                    <input type="text" id="panic-url" placeholder="classroom.google.com" autocomplete="off" spellcheck="false" aria-label="Panic key link">
                    <button type="button" class="fs-btn" id="panic-test">Test</button>
                </div>

                <span class="fs-err" id="url-msg"></span>
                <div class="fs-chips" id="panic-chips"></div>
            </div>
        </section>

        <!-- Tab Cloak -->
        <section class="fs-card" style="--i:1">
            <h2>Tab cloak</h2>
            <p>Change the title and icon shown in your browser tab — useful for keeping the site discreet.</p>

            <div class="fs-row fs-stack">
                <div class="fs-chips" id="cloak-chips"></div>
                <div class="fs-custom" id="cloak-custom" hidden>
                    <input type="text" id="cloak-title" placeholder="Tab title" autocomplete="off" aria-label="Custom tab title">
                    <input type="text" id="cloak-icon" placeholder="Icon link (https://...)" autocomplete="off" spellcheck="false" aria-label="Custom tab icon link">
                </div>
            </div>

            <div class="fs-row">
                <span class="fs-txt">
                    <b>Open in about:blank</b>
                    <small>Opens Farius in a new blank tab. Allow pop-ups if nothing happens.</small>
                </span>
                <button type="button" class="fs-btn" id="blank-btn">Open</button>
            </div>
        </section>

        <!-- Game Preferences -->
        <section class="fs-card" style="--i:2">
            <h2>Game preferences</h2>
            <p>Control how games behave when you launch them.</p>

            <label class="fs-row">
                <span class="fs-txt">
                    <b>Auto fullscreen games</b>
                    <small>Games open in fullscreen automatically when possible.</small>
                </span>
                <input type="checkbox" class="fs-switch" id="autofull-on" role="switch">
            </label>

            <label class="fs-row">
                <span class="fs-txt">
                    <b>Confirm before closing a game</b>
                    <small>Shows a warning before you close a running game, so you don't lose progress.</small>
                </span>
                <input type="checkbox" class="fs-switch" id="gameconfirm-on" role="switch">
            </label>

            <label class="fs-row">
                <span class="fs-txt">
                    <b>Mute game audio on launch</b>
                    <small>Games start muted — you can unmute inside the game itself.</small>
                </span>
                <input type="checkbox" class="fs-switch" id="mute-on" role="switch">
            </label>

            <label class="fs-row">
                <span class="fs-txt">
                    <b>Reduce animations</b>
                    <small>Turns off motion effects across the site for smoother performance on slow devices.</small>
                </span>
                <input type="checkbox" class="fs-switch" id="calm-on" role="switch">
            </label>
        </section>

        <!-- Safety & Privacy -->
        <section class="fs-card" style="--i:3">
            <h2>Safety &amp; privacy</h2>
            <p>Extra tools for keeping your session private.</p>

            <label class="fs-row">
                <span class="fs-txt">
                    <b>Ask before leaving</b>
                    <small>Shows a warning before you close or leave the tab, so you don't lose game progress.</small>
                </span>
                <input type="checkbox" class="fs-switch" id="leave-on" role="switch">
            </label>

            <label class="fs-row">
                <span class="fs-txt">
                    <b>Open links in new tab</b>
                    <small>Any link you click opens in a new tab instead of replacing the current one.</small>
                </span>
                <input type="checkbox" class="fs-switch" id="newtab-on" role="switch">
            </label>

            <label class="fs-row">
                <span class="fs-txt">
                    <b>Hide cursor on idle</b>
                    <small>Hides the mouse cursor after 3 seconds of no movement — good for watching games or videos.</small>
                </span>
                <input type="checkbox" class="fs-switch" id="idlehide-on" role="switch">
            </label>

            <div class="fs-row">
                <span class="fs-txt">
                    <b>Clear all site data</b>
                    <small>Removes favorites, backgrounds, chat login, and every saved setting. Cannot be undone.</small>
                </span>
                <button type="button" class="fs-btn danger" id="clear-btn">Clear data</button>
            </div>
        </section>

        <!-- Advanced -->
        <section class="fs-card" style="--i:4">
            <h2>Advanced</h2>
            <p>Danger zone — only use these if you know what you're doing.</p>

            <div class="fs-row">
                <span class="fs-txt">
                    <b>Export settings</b>
                    <small>Copies your settings to your clipboard as JSON.</small>
                </span>
                <button type="button" class="fs-btn" id="export-btn">Export</button>
            </div>

            <div class="fs-row">
                <span class="fs-txt">
                    <b>Import settings</b>
                    <small>Paste JSON settings you previously exported.</small>
                </span>
                <button type="button" class="fs-btn" id="import-btn">Import</button>
            </div>

            <div class="fs-row">
                <span class="fs-txt">
                    <b>Reset settings</b>
                    <small>Puts every setting back to its default.</small>
                </span>
                <button type="button" class="fs-btn danger" id="reset-btn">Reset</button>
            </div>
        </section>

    </div>

    <!-- Toast -->
    <div class="fs-toast" id="fs-toast" role="status" aria-live="polite"></div>

    <!-- Loading Script -->
    <script src="/loading.js"></script>

    <!-- Loading Screen Handler -->
    <script>
        (function() {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                setTimeout(() => {
                    loadingScreen.classList.add('hidden');
                }, 700);
            }
        })();
    </script>

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-WLTG1S4STB"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag("js", new Date());
        gtag("config", "G-WLTG1S4STB");
    </script>

    <!-- Settings Engine -->
    <script>
        (function () {
            "use strict";

            /* ============================================
               STORAGE
               ============================================ */
            var KEY = "farius-settings-v1";

            var DEFAULTS = {
                panic: {
                    on: false,
                    code: "KeyQ",
                    label: "Q",
                    ctrl: false,
                    alt: false,
                    shift: false,
                    meta: false,
                    url: "https://classroom.google.com"
                },
                cloak: {
                    id: "none",
                    title: "",
                    icon: ""
                },
                confirmLeave: false,
                calm: false,
                autoFullscreen: false,
                gameConfirm: true,
                muteGames: false,
                openNewTab: false,
                idleHideCursor: false
            };

            var SITES = [
                { id: "classroom", name: "Classroom", url: "https://classroom.google.com", domain: "classroom.google.com" },
                { id: "drive", name: "Drive", url: "https://drive.google.com", domain: "drive.google.com" },
                { id: "docs", name: "Docs", url: "https://docs.google.com", domain: "docs.google.com" },
                { id: "gmail", name: "Gmail", url: "https://mail.google.com", domain: "mail.google.com" },
                { id: "khan", name: "Khan Academy", url: "https://www.khanacademy.org", domain: "khanacademy.org" },
                { id: "wikipedia", name: "Wikipedia", url: "https://www.wikipedia.org", domain: "wikipedia.org" }
            ];

            function load() {
                try {
                    var raw = localStorage.getItem(KEY);
                    if (!raw) return JSON.parse(JSON.stringify(DEFAULTS));
                    var parsed = JSON.parse(raw);
                    return {
                        panic: Object.assign({}, DEFAULTS.panic, parsed.panic || {}),
                        cloak: Object.assign({}, DEFAULTS.cloak, parsed.cloak || {}),
                        confirmLeave: parsed.confirmLeave || false,
                        calm: parsed.calm || false,
                        autoFullscreen: parsed.autoFullscreen || false,
                        gameConfirm: parsed.gameConfirm !== undefined ? parsed.gameConfirm : true,
                        muteGames: parsed.muteGames || false,
                        openNewTab: parsed.openNewTab || false,
                        idleHideCursor: parsed.idleHideCursor || false
                    };
                } catch (e) {
                    return JSON.parse(JSON.stringify(DEFAULTS));
                }
            }

            function save(state) {
                try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
            }

            function reset() {
                try { localStorage.removeItem(KEY); } catch (e) {}
            }

            function safeUrl(value) {
                if (!value) return "";
                var v = value.trim();
                if (!v) return "";
                if (!/^https?:\/\//i.test(v)) v = "https://" + v;
                try { return new URL(v).href; } catch (e) { return ""; }
            }

            function fav(domain) {
                return "https://www.google.com/s2/favicons?domain=" + domain + "&sz=64";
            }

            function cloakInfo(cloak) {
                if (!cloak || cloak.id === "none") return null;
                if (cloak.id === "custom") {
                    return { title: cloak.title || "Farius", icon: cloak.icon || "" };
                }
                for (var i = 0; i < SITES.length; i++) {
                    if (SITES[i].id === cloak.id) {
                        return { title: SITES[i].name, icon: fav(SITES[i].domain) };
                    }
                }
                return null;
            }

            window.Farius = {
                load: load,
                save: save,
                reset: reset,
                safeUrl: safeUrl,
                fav: fav,
                cloakInfo: cloakInfo,
                SITES: SITES,
                paused: false
            };

            /* ============================================
               UI
               ============================================ */
            var S = load();
            var $ = function (id) { return document.getElementById(id); };

            var toastEl = $("fs-toast");
            var tt;
            function toast(message) {
                toastEl.textContent = message;
                toastEl.classList.add("show");
                clearTimeout(tt);
                tt = setTimeout(function () { toastEl.classList.remove("show"); }, 1700);
            }

            function commit(message) {
                save(S);
                applyPanic();
                applyCloak();
                applyCalm();
                applyIdleHide();
                if (message) toast(message);
            }

            function chip(label, icon, onClick) {
                var b = document.createElement("button");
                b.type = "button";
                b.className = "fs-chip";
                if (icon) {
                    var i = document.createElement("img");
                    i.src = icon;
                    i.alt = "";
                    i.onerror = function () { this.style.display = "none"; };
                    b.appendChild(i);
                }
                b.appendChild(document.createTextNode(label));
                b.onclick = onClick;
                return b;
            }

            function mark(box, test) {
                [].forEach.call(box.children, function (c, i) {
                    var on = test(i);
                    c.classList.toggle("on", on);
                    c.setAttribute("aria-pressed", on);
                });
            }

            /* ============================================
               PANIC KEY
               ============================================ */
            var keyBtn = $("key-btn");
            var url = $("panic-url");
            var urlMsg = $("url-msg");
            var capturing = false;

            $("panic-on").checked = S.panic.on;
            $("panic-on").onchange = function () {
                S.panic.on = this.checked;
                commit(this.checked ? "Panic key on" : "Panic key off");
            };

            keyBtn.textContent = S.panic.label;

            function stopCapture() {
                capturing = false;
                window.Farius.paused = false;
                keyBtn.classList.remove("cap");
                keyBtn.textContent = S.panic.label;
            }

            keyBtn.onclick = function () {
                if (capturing) return stopCapture();
                capturing = true;
                window.Farius.paused = true;
                keyBtn.classList.add("cap");
                keyBtn.textContent = "Press a key...";
            };

            keyBtn.onblur = stopCapture;

            document.addEventListener("keydown", function (e) {
                if (!capturing) return;
                if (e.key === "Tab") return stopCapture();
                e.preventDefault();
                e.stopPropagation();
                if (["Shift", "Control", "Alt", "Meta"].indexOf(e.key) > -1) return;
                if (e.key === "Escape") return stopCapture();

                var name = e.key === " " ? "Space" : (e.key.length === 1 ? e.key.toUpperCase() : e.key);

                S.panic.code = e.code;
                S.panic.ctrl = e.ctrlKey;
                S.panic.alt = e.altKey;
                S.panic.shift = e.shiftKey;
                S.panic.meta = e.metaKey;

                S.panic.label =
                    (e.ctrlKey ? "Ctrl + " : "") +
                    (e.altKey ? "Alt + " : "") +
                    (e.shiftKey ? "Shift + " : "") +
                    (e.metaKey ? "Meta + " : "") +
                    name;

                stopCapture();
                commit("Key set to " + S.panic.label);
            }, true);

            var pChips = $("panic-chips");

            function markPanic() {
                var cur = safeUrl(url.value);
                mark(pChips, function (i) { return cur === safeUrl(SITES[i].url); });
            }

            SITES.forEach(function (s) {
                pChips.appendChild(
                    chip(s.name, fav(s.domain), function () {
                        url.value = S.panic.url = s.url;
                        url.classList.remove("bad");
                        urlMsg.textContent = "";
                        markPanic();
                        commit("Link set to " + s.name);
                    })
                );
            });

            url.value = S.panic.url;
            markPanic();

            url.oninput = function () {
                var ok = !url.value.trim() || safeUrl(url.value);
                url.classList.toggle("bad", !ok);
                urlMsg.textContent = ok ? "" : "Enter a full link, like classroom.google.com";
                markPanic();
            };

            url.onchange = function () {
                var u = safeUrl(url.value);
                if (!u && url.value.trim()) return;
                u = u || SITES[0].url;
                url.value = S.panic.url = u;
                markPanic();
                commit("Link saved");
            };

            $("panic-test").onclick = function () {
                var target = safeUrl(url.value) || S.panic.url;
                if (target) window.open(target, "_blank", "noopener");
            };

            /* ============================================
               TAB CLOAK
               ============================================ */
            var cChips = $("cloak-chips");
            var custom = $("cloak-custom");
            var cTitle = $("cloak-title");
            var cIcon = $("cloak-icon");

            var opts = [{ id: "none", name: "Farius", icon: "png/logo.svg" }]
                .concat(SITES.map(function (s) {
                    return { id: s.id, name: s.name, icon: fav(s.domain) };
                }))
                .concat([{ id: "custom", name: "Custom" }]);

            function markCloak() {
                mark(cChips, function (i) { return opts[i].id === S.cloak.id; });
                custom.hidden = S.cloak.id !== "custom";
            }

            opts.forEach(function (o) {
                cChips.appendChild(
                    chip(o.name, o.icon, function () {
                        S.cloak.id = o.id;
                        markCloak();
                        applyCloak();
                        commit(o.id === "none" ? "Cloak off" : "Cloak set to " + o.name);
                    })
                );
            });

            cTitle.value = S.cloak.title;
            cIcon.value = S.cloak.icon;
            markCloak();

            function saveCustom() {
                S.cloak.title = cTitle.value.trim();
                S.cloak.icon = safeUrl(cIcon.value) || "";
                commit();
            }

            cTitle.onchange = saveCustom;
            cIcon.onchange = saveCustom;

            $("blank-btn").onclick = function () {
                var w = window.open("about:blank", "_blank");
                if (!w) {
                    toast("Pop-up blocked. Allow pop-ups and try again.");
                    return;
                }
                try {
                    var info = cloakInfo(S.cloak);
                    var f = w.document.createElement("iframe");
                    w.document.title = (info && info.title) || "Farius";
                    w.document.body.style.cssText = "margin:0;background:#f7f7f7";
                    f.src = location.origin + "/";
                    f.style.cssText = "position:fixed;inset:0;width:100%;height:100%;border:0";
                    w.document.body.appendChild(f);
                } catch (e) {}
            };

            /* ============================================
               GAME PREFERENCES
               ============================================ */
            $("autofull-on").checked = S.autoFullscreen;
            $("autofull-on").onchange = function () {
                S.autoFullscreen = this.checked;
                commit();
            };

            $("gameconfirm-on").checked = S.gameConfirm;
            $("gameconfirm-on").onchange = function () {
                S.gameConfirm = this.checked;
                commit();
            };

            $("mute-on").checked = S.muteGames;
            $("mute-on").onchange = function () {
                S.muteGames = this.checked;
                commit();
            };

            $("calm-on").checked = S.calm;
            $("calm-on").onchange = function () {
                S.calm = this.checked;
                commit();
            };

            /* ============================================
               SAFETY & PRIVACY
               ============================================ */
            $("leave-on").checked = S.confirmLeave;
            $("leave-on").onchange = function () {
                S.confirmLeave = this.checked;
                commit();
            };

            $("newtab-on").checked = S.openNewTab;
            $("newtab-on").onchange = function () {
                S.openNewTab = this.checked;
                commit();
            };

            $("idlehide-on").checked = S.idleHideCursor;
            $("idlehide-on").onchange = function () {
                S.idleHideCursor = this.checked;
                applyIdleHide();
                commit();
            };

            $("clear-btn").onclick = function () {
                if (!confirm("This will erase ALL saved data for Farius — favorites, backgrounds, chat login, everything. Continue?")) return;
                if (!confirm("Are you absolutely sure? This cannot be undone.")) return;
                try {
                    Object.keys(localStorage).forEach(function (k) {
                        if (k.indexOf("farius") !== -1) localStorage.removeItem(k);
                    });
                } catch (e) {}
                toast("All data cleared");
                setTimeout(function () { location.reload(); }, 900);
            };

            /* ============================================
               ADVANCED
               ============================================ */
            $("export-btn").onclick = function () {
                try {
                    var json = JSON.stringify(S, null, 2);
                    navigator.clipboard.writeText(json).then(function () {
                        toast("Settings copied to clipboard");
                    }).catch(function () {
                        // fallback
                        prompt("Copy your settings:", json);
                    });
                } catch (e) { toast("Export failed"); }
            };

            $("import-btn").onclick = function () {
                var raw = prompt("Paste your exported settings JSON:");
                if (!raw) return;
                try {
                    var parsed = JSON.parse(raw);
                    S = Object.assign({}, DEFAULTS, parsed);
                    S.panic = Object.assign({}, DEFAULTS.panic, parsed.panic || {});
                    S.cloak = Object.assign({}, DEFAULTS.cloak, parsed.cloak || {});
                    save(S);
                    toast("Settings imported");
                    setTimeout(function () { location.reload(); }, 800);
                } catch (e) {
                    toast("Invalid settings JSON");
                }
            };

            var resetBtn = $("reset-btn");
            resetBtn.onclick = function () {
                if (resetBtn.dataset.sure) {
                    reset();
                    location.reload();
                    return;
                }
                resetBtn.dataset.sure = "1";
                resetBtn.textContent = "Click to confirm";
                setTimeout(function () {
                    delete resetBtn.dataset.sure;
                    resetBtn.textContent = "Reset";
                }, 3000);
            };

            /* ============================================
               APPLY — PANIC KEY (global listener)
               ============================================ */
            function keyMatches(e, p) {
                if (!p.code) return false;
                if (e.code !== p.code) return false;
                if (e.ctrlKey !== p.ctrl) return false;
                if (e.altKey !== p.alt) return false;
                if (e.shiftKey !== p.shift) return false;
                if (e.metaKey !== p.meta) return false;
                return true;
            }

            function isTypingTarget(t) {
                if (!t) return false;
                var tag = (t.tagName || "").toLowerCase();
                if (tag === "input" || tag === "textarea" || tag === "select") return true;
                if (t.isContentEditable) return true;
                return false;
            }

            function applyPanic() {
                // handled by the global keydown listener below
            }

            document.addEventListener("keydown", function (e) {
                if (!S.panic.on) return;
                if (window.Farius.paused) return;
                if (capturing) return;
                if (!keyMatches(e, S.panic)) return;

                var typing = isTypingTarget(e.target);
                var hasMod = e.ctrlKey || e.altKey || e.metaKey;
                if (typing && !hasMod) return;

                var target = safeUrl(S.panic.url) || SITES[0].url;
                if (!target) return;

                e.preventDefault();
                e.stopPropagation();
                window.location.href = target;
            }, true);

            /* ============================================
               APPLY — CLOAK
               ============================================ */
            function applyCloak() {
                var info = cloakInfo(S.cloak);
                if (!info) return;
                if (info.title) document.title = info.title;

                if (info.icon) {
                    var links = document.querySelectorAll("link[rel*='icon']");
                    var found = false;
                    for (var i = 0; i < links.length; i++) {
                        links[i].href = info.icon;
                        found = true;
                    }
                    if (!found) {
                        var l = document.createElement("link");
                        l.rel = "icon";
                        l.href = info.icon;
                        document.head.appendChild(l);
                    }
                }
            }

            applyCloak();

            /* ============================================
               APPLY — CONFIRM LEAVE
               ============================================ */
            window.addEventListener("beforeunload", function (e) {
                if (S.confirmLeave) {
                    e.preventDefault();
                    e.returnValue = "";
                    return "";
                }
            });

            /* ============================================
               APPLY — REDUCE ANIMATIONS
               ============================================ */
            function applyCalm() {
                document.documentElement.style.scrollBehavior = S.calm ? "auto" : "smooth";
                if (S.calm) document.documentElement.classList.add("calm");
                else document.documentElement.classList.remove("calm");
            }
            applyCalm();

            /* ============================================
               APPLY — IDLE HIDE CURSOR
               ============================================ */
            var idleTimer = null;
            function applyIdleHide() {
                clearTimeout(idleTimer);
                document.body.style.cursor = "";
                if (!S.idleHideCursor) return;
                function reset() {
                    document.body.style.cursor = "";
                    clearTimeout(idleTimer);
                    idleTimer = setTimeout(function () {
                        document.body.style.cursor = "none";
                    }, 3000);
                }
                document.addEventListener("mousemove", reset);
                document.addEventListener("mousedown", reset);
                document.addEventListener("keydown", reset);
                reset();
            }
            applyIdleHide();

            /* ============================================
               APPLY — OPEN LINKS IN NEW TAB
               ============================================ */
            document.addEventListener("click", function (e) {
                if (!S.openNewTab) return;
                var a = e.target.closest && e.target.closest("a");
                if (!a) return;
                var href = a.getAttribute("href") || "";
                if (!href || href.startsWith("#")) return;
                if (a.target === "_blank") return;
                e.preventDefault();
                window.open(href, "_blank", "noopener");
            });

        })();
    </script>

</body>
</html>