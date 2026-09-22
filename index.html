<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="png/logo.png">
    <title>Farius</title>
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
            transition: padding 0.4s ease;
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
            width: 14px; height: 14px;
            background: #111; border-radius: 50%;
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
           HOME VIEW
           ============================================ */
        .home-view {
            width: 100%;
            max-width: 860px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 40px 0 60px;
            animation: fadeInUp 0.8s ease-out both;
            transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .home-view.hidden {
            opacity: 0;
            transform: translateY(-20px);
            pointer-events: none;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .brand { margin-bottom: 24px; }

        .brand-logo {
            font-size: clamp(3.6rem, 11vw, 6.8rem);
            font-weight: 900;
            letter-spacing: -0.06em;
            color: #111;
            line-height: 1;
            margin-bottom: 10px;
            text-shadow: 0 4px 30px rgba(0, 0, 0, 0.06);
        }

        .brand-tagline {
            font-size: 0.82rem;
            font-weight: 600;
            color: #888;
            letter-spacing: 0.18em;
            text-transform: uppercase;
        }

        .intro {
            max-width: 640px;
            margin-bottom: 28px;
            color: #555;
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.6;
            animation: fadeInUp 0.9s 0.1s ease-out both;
        }

        .intro strong { color: #111; font-weight: 700; }

        .description {
            max-width: 640px;
            margin-bottom: 32px;
            padding: 20px 26px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.85);
            border: 2px solid #e8e8e8;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            animation: fadeInUp 0.9s 0.2s ease-out both;
        }

        .description p {
            color: #555;
            font-size: 0.95rem;
            font-weight: 500;
            line-height: 1.6;
        }

        .description .game-count {
            display: inline-block;
            margin-top: 10px;
            padding: 6px 14px;
            border-radius: 999px;
            background: #111;
            color: #fff;
            font-size: 0.82rem;
            font-weight: 700;
            letter-spacing: 0.02em;
        }

        .nav-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
            width: 100%;
            max-width: 700px;
            margin-top: 12px;
        }

        .nav-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            padding: 18px 34px;
            border-radius: 16px;
            background: #ffffff;
            border: 2px solid #e2e2e2;
            color: #111;
            text-decoration: none;
            font-size: 16px;
            font-weight: 600;
            transition: all 0.25s cubic-bezier(.2,.8,.2,1);
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
            min-width: 148px;
            cursor: pointer;
            letter-spacing: -0.01em;
        }

        .nav-item:hover {
            background: #111;
            border-color: #111;
            color: #fff;
            transform: translateY(-4px);
            box-shadow: 0 14px 32px rgba(0, 0, 0, 0.16);
        }

        .nav-item:active {
            transform: translateY(-1px);
            background: #222;
            border-color: #222;
            color: #fff;
        }

        .nav-item img {
            width: 20px; height: 20px;
            filter: brightness(0);
            opacity: 0.65;
            transition: filter 0.25s ease, opacity 0.25s ease;
        }

        .nav-item:hover img,
        .nav-item:active img {
            filter: brightness(0) invert(1);
            opacity: 1;
        }

        .nav-item.suggest {
            background: #111;
            border-color: #111;
            color: #fff;
        }

        .nav-item.suggest img {
            filter: brightness(0) invert(1);
            opacity: 1;
        }

        .nav-item.suggest:hover {
            background: #333;
            border-color: #333;
        }

        .credit {
            margin-top: 56px;
            font-size: 0.78rem;
            color: #aaa;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            font-weight: 600;
        }

        /* ============================================
           RESPONSIVE
           ============================================ */
        @media (max-width: 720px) {
            body { padding: 16px; }

            .brand { margin-bottom: 20px; }
            .brand-logo { font-size: 2.8rem; }
            .brand-tagline { font-size: 0.72rem; }

            .intro { font-size: 0.92rem; margin-bottom: 22px; }
            .description { padding: 16px 20px; margin-bottom: 26px; }
            .description p { font-size: 0.88rem; }

            .nav-item {
                padding: 14px 22px;
                font-size: 14px;
                min-width: 120px;
                border-radius: 14px;
            }

            .nav-item img { width: 18px; height: 18px; }
            .nav-grid { gap: 12px; }
            .credit { margin-top: 40px; font-size: 0.7rem; }
        }

        @media (max-width: 480px) {
            body { padding: 16px; }
            .brand-logo { font-size: 2.4rem; }

            .nav-item {
                padding: 12px 16px;
                font-size: 13px;
                min-width: 100px;
                border-radius: 12px;
            }

            .nav-item img { width: 16px; height: 16px; }
            .nav-grid { gap: 10px; }
        }

        #uv-search-engine,
        .navbar,
        .side-panel,
        .site-brand {
            display: none !important;
        }
    </style>
</head>
<body>

    <div id="loading-screen">
        <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
        <h5 id="loading-text">Loading Farius...</h5>
    </div>

    <!-- ============================================
         HOME VIEW
         ============================================ -->
    <div class="home-view" id="home-view">

        <div class="brand">
            <div class="brand-logo">Farius</div>
            <div class="brand-tagline">Made by Hohogames</div>
        </div>

        <p class="intro">
            Welcome to <strong>Farius</strong> — join in the chat or
            jump into a game, all from one place. Pick an option below.
        </p>

        <div class="description">
            <p>
                Farius is a lightweight browser and gaming hub built for speed.
                Browse any site, play hundreds of browser games instantly, or
                jump on the leaderboard — everything runs right in your browser.
            </p>
            <span class="game-count" id="game-count">300+ games available</span>
        </div>

        <div class="nav-grid">
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
            <a href="settings.html" class="nav-item" title="Settings">
                <img src="png/gear-solid.svg" alt="" onerror="this.style.display='none'"> Settings
            </a>
        </div>

        <div class="credit">Made by Hohogames</div>
    </div>

    <!-- Loading Script -->
    <script src="/loading.js"></script>

    <!-- Loading screen handler -->
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

    <!-- Live game count -->
    <script>
        (function () {
            var saved = localStorage.getItem("farius-game-count");
            var el = document.getElementById("game-count");
            if (el && saved) el.textContent = saved + "+ games available";
        })();
    </script>

</body>
</html>