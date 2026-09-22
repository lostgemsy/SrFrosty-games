<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="png/logo.png">
    <title>Games — Farius</title>
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
            background-image:
                radial-gradient(circle at 25% 15%, rgba(0,0,0,0.015) 0%, transparent 50%),
                radial-gradient(circle at 75% 85%, rgba(0,0,0,0.015) 0%, transparent 50%),
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23e0e0e0' stroke-width='1.2'%3E%3Cpath d='M0 0h120v120H0z'/%3E%3Cpath d='M60 0v120M0 60h120'/%3E%3Ccircle cx='60' cy='60' r='20'/%3E%3C/g%3E%3C/svg%3E");
            background-size: 120px 120px;
            background-attachment: fixed;
        }

        body.custom-bg {
            background-image: var(--user-bg) !important;
            background-size: cover !important;
            background-position: center !important;
            background-attachment: fixed !important;
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
            z-index: 9999;
            transition: opacity 0.7s ease, visibility 0.7s ease;
        }

        #loading-screen.hidden { opacity: 0; visibility: hidden; pointer-events: none; }

        .dots { display: flex; gap: 14px; margin-bottom: 28px; }

        .dot {
            width: 14px; height: 14px; background: #111; border-radius: 50%;
            animation: loadingBounce 1s infinite ease-in-out;
        }

        .dot:nth-child(2) { animation-delay: 0.18s; }
        .dot:nth-child(3) { animation-delay: 0.36s; }

        @keyframes loadingBounce {
            0%, 100% { transform: translateY(0); opacity: 0.15; }
            50% { transform: translateY(-18px); opacity: 1; }
        }

        #loading-text { color: #666; font-size: 15px; font-weight: 400; letter-spacing: 2px; }

        /* ============================================
           FULL-WIDTH APP SHELL
           ============================================ */
        .app-shell {
            display: grid;
            grid-template-columns: 240px 1fr;
            min-height: 100vh;
            width: 100%;
        }

        /* ============================================
           SIDEBAR — flush against the wall, full height
           ============================================ */
        .sidebar {
            background: #ffffff;
            border-right: 2px solid #e8e8e8;
            padding: 24px 0;
            position: sticky;
            top: 0;
            height: 100vh;
            overflow-y: auto;
            animation: slideInLeft 0.5s ease-out both;
        }

        @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }

        .sidebar-logo {
            padding: 0 24px 20px;
            border-bottom: 2px solid #f0f0f0;
            margin-bottom: 20px;
        }

        .sidebar-logo strong {
            display: block;
            font-size: 1.5rem;
            font-weight: 900;
            letter-spacing: -0.05em;
            color: #111;
            line-height: 1;
            margin-bottom: 4px;
        }

        .sidebar-logo small {
            font-size: 0.62rem;
            font-weight: 700;
            color: #888;
            letter-spacing: 0.16em;
            text-transform: uppercase;
        }

        .sidebar-section-title {
            padding: 0 24px;
            font-size: 10px;
            font-weight: 800;
            color: #999;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            margin-bottom: 8px;
            margin-top: 18px;
        }

        .sidebar-section-title:first-of-type { margin-top: 0; }

        .cat-list {
            display: flex;
            flex-direction: column;
            padding: 0 12px;
        }

        .cat-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 12px;
            border-radius: 9px;
            border: 0;
            background: transparent;
            color: #555;
            font-family: inherit;
            font-size: 13.5px;
            font-weight: 600;
            cursor: pointer;
            text-align: left;
            width: 100%;
            transition: all 0.15s ease;
            letter-spacing: -0.005em;
            margin-bottom: 1px;
        }

        .cat-item:hover {
            background: #f5f5f5;
            color: #111;
        }

        .cat-item.active {
            background: #111;
            color: #fff;
        }

        .cat-item .cat-name {
            flex: 1;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .cat-item .cat-count {
            font-size: 11px;
            font-weight: 700;
            color: #aaa;
            padding: 1px 7px;
            border-radius: 999px;
            background: #f5f5f5;
            flex: none;
            margin-left: 8px;
        }

        .cat-item.active .cat-count {
            background: rgba(255, 255, 255, 0.18);
            color: #fff;
        }

        .sidebar-divider {
            height: 1px;
            background: #f0f0f0;
            margin: 16px 24px;
        }

        /* ============================================
           MAIN CONTENT
           ============================================ */
        .main-content {
            display: flex;
            flex-direction: column;
            min-width: 0;
            padding: 32px 40px 60px;
        }

        /* ============================================
           TOP NAV
           ============================================ */
        .top-nav {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-bottom: 32px;
            animation: fadeIn 0.4s ease-out both;
        }

        .nav-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 10px 18px;
            border-radius: 11px;
            background: #ffffff;
            border: 2px solid #e8e8e8;
            color: #111;
            text-decoration: none;
            font-size: 13.5px;
            font-weight: 700;
            transition: all 0.2s ease;
            cursor: pointer;
        }

        .nav-item:hover {
            background: #111; border-color: #111; color: #fff;
            transform: translateY(-2px);
        }

        .nav-item[aria-current="page"] { background: #111; border-color: #111; color: #fff; }

        .nav-item img {
            width: 15px; height: 15px; filter: brightness(0); opacity: 0.7;
            transition: filter 0.2s ease, opacity 0.2s ease;
        }

        .nav-item:hover img, .nav-item[aria-current="page"] img {
            filter: brightness(0) invert(1); opacity: 1;
        }

        .nav-item.suggest {
            background: #111; border-color: #111; color: #fff;
        }
        .nav-item.suggest img { filter: brightness(0) invert(1); opacity: 1; }
        .nav-item.suggest:hover { background: #333; border-color: #333; }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        /* ============================================
           PAGE HEADER
           ============================================ */
        .page-header {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 24px;
            flex-wrap: wrap;
            animation: fadeInUp 0.5s ease-out both;
        }

        .page-header h1 {
            font-size: 1.75rem;
            font-weight: 900;
            letter-spacing: -0.04em;
            color: #111;
            line-height: 1;
        }

        .page-header p {
            font-size: 0.9rem;
            color: #777;
            font-weight: 500;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* ============================================
           SEARCH
           ============================================ */
        .search-row {
            width: 100%;
            display: flex;
            gap: 10px;
            margin-bottom: 12px;
            animation: fadeInUp 0.5s 0.05s ease-out both;
        }

        .search-form { flex: 1; position: relative; }

        #gamesearch {
            width: 100%;
            height: 54px;
            padding: 0 24px;
            border-radius: 14px;
            outline: none;
            border: 2px solid #e0e0e0;
            color: #111;
            background: #ffffff;
            font-family: inherit;
            font-size: 15px;
            font-weight: 500;
            transition: all 0.2s ease;
        }

        #gamesearch::placeholder { color: #aaa; font-weight: 400; }
        #gamesearch:hover { border-color: #c0c0c0; }
        #gamesearch:focus {
            border-color: #111;
            box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.06);
        }

        .bg-btn {
            flex: none;
            width: 54px;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #e0e0e0;
            border-radius: 14px;
            background: #ffffff;
            color: #111;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .bg-btn:hover {
            background: #111; border-color: #111; color: #fff;
            transform: translateY(-2px);
        }

        .bg-btn svg {
            width: 20px; height: 20px;
            stroke: currentColor; fill: none; stroke-width: 2;
            stroke-linecap: round; stroke-linejoin: round;
        }

        .bg-btn.has-custom { background: #111; border-color: #111; color: #fff; }

        /* ============================================
           COUNT
           ============================================ */
        .gl-meta {
            color: #888;
            font-size: 0.85rem;
            font-weight: 600;
            min-height: 1.3em;
            margin-bottom: 24px;
            animation: fadeInUp 0.5s 0.1s ease-out both;
        }

        /* ============================================
           GAME GRID
           ============================================ */
        .gl-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 22px;
            width: 100%;
            margin-bottom: 40px;
            animation: fadeInUp 0.5s 0.15s ease-out both;
        }

        .gl-card {
            display: flex;
            flex-direction: column;
            padding: 10px;
            border-radius: 16px;
            background: #ffffff;
            border: 2px solid #ececec;
            text-decoration: none;
            color: #111;
            transition: all 0.25s cubic-bezier(.2,.8,.2,1);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .gl-card:hover {
            border-color: #111;
            transform: translateY(-6px);
            box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
        }

        .gl-art {
            position: relative;
            display: block;
            aspect-ratio: 1;
            overflow: hidden;
            border-radius: 11px;
            background: #f0f0f0;
            margin-bottom: 12px;
        }

        .gl-art img {
            position: absolute; inset: 0;
            width: 100%; height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .gl-card:hover .gl-art img { transform: scale(1.05); }

        .gl-play {
            position: absolute;
            left: 10px; right: 10px; bottom: 10px;
            display: flex; align-items: center; justify-content: center;
            height: 34px;
            border-radius: 9px;
            background: #111;
            color: #fff;
            font-weight: 700;
            font-size: 0.82rem;
            opacity: 0;
            transform: translateY(6px);
            transition: opacity 0.18s ease, transform 0.2s ease;
        }

        .gl-card:hover .gl-play { opacity: 1; transform: translateY(0); }

        .card-fav {
            position: absolute;
            top: 8px;
            right: 8px;
            z-index: 3;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.92);
            color: #111;
            cursor: pointer;
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.2s ease;
            backdrop-filter: blur(6px);
        }

        .gl-card:hover .card-fav { opacity: 1; transform: scale(1); }
        .card-fav:hover { background: #f1c40f; }
        .card-fav.active { opacity: 1; transform: scale(1); background: #f1c40f; color: #111; }

        .card-fav svg {
            width: 15px; height: 15px;
            stroke: currentColor; fill: none; stroke-width: 2.2;
            stroke-linecap: round; stroke-linejoin: round;
        }

        .card-fav.active svg { fill: currentColor; }

        .gl-card h3 {
            margin: 0 4px 4px;
            overflow: hidden;
            color: #111;
            font-size: 0.92rem;
            font-weight: 700;
            text-align: left;
            text-overflow: ellipsis;
            white-space: nowrap;
            letter-spacing: -0.01em;
        }

        /* ============================================
           EMPTY STATE
           ============================================ */
        .gl-empty {
            display: flex; flex-direction: column; align-items: center; gap: 16px;
            padding: 80px 24px; color: #888; text-align: center;
        }

        .gl-empty p { margin: 0; font-size: 1rem; }

        .gl-empty a {
            padding: 12px 22px; border-radius: 11px; background: #111; color: #fff;
            font-weight: 700; text-decoration: none; font-size: 0.9rem;
            transition: all 0.2s ease;
        }

        .gl-empty a:hover { background: #333; transform: translateY(-2px); }

        /* ============================================
           GAME OVERLAY
           ============================================ */
        .game-overlay {
            position: fixed;
            inset: 0;
            z-index: 9998;
            background: #111;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .game-overlay.active { opacity: 1; visibility: visible; }

        .game-overlay iframe {
            width: 100%;
            height: 100%;
            border: 0;
            display: block;
        }

        /* ============================================
           BACKGROUND MODAL
           ============================================ */
        .bg-modal-backdrop {
            position: fixed;
            inset: 0;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(8px);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .bg-modal-backdrop.active { opacity: 1; visibility: visible; }

        .bg-modal {
            width: 100%;
            max-width: 520px;
            padding: 28px;
            border-radius: 20px;
            background: #ffffff;
            border: 2px solid #e8e8e8;
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
            transform: translateY(20px);
            transition: transform 0.3s cubic-bezier(.2,.8,.2,1);
        }

        .bg-modal-backdrop.active .bg-modal { transform: translateY(0); }

        .bg-modal h2 {
            font-size: 1.35rem;
            font-weight: 900;
            color: #111;
            letter-spacing: -0.03em;
            margin-bottom: 6px;
        }

        .bg-modal > p {
            color: #777;
            font-size: 0.88rem;
            font-weight: 500;
            margin-bottom: 20px;
        }

        .bg-preview {
            width: 100%;
            height: 160px;
            border-radius: 12px;
            background: #f0f0f0 center / cover no-repeat;
            border: 2px solid #e0e0e0;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #aaa;
            font-size: 0.85rem;
            font-weight: 600;
        }

        .bg-preview.has-image { color: transparent; }

        .bg-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 20px;
        }

        .bg-action {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 11px 18px;
            border: 2px solid #e0e0e0;
            border-radius: 11px;
            background: #fafafa;
            color: #111;
            font-family: inherit;
            font-size: 0.86rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .bg-action:hover {
            background: #111; border-color: #111; color: #fff;
            transform: translateY(-2px);
        }

        .bg-action svg {
            width: 15px; height: 15px;
            stroke: currentColor; fill: none; stroke-width: 2;
            stroke-linecap: round; stroke-linejoin: round;
        }

        .bg-action input[type="file"] { display: none; }

        .bg-url-row { display: flex; gap: 10px; margin-bottom: 16px; }

        .bg-url-row input {
            flex: 1;
            min-width: 0;
            height: 44px;
            padding: 0 14px;
            border: 2px solid #e0e0e0;
            border-radius: 11px;
            background: #fafafa;
            color: #111;
            font-family: inherit;
            font-size: 0.88rem;
            font-weight: 500;
            outline: none;
        }

        .bg-url-row input:focus { border-color: #111; background: #fff; }

        .bg-url-row button {
            padding: 0 18px;
            border: 2px solid #111;
            border-radius: 11px;
            background: #111;
            color: #fff;
            font-family: inherit;
            font-size: 0.86rem;
            font-weight: 700;
            cursor: pointer;
        }

        .bg-url-row button:hover { background: #333; border-color: #333; }

        .bg-modal-footer {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            padding-top: 14px;
            border-top: 2px solid #f0f0f0;
            margin-top: 8px;
        }

        .bg-cancel,
        .bg-done {
            padding: 11px 22px;
            border-radius: 11px;
            font-family: inherit;
            font-size: 0.86rem;
            font-weight: 700;
            cursor: pointer;
        }

        .bg-cancel {
            background: #fafafa;
            border: 2px solid #e0e0e0;
            color: #111;
        }

        .bg-cancel:hover { background: #f0f0f0; border-color: #ccc; }

        .bg-done {
            background: #111;
            border: 2px solid #111;
            color: #fff;
        }

        .bg-done:hover { background: #333; border-color: #333; }

        /* ============================================
           TOAST
           ============================================ */
        .toast {
            position: fixed;
            left: 50%; bottom: 28px; z-index: 10001;
            padding: 12px 20px;
            border-radius: 12px;
            background: #111;
            color: #fff;
            font-size: 0.86rem;
            font-weight: 700;
            opacity: 0;
            pointer-events: none;
            transform: translate(-50%, 20px);
            transition: opacity 0.25s ease, transform 0.3s cubic-bezier(.2,.8,.2,1);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
        }

        .toast.show { opacity: 1; transform: translate(-50%, 0); }

        /* ============================================
           MOBILE
           ============================================ */
        .mobile-cat-toggle {
            display: none;
            width: 100%;
            padding: 12px 18px;
            border-radius: 12px;
            background: #ffffff;
            border: 2px solid #e8e8e8;
            color: #111;
            font-family: inherit;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            margin-bottom: 14px;
            justify-content: space-between;
            align-items: center;
        }

        .mobile-cat-toggle .arrow {
            transition: transform 0.25s ease;
            font-size: 11px;
        }

        .mobile-cat-toggle.open .arrow { transform: rotate(180deg); }

        @media (max-width: 900px) {
            .app-shell { grid-template-columns: 1fr; }

            .sidebar {
                display: none;
                position: static;
                height: auto;
                border-right: 0;
                border-bottom: 2px solid #e8e8e8;
                padding: 16px 0;
            }

            .sidebar.mobile-open { display: block; }

            .main-content { padding: 20px 16px 40px; }

            .mobile-cat-toggle { display: flex; }
        }

        @media (max-width: 720px) {
            .top-nav { flex-wrap: wrap; justify-content: center; gap: 6px; margin-bottom: 24px; }
            .nav-item { padding: 9px 14px; font-size: 12.5px; border-radius: 10px; gap: 6px; }
            .nav-item img { width: 14px; height: 14px; }

            .page-header h1 { font-size: 1.4rem; }
            .page-header p { font-size: 0.82rem; }

            .search-row { gap: 8px; }
            #gamesearch { height: 48px; padding: 0 18px; font-size: 14px; border-radius: 12px; }
            .bg-btn { width: 48px; height: 48px; border-radius: 12px; }
            .bg-btn svg { width: 18px; height: 18px; }

            .gl-meta { margin-bottom: 16px; font-size: 0.78rem; }

            .gl-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
            .gl-card { padding: 8px; border-radius: 13px; }
            .gl-art { border-radius: 9px; margin-bottom: 8px; }
            .gl-card h3 { font-size: 0.8rem; margin: 0 2px 2px; }
            .gl-play { height: 28px; font-size: 0.72rem; border-radius: 7px; left: 6px; right: 6px; bottom: 6px; }

            .bg-modal { padding: 22px; border-radius: 16px; }
        }

        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after { animation: none !important; transition: none !important; }
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

    <!-- ============================================
         APP SHELL — SIDEBAR + MAIN
         ============================================ -->
    <div class="app-shell">

        <!-- ============================================
             SIDEBAR (flush to left wall, full height)
             ============================================ -->
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-logo">
                <strong>Farius</strong>
                <small>Made by Hohogames</small>
            </div>

            <div class="sidebar-section-title">Categories</div>
            <div class="cat-list" id="cat-list">
                <!-- Populated by JS -->
            </div>
        </aside>

        <!-- ============================================
             MAIN CONTENT
             ============================================ -->
        <main class="main-content">

            <!-- Top nav -->
            <nav class="top-nav" aria-label="Main navigation">
                <a href="index.html" class="nav-item" title="Home">
                    <img src="png/house-solid.svg" alt="" onerror="this.style.display='none'"> Home
                </a>
                <a href="games.html" class="nav-item" title="Games" aria-current="page">
                    <img src="png/gamepad-solid.svg" alt="" onerror="this.style.display='none'"> Games
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

            <!-- Page header -->
            <div class="page-header">
                <h1>All Games</h1>
                <p id="category-label">Browse every game in the library</p>
            </div>

            <!-- Mobile category toggle -->
            <button class="mobile-cat-toggle" id="mobile-cat-toggle">
                <span id="mobile-cat-label">All Games</span>
                <span class="arrow">▼</span>
            </button>

            <!-- Search + background button -->
            <div class="search-row">
                <div class="search-form">
                    <input
                        type="text"
                        id="gamesearch"
                        placeholder="Search games..."
                        autocomplete="off"
                        spellcheck="false"
                        aria-label="Search games"
                    >
                </div>
                <button class="bg-btn" id="bg-btn" title="Import your own background">
                    <svg viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <path d="m21 15-5-5L5 21"/>
                    </svg>
                </button>
            </div>

            <p class="gl-meta" id="gl-count" aria-live="polite"></p>

            <!-- ============================================
                 GAME GRID
                 ============================================ -->
            <div class="gl-grid" id="gameGallery">

                <a class="gl-card" href="https://forms.gle/azBWo53JQN8VNzFt5" target="_blank" rel="noopener" data-id="__suggest__" data-category="Other">
                    <span class="gl-art">
                        <img src="/png/games/forms.png" alt="" loading="lazy">
                        <span class="gl-play">Suggest</span>
                    </span>
                    <h3>Game Suggestions</h3>
                </a>

                <a class="gl-card" href="games/1" data-id="games/1" data-name="1" data-category="Other">
                    <span class="gl-art">
                        <img src="png/games/12.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>1</h3>
                </a>

                <a class="gl-card" href="games/1v1lol" data-id="games/1v1lol" data-name="1v1.lol" data-category="Shooter">
                    <span class="gl-art">
                        <img src="png/games/1v1.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>1v1.lol</h3>
                </a>

                <a class="gl-card" href="games/2048" data-id="games/2048" data-name="2048" data-category="Puzzle">
                    <span class="gl-art">
                        <img src="png/games/2048.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>2048</h3>
                </a>

                <a class="gl-card" href="games/ovo" data-id="games/ovo" data-name="OvO" data-category="Platformer">
                    <span class="gl-art">
                        <img src="/png/games/ovo.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>OvO</h3>
                </a>

                <a class="gl-card" href="games/slope" data-id="games/slope" data-name="Slope" data-category="Arcade">
                    <span class="gl-art">
                        <img src="png/games/slope.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Slope</h3>
                </a>

                <a class="gl-card" href="games/retro-bowl" data-id="games/retro-bowl" data-name="Retro Bowl" data-category="Sports">
                    <span class="gl-art">
                        <img src="png/games/retro-bowl.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Retro Bowl</h3>
                </a>

                <a class="gl-card" href="games/sm64" data-id="games/sm64" data-name="SM64" data-category="Platformer">
                    <span class="gl-art">
                        <img src="png/games/sm64.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>SM64</h3>
                </a>

                <a class="gl-card" href="games/soccer-random" data-id="games/soccer-random" data-name="Soccer Random" data-category="Sports">
                    <span class="gl-art">
                        <img src="png/games/soccer.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Soccer Random</h3>
                </a>

                <a class="gl-card" href="/games/baldis-basics/index.html" data-id="baldis" data-name="Baldis Basics" data-category="Horror">
                    <span class="gl-art">
                        <img src="/games/baldis-basics/splash.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Baldis Basics</h3>
                </a>

                <a class="gl-card" href="games/tiny-fishing" data-id="games/tiny-fishing" data-name="Tiny Fishing" data-category="Casual">
                    <span class="gl-art">
                        <img src="png/games/tiny.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Tiny Fishing</h3>
                </a>

                <a class="gl-card" href="games/worlds-hardest-game" data-id="games/worlds-hardest-game" data-name="Worlds Hardest Game" data-category="Puzzle">
                    <span class="gl-art">
                        <img src="png/games/world.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Worlds Hardest Game</h3>
                </a>

                <a class="gl-card" href="games/MonkeyMart" data-id="games/MonkeyMart" data-name="Monkey Mart" data-category="Simulation">
                    <span class="gl-art">
                        <img src="png/games/monkey.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Monkey Mart</h3>
                </a>

                <a class="gl-card" href="games/idle-breakout" data-id="games/idle-breakout" data-name="Idle Breakout" data-category="Clicker">
                    <span class="gl-art">
                        <img src="png/games/idle.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Idle Breakout</h3>
                </a>

                <a class="gl-card" href="games/Rocket-League" data-id="games/Rocket-League" data-name="Rocket League" data-category="Sports">
                    <span class="gl-art">
                        <img src="png/games/rocket.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Rocket League</h3>
                </a>

                <a class="gl-card" href="games/a-dance-of-fire-and-ice" data-id="games/a-dance-of-fire-and-ice" data-name="ADOFAI" data-category="Rhythm">
                    <span class="gl-art">
                        <img src="png/games/adofai.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>ADOFAI</h3>
                </a>

                <a class="gl-card" href="games/basket-random" data-id="games/basket-random" data-name="Basket Random" data-category="Sports">
                    <span class="gl-art">
                        <img src="png/games/basket.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Basket Random</h3>
                </a>

                <a class="gl-card" href="games/bitlife" data-id="games/bitlife" data-name="Bitlife" data-category="Simulation">
                    <span class="gl-art">
                        <img src="png/games/bit.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Bitlife</h3>
                </a>

                <a class="gl-card" href="games/bloonstd" data-id="games/bloonstd" data-name="Bloon TD1" data-category="Strategy">
                    <span class="gl-art">
                        <img src="png/games/bloons.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Bloon TD1</h3>
                </a>

                <a class="gl-card" href="games/btd5" data-id="games/btd5" data-name="Bloons TD5" data-category="Strategy">
                    <span class="gl-art">
                        <img src="png/games/bloons5.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Bloons TD5</h3>
                </a>

                <a class="gl-card" href="games/cookie-clicker" data-id="games/cookie-clicker" data-name="Cookie Clicker" data-category="Clicker">
                    <span class="gl-art">
                        <img src="png/games/cookie.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Cookie Clicker</h3>
                </a>

                <a class="gl-card" href="games/eggycar" data-id="games/eggycar" data-name="Eggy Car" data-category="Racing">
                    <span class="gl-art">
                        <img src="png/games/eggy-car.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Eggy Car</h3>
                </a>

                <a class="gl-card" href="games/fnaf/" data-id="games/fnaf" data-name="FNAF" data-category="Horror">
                    <span class="gl-art">
                        <img src="png/games/splash.jpg" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>FNAF</h3>
                </a>

                <a class="gl-card" href="games/ducklife1/" data-id="games/ducklife1" data-name="Duck Life 1" data-category="Adventure">
                    <span class="gl-art">
                        <img src="png/games/ducklife.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Duck Life 1</h3>
                </a>

                <a class="gl-card" href="games/rbcollege" data-id="games/rbcollege" data-name="Retro Bowl College" data-category="Sports">
                    <span class="gl-art">
                        <img src="png/games/rbc.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Retro Bowl College</h3>
                </a>

                <a class="gl-card" href="games/csgo-clicker" data-id="games/csgo-clicker" data-name="Csgo Clicker" data-category="Clicker">
                    <span class="gl-art">
                        <img src="png/games/csgo.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Csgo Clicker</h3>
                </a>

                <a class="gl-card" href="games/death-run-3d" data-id="games/death-run-3d" data-name="Death Run 3D" data-category="Arcade">
                    <span class="gl-art">
                        <img src="png/games/death.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Death Run 3D</h3>
                </a>

                <a class="gl-card" href="games/drift-boss" data-id="games/drift-boss" data-name="Drift Boss" data-category="Racing">
                    <span class="gl-art">
                        <img src="png/games/drift.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Drift Boss</h3>
                </a>

                <a class="gl-card" href="games/drive-mad" data-id="games/drive-mad" data-name="Drive Mad" data-category="Racing">
                    <span class="gl-art">
                        <img src="png/games/drive.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Drive Mad</h3>
                </a>

                <a class="gl-card" href="games/minecraft-15" data-id="games/minecraft-15" data-name="Minecraft 1.5" data-category="Sandbox">
                    <span class="gl-art">
                        <img src="png/games/mine15.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Minecraft 1.5</h3>
                </a>

                <a class="gl-card" href="games/learntofly" data-id="games/learntofly" data-name="Learn To Fly" data-category="Arcade">
                    <span class="gl-art">
                        <img src="png/games/learn.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Learn To Fly</h3>
                </a>

                <a class="gl-card" href="games/minecraft-18" data-id="games/minecraft-18" data-name="Minecraft 1.8" data-category="Sandbox">
                    <span class="gl-art">
                        <img src="png/games/mine18.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Minecraft 1.8</h3>
                </a>

                <a class="gl-card" href="games/run" data-id="games/run" data-name="Run" data-category="Runner">
                    <span class="gl-art">
                        <img src="png/games/run.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Run</h3>
                </a>

                <a class="gl-card" href="games/drift-hunters" data-id="games/drift-hunters" data-name="Drift Hunter" data-category="Racing">
                    <span class="gl-art">
                        <img src="png/games/hunt.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Drift Hunter</h3>
                </a>

                <a class="gl-card" href="games/osu!" data-id="games/osu" data-name="Osu!" data-category="Rhythm">
                    <span class="gl-art">
                        <img src="/png/games/osu!.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Osu!</h3>
                </a>

                <a class="gl-card" href="games/stickman-hook" data-id="games/stickman-hook" data-name="Stickman Hook" data-category="Arcade">
                    <span class="gl-art">
                        <img src="png/games/stickman.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Stickman Hook</h3>
                </a>

                <a class="gl-card" href="games/riddleschool" data-id="games/riddleschool" data-name="Riddle School" data-category="Puzzle">
                    <span class="gl-art">
                        <img src="png/games/riddle.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Riddle School</h3>
                </a>

                <a class="gl-card" href="games/subway-surfers/" data-id="games/subway-surfers" data-name="Subway Surfers" data-category="Runner">
                    <span class="gl-art">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyjATFe7Qg15j5x1YktUbABxgr6BlbKXKECbj6KH2QzbgKqzw" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Subway Surfers</h3>
                </a>

                <a class="gl-card" href="/games/gta3/" data-id="games/gta3" data-name="GTA3" data-category="Action">
                    <span class="gl-art">
                        <img src="/png/games/gta3.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>GTA3</h3>
                </a>

                <a class="gl-card" href="/games/funmayhem/" data-id="games/funmayhem" data-name="Gun Mayhem" data-category="Shooter">
                    <span class="gl-art">
                        <img src="/games/funmayhem/icon.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Gun Mayhem</h3>
                </a>

                <a class="gl-card" href="/games/jetpackjoyride/" data-id="games/jetpackjoyride" data-name="Jetpack Joyride" data-category="Runner">
                    <span class="gl-art">
                        <img src="/games/jetpackjoyride/logo.jpeg" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Jetpack Joyride</h3>
                </a>

                <a class="gl-card" href="/games/pizzatower/" data-id="games/pizzatower" data-name="Pizza Tower" data-category="Platformer">
                    <span class="gl-art">
                        <img src="/games/pizzatower/pz.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Pizza Tower</h3>
                </a>

                <a class="gl-card" href="/games/superhot/" data-id="games/superhot" data-name="Superhot" data-category="Action">
                    <span class="gl-art">
                        <img src="/games/superhot/icon.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Superhot</h3>
                </a>

                <a class="gl-card" href="/games/tetris/" data-id="games/tetris" data-name="Tetris" data-category="Puzzle">
                    <span class="gl-art">
                        <img src="/games/tetris/icon.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Tetris</h3>
                </a>

                <a class="gl-card" href="/games/theimpossiblequiz/" data-id="games/theimpossiblequiz" data-name="The Impossible Quiz" data-category="Puzzle">
                    <span class="gl-art">
                        <img src="/games/theimpossiblequiz/quiz.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>The Impossible Quiz</h3>
                </a>

                <a class="gl-card" href="/games/tombofthemask/index.html" data-id="games/tombofthemask" data-name="Tomb Of The Mask" data-category="Arcade">
                    <span class="gl-art">
                        <img src="/games/tombofthemask/cover.svg" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Tomb Of The Mask</h3>
                </a>

                <a class="gl-card" href="/games/vex/" data-id="games/vex" data-name="Vex" data-category="Platformer">
                    <span class="gl-art">
                        <img src="/games/vex/icon.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Vex</h3>
                </a>

                <a class="gl-card" href="/games/watermelongame/" data-id="games/watermelongame" data-name="Watermelon Game" data-category="Puzzle">
                    <span class="gl-art">
                        <img src="/games/watermelongame/melon.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Watermelon Game</h3>
                </a>

                <a class="gl-card" href="/games/n-gon/" data-id="games/n-gon" data-name="n-gon" data-category="Sandbox">
                    <span class="gl-art">
                        <img src="/games/n-gon/bot.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>n-gon</h3>
                </a>

                <a class="gl-card" href="/games/getaway-shootout/" data-id="games/getaway-shootout" data-name="Getaway Shootout" data-category="Shooter">
                    <span class="gl-art">
                        <img src="/games/getaway-shootout/img/index.jpg" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Getaway Shootout</h3>
                </a>

                <a class="gl-card" href="/games/fruitninja/" data-id="games/fruitninja" data-name="Fruit Ninja" data-category="Arcade">
                    <span class="gl-art">
                        <img src="/games/fruitninja/FruitNinjaTeaser.jpg" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Fruit Ninja</h3>
                </a>

                <a class="gl-card" href="/games/learntofly2/" data-id="games/learntofly2" data-name="Learn To Fly 2" data-category="Arcade">
                    <span class="gl-art">
                        <img src="/games/learntofly2/learn-to-fly-2.jpg" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Learn To Fly 2</h3>
                </a>

                <a class="gl-card" href="/games/ltf3/" data-id="games/ltf3" data-name="Learn To Fly 3" data-category="Arcade">
                    <span class="gl-art">
                        <img src="/games/ltf3/logo.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Learn To Fly 3</h3>
                </a>

                <a class="gl-card" href="/games/motox3m/" data-id="games/motox3m" data-name="Moto X3M" data-category="Racing">
                    <span class="gl-art">
                        <img src="/games/motox3m/splash.jpg" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Moto X3M</h3>
                </a>

                <a class="gl-card" href="/games/paperio2/" data-id="games/paperio2" data-name="Paperio 2" data-category="Arcade">
                    <span class="gl-art">
                        <img src="/games/paperio2/paper.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Paperio 2</h3>
                </a>

                <a class="gl-card" href="/games/pixel-gun-survival/" data-id="games/pixel-gun-survival" data-name="Pixel Gun 3D" data-category="Shooter">
                    <span class="gl-art">
                        <img src="/games/pixel-gun-survival/512x512.png" alt="">
                        <span class="gl-play">Play</span>
                    </span>
                    <h3>Pixel Gun 3D</h3>
                </a>

            </div>

            <!-- Empty State -->
            <div class="gl-empty" id="gl-empty" hidden>
                <p>No games match "<span id="gl-term"></span>".</p>
                <a href="https://forms.gle/azBWo53JQN8VNzFt5" target="_blank" rel="noopener">Suggest this game</a>
            </div>

        </main>
    </div>

    <!-- Game Overlay (iframe) -->
    <div class="game-overlay" id="game-overlay">
        <iframe id="overlay-frame" src="about:blank" allowfullscreen allow="autoplay; fullscreen; gamepad; clipboard-write"></iframe>
    </div>

    <!-- Background Modal -->
    <div class="bg-modal-backdrop" id="bg-modal-backdrop">
        <div class="bg-modal" role="dialog" aria-modal="true" aria-labelledby="bg-modal-title">
            <h2 id="bg-modal-title">Custom background</h2>
            <p>Upload an image or paste a URL. It's saved in your browser.</p>

            <div class="bg-preview" id="bg-preview">No background selected</div>

            <div class="bg-actions">
                <label class="bg-action">
                    <svg viewBox="0 0 24 24">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <path d="M17 8l-5-5-5 5"/>
                        <path d="M12 3v12"/>
                    </svg>
                    Upload image
                    <input type="file" id="bg-file" accept="image/*">
                </label>
                <button class="bg-action" id="bg-reset">
                    <svg viewBox="0 0 24 24">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                        <path d="M3 3v5h5"/>
                    </svg>
                    Reset to default
                </button>
            </div>

            <div class="bg-url-row">
                <input type="text" id="bg-url" placeholder="https://example.com/image.jpg" spellcheck="false">
                <button id="bg-url-apply">Use URL</button>
            </div>

            <div class="bg-modal-footer">
                <button class="bg-cancel" id="bg-cancel">Cancel</button>
                <button class="bg-done" id="bg-done">Done</button>
            </div>
        </div>
    </div>

    <!-- Toast -->
    <div class="toast" id="toast"></div>

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

    <!-- ============================================
         GAMES.JS — loads the local game catalog
         ============================================ -->
    <script src="/farius-game-logos.js"></script>
    <script src="/farius-games-catalog.js"></script>
    <script src="/games.js"></script>

    <!-- ============================================
         MAIN SCRIPT
         ============================================ -->
    <script>
        (function () {
            "use strict";

            /* ============================================
               STORAG
               ============================================ */
            var FAV_KEY = "farius-favorites";
            var BG_KEY = "farius-background";

            function getFavorites() {
                try { return JSON.parse(localStorage.getItem(FAV_KEY) || "[]"); }
                catch (e) { return []; }
            }
            function saveFavorites(list) {
                try { localStorage.setItem(FAV_KEY, JSON.stringify(list)); } catch (e) {}
            }
            function isFavorite(id) { return getFavorites().indexOf(id) > -1; }
            function toggleFavorite(id) {
                var list = getFavorites();
                var idx = list.indexOf(id);
                if (idx > -1) list.splice(idx, 1);
                else list.push(id);
                saveFavorites(list);
                return idx === -1;
            }

            /* ============================================
               ELEMENTS
               ============================================ */
            var input = document.getElementById("gamesearch");
            var count = document.getElementById("gl-count");
            var empty = document.getElementById("gl-empty");
            var term = document.getElementById("gl-term");
            var grid = document.getElementById("gameGallery");
            var toastEl = document.getElementById("toast");
            var overlay = document.getElementById("game-overlay");
            var overlayFrame = document.getElementById("overlay-frame");
            var bgBtn = document.getElementById("bg-btn");
            var bgBackdrop = document.getElementById("bg-modal-backdrop");
            var bgPreview = document.getElementById("bg-preview");
            var bgFile = document.getElementById("bg-file");
            var bgReset = document.getElementById("bg-reset");
            var bgUrl = document.getElementById("bg-url");
            var bgUrlApply = document.getElementById("bg-url-apply");
            var bgCancel = document.getElementById("bg-cancel");
            var bgDone = document.getElementById("bg-done");

            var catList = document.getElementById("cat-list");
            var mobileToggle = document.getElementById("mobile-cat-toggle");
            var mobileCatLabel = document.getElementById("mobile-cat-label");
            var sidebar = document.getElementById("sidebar");
            var categoryLabel = document.getElementById("category-label");

            var activeCategory = "All";
            var pendingBg = null;
            var cards = [];
            var cardData = [];
            var categories = {};

            /* ============================================
               TOAST
               ============================================ */
            var toastTimer;
            function toast(msg) {
                toastEl.textContent = msg;
                toastEl.classList.add("show");
                clearTimeout(toastTimer);
                toastTimer = setTimeout(function () {
                    toastEl.classList.remove("show");
                }, 1700);
            }

            /* ============================================
               BACKGROUND
               ============================================ */
            function getSavedBg() {
                try { return localStorage.getItem(BG_KEY) || ""; }
                catch (e) { return ""; }
            }
            function setSavedBg(value) {
                try {
                    if (value) localStorage.setItem(BG_KEY, value);
                    else localStorage.removeItem(BG_KEY);
                } catch (e) {}
            }
            function applyBg(value) {
                if (value) {
                    document.body.classList.add("custom-bg");
                    document.body.style.setProperty("--user-bg", 'url("' + value + '")');
                    bgBtn.classList.add("has-custom");
                } else {
                    document.body.classList.remove("custom-bg");
                    document.body.style.removeProperty("--user-bg");
                    bgBtn.classList.remove("has-custom");
                }
            }
            var savedBg = getSavedBg();
            if (savedBg) applyBg(savedBg);

            /* ============================================
               FAVORITE STAR
               ============================================ */
            function createFavButton(card, id) {
                var btn = document.createElement("button");
                btn.type = "button";
                btn.className = "card-fav";
                btn.title = "Favorite";
                btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
                if (isFavorite(id)) btn.classList.add("active");
                btn.addEventListener("click", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var added = toggleFavorite(id);
                    btn.classList.toggle("active", added);
                    toast(added ? "Added to favorites" : "Removed from favorites");
                });
                return btn;
            }

            /* ============================================
               SCAN GRID
               ============================================ */
            function inferCategory(card) {
                var source = ((card.getAttribute("data-name") || "") + " " + (card.getAttribute("data-id") || "")).toLowerCase();
                var rules = [
                    ["Horror", /horror|fnaf|five nights|backrooms|baldi|doomori|evil|scary|haunt|house|hospital|scary|zombie|dead|slender|granny|amulet/],
                    ["Shooter", /shooter|1v1|assassin|battlefield|shellshock|krunker|gun|strike|war|tank|sniper|combat|soldier|shell shock|pixel gun/],
                    ["Racing", /race|racing|car|kart|moto|drift|drive|rally|truck|road|slope|traffic|bike|run 2|run2|highway|nitro/],
                    ["Sports", /soccer|football|basket|basketball|tennis|golf|volley|volleyball|hockey|bowling|baseball|sports|boxing|wrestling|pool/],
                    ["Puzzle", /2048|puzzle|riddle|quiz|tetris|sudoku|connect|mahjong|solitaire|mine sweeper|minesweeper|word|logic|unroll|watermelon|bloxors|pipes|matching/],
                    ["Strategy", /bloon|btd|tower|defense|defend|age[s]? of conflict|warfare|kingdom|strategy|battle for|gondor|empire|hex|chess|checkers|conquest|risk/],
                    ["Clicker", /clicker|idle|grindcraft|cookie|doge miner|dogeminer|incremental|tap|factory balls|particle clicker/],
                    ["Simulation", /simulator|simulation|tycoon|bitlife|monkey mart|craft|mine|farming|city|life|planet|hotel|factory|business/],
                    ["Rhythm", /rhythm|osu|dance|friday night|fnf|music|twitch tetris/],
                    ["Platformer", /platform|vex|fireboy|watergirl|jump|super mario|mario|adventure|adventure drivers|stickman hook|fancy pants|learn to fly/],
                    ["Runner", /runner|subway|temple|run 3|run3|run4|jetpack|flappy|endless runner/],
                    ["Arcade", /arcade|snake|flappy|breakout|pong|pac|asteroid|asteroids|space invader|invader|geometry dash|geodash|heli|helicopter|pinball/],
                    ["Action", /action|superhot|ninja|stickman|roblox|among us|alien|boxhead|bacon may die|battle/],
                    ["Adventure", /adventure|escape|heist|prison|samurai|quest|journey|island|portal|room|hotel/],
                    ["Sandbox", /sandbox|minecraft|eagler|webretro|mindustry|cell machine|sand game|physics|webgl/]
                ];

                for (var i = 0; i < rules.length; i++) {
                    if (rules[i][1].test(source)) return rules[i][0];
                }
                return "Other";
            }

            function scanGrid() {
                cards = Array.prototype.slice.call(grid.children);
                cardData = [];
                categories = {};

                cards.forEach(function (card) {
                    var id = card.getAttribute("data-id");
                    var name = card.getAttribute("data-name");
                    var h3 = card.querySelector("h3");

                    if (!id) {
                        id = card.getAttribute("href") || "";
                        card.setAttribute("data-id", id);
                    }
                    if (!name && h3) {
                        name = h3.textContent;
                        card.setAttribute("data-name", name);
                    }

                    var category = card.getAttribute("data-category") || inferCategory(card);
                    card.setAttribute("data-category", category);

                    var isSuggest = id === "__suggest__";

                    cardData.push({
                        card: card,
                        id: id,
                        name: name || "",
                        category: category,
                        isSuggest: isSuggest
                    });

                    if (!isSuggest) {
                        categories[category] = (categories[category] || 0) + 1;
                    }

                    if (!isSuggest && !card.querySelector(".card-fav")) {
                        card.appendChild(createFavButton(card, id));
                    }
                });

                renderCategories();
            }

            /* ============================================
               RENDER SIDEBAR CATEGORIES
               ============================================ */
            function renderCategories() {
                catList.innerHTML = "";

                var allCount = 0;
                Object.keys(categories).forEach(function (c) { allCount += categories[c]; });

                catList.appendChild(buildCategoryItem("All", allCount, "All Games"));

                Object.keys(categories).sort().forEach(function (cat) {
                    catList.appendChild(buildCategoryItem(cat, categories[cat], cat));
                });
            }

            function buildCategoryItem(catKey, catCount, displayName) {
                var btn = document.createElement("button");
                btn.type = "button";
                btn.className = "cat-item" + (catKey === activeCategory ? " active" : "");
                btn.setAttribute("data-cat", catKey);
                btn.innerHTML =
                    '<span class="cat-name">' + displayName + '</span>' +
                    '<span class="cat-count">' + catCount + '</span>';
                btn.addEventListener("click", function () {
                    setCategory(catKey, displayName);
                });
                return btn;
            }

            function setCategory(catKey, displayName) {
                activeCategory = catKey;

                catList.querySelectorAll(".cat-item").forEach(function (el) {
                    el.classList.toggle("active", el.getAttribute("data-cat") === catKey);
                });

                if (categoryLabel) {
                    categoryLabel.textContent = catKey === "All"
                        ? "Browse every game in the library"
                        : "Showing only " + displayName + " games";
                }
                if (mobileCatLabel) {
                    mobileCatLabel.textContent = displayName;
                }

                if (window.innerWidth <= 900) {
                    sidebar.classList.remove("mobile-open");
                    mobileToggle.classList.remove("open");
                }

                searchGames();
            }

            /* ============================================
               MOBILE CATEGORY TOGGLE
               ============================================ */
            mobileToggle.addEventListener("click", function () {
                sidebar.classList.toggle("mobile-open");
                mobileToggle.classList.toggle("open");
            });

            /* ============================================
               GAME OVERLAY
               ============================================ */
            function openGame(url, name, id) {
                var params = new URLSearchParams();
                params.set("url", url);
                params.set("name", name);
                params.set("id", id);
                overlayFrame.src = "game.html?" + params.toString();
                overlay.classList.add("active");
                document.body.style.overflow = "hidden";
            }

            function closeGame() {
                overlay.classList.remove("active");
                overlayFrame.src = "about:blank";
                document.body.style.overflow = "";
            }

            window.addEventListener("message", function (e) {
                if (e.data && e.data.type === "farius-close-game") closeGame();
                if (e.data && e.data.type === "farius-favorite-change") {
                    var id = e.data.id;
                    cards.forEach(function (c) {
                        if (c.getAttribute("data-id") === id) {
                            var star = c.querySelector(".card-fav");
                            if (star) star.classList.toggle("active", e.data.favorited);
                        }
                    });
                }
            });

            grid.addEventListener("click", function (e) {
                var card = e.target.closest(".gl-card");
                if (!card) return;
                var id = card.getAttribute("data-id") || card.getAttribute("href") || "";
                if (id === "__suggest__") return;
                if (e.target.closest(".card-fav")) return;
                e.preventDefault();
                var url = card.getAttribute("href") || "";
                var name = card.getAttribute("data-name") ||
                           (card.querySelector("h3") ? card.querySelector("h3").textContent : "Game");
                if (!url) return;
                openGame(url, name, id);
            });

            document.addEventListener("keydown", function (e) {
                if (e.key === "Escape" && overlay.classList.contains("active")) closeGame();
            });

            /* ============================================
               SEARCH + FILTER
               ============================================ */
            function searchGames() {
                var q = input.value.trim().toLowerCase();
                var shown = 0;

                cardData.forEach(function (data) {
                    var card = data.card;
                    var name = data.name.toLowerCase();
                    var matchSearch = !q || name.indexOf(q) !== -1;
                    var matchCat = activeCategory === "All" || data.category === activeCategory;
                    var show = matchSearch && matchCat;
                    card.style.display = show ? "" : "none";
                    if (show) shown++;
                });

                if (empty) empty.hidden = shown > 0;
                if (term) term.textContent = input.value.trim();

                if (count) {
                    var total = cardData.filter(function (d) { return !d.isSuggest; }).length;
                    if (q) {
                        count.textContent = shown + " of " + total + " games";
                    } else if (activeCategory === "All") {
                        count.textContent = total + " games";
                    } else {
                        count.textContent = shown + " " + activeCategory.toLowerCase() + " games";
                    }
                }
            }

            input.addEventListener("input", searchGames);

            document.addEventListener("keydown", function (e) {
                var tag = (e.target.tagName || "").toLowerCase();
                if (e.key === "/" && tag !== "input" && tag !== "textarea" && !e.ctrlKey && !e.metaKey) {
                    if (overlay.classList.contains("active")) return;
                    e.preventDefault();
                    input.focus();
                }
            });

            /* ============================================
               BACKGROUND MODAL
               ============================================ */
            function openBgModal() {
                pendingBg = getSavedBg();
                updatePreview();
                bgBackdrop.classList.add("active");
                bgUrl.value = "";
            }
            function closeBgModal() {
                bgBackdrop.classList.remove("active");
                pendingBg = null;
            }
            function updatePreview() {
                if (pendingBg) {
                    bgPreview.classList.add("has-image");
                    bgPreview.style.backgroundImage = 'url("' + pendingBg + '")';
                    bgPreview.textContent = "";
                } else {
                    bgPreview.classList.remove("has-image");
                    bgPreview.style.backgroundImage = "";
                    bgPreview.textContent = "No background selected";
                }
            }
            bgBtn.addEventListener("click", openBgModal);
            bgCancel.addEventListener("click", closeBgModal);
            bgBackdrop.addEventListener("click", function (e) {
                if (e.target === bgBackdrop) closeBgModal();
            });
            bgFile.addEventListener("change", function () {
                var file = this.files && this.files[0];
                if (!file) return;
                if (!file.type.startsWith("image/")) { toast("Please pick an image file"); return; }
                var reader = new FileReader();
                reader.onload = function (e) { pendingBg = e.target.result; updatePreview(); };
                reader.readAsDataURL(file);
            });
            bgUrlApply.addEventListener("click", function () {
                var v = bgUrl.value.trim();
                if (!v) return;
                pendingBg = v;
                updatePreview();
            });
            bgReset.addEventListener("click", function () { pendingBg = null; updatePreview(); });
            bgDone.addEventListener("click", function () {
                if (pendingBg) { setSavedBg(pendingBg); applyBg(pendingBg); toast("Background saved"); }
                else { setSavedBg(""); applyBg(""); toast("Background reset"); }
                closeBgModal();
            });

            /* ============================================
               INIT
               ============================================ */
            scanGrid();
            searchGames();

            // Re-scan once games.js has added its cards
            window.addEventListener("load", function () {
                setTimeout(function () {
                    scanGrid();
                    searchGames();
                }, 300);
            });

            // Poll for stability (in case games.js loads slowly)
            (function waitForGames() {
                var lastCount = -1;
                var stable = 0;
                var start = Date.now();
                function check() {
                    var current = grid.children.length;
                    if (current === lastCount) stable++;
                    else { stable = 0; lastCount = current; }
                    if (stable >= 3 || Date.now() - start > 4000) {
                        scanGrid();
                        searchGames();
                        return;
                    }
                    setTimeout(check, 100);
                }
                check();
            })();

        })();
    </script>

</body>
</html>