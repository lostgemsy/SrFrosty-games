<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="png/logo.png">
    <title>Playing — Farius</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800;14..32,900&display=swap" rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        html, body {
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #111;
            font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            color: #fff;
        }

        /* ============================================
           GAME FRAME
           ============================================ */
        #game-frame {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
            background: #000;
            z-index: 1;
        }

        /* ============================================
           CONTROL BAR
           ============================================ */
        .controls {
            position: fixed;
            top: 16px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 100;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px;
            background: rgba(0, 0, 0, 0.72);
            border: 2px solid rgba(255, 255, 255, 0.15);
            border-radius: 16px;
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            opacity: 0.35;
            transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .controls:hover {
            opacity: 1;
            transform: translateX(-50%) translateY(-2px);
        }

        .ctrl-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            height: 42px;
            padding: 0 16px;
            border: 2px solid transparent;
            border-radius: 11px;
            background: rgba(255, 255, 255, 0.08);
            color: #fff;
            font-family: inherit;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            white-space: nowrap;
        }

        .ctrl-btn:hover {
            background: rgba(255, 255, 255, 0.18);
            border-color: rgba(255, 255, 255, 0.25);
            transform: translateY(-2px);
        }

        .ctrl-btn:active {
            transform: translateY(0);
        }

        .ctrl-btn.close-btn:hover {
            background: #e74c3c;
            border-color: #e74c3c;
        }

        .ctrl-btn.fav-btn.active {
            background: #f1c40f;
            border-color: #f1c40f;
            color: #111;
        }

        .ctrl-btn.fav-btn.active svg {
            fill: #111;
        }

        .ctrl-btn svg {
            width: 18px;
            height: 18px;
            stroke: currentColor;
            fill: none;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        .ctrl-btn.fav-btn.active svg {
            stroke: #111;
        }

        .ctrl-divider {
            width: 1px;
            height: 24px;
            background: rgba(255, 255, 255, 0.18);
        }

        .ctrl-title {
            padding: 0 12px;
            color: #fff;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: -0.02em;
            max-width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        /* ============================================
           TOAST
           ============================================ */
        .toast {
            position: fixed;
            left: 50%;
            bottom: 28px;
            z-index: 200;
            padding: 12px 22px;
            border: 2px solid rgba(255, 255, 255, 0.25);
            border-radius: 14px;
            background: rgba(0, 0, 0, 0.9);
            color: #fff;
            font-size: 0.9rem;
            font-weight: 600;
            opacity: 0;
            pointer-events: none;
            transform: translate(-50%, 20px);
            transition: opacity 0.25s ease, transform 0.35s cubic-bezier(.2,.8,.2,1);
        }

        .toast.show {
            opacity: 1;
            transform: translate(-50%, 0);
        }

        /* ============================================
           LOADING SPINNER (inside iframe area)
           ============================================ */
        .game-loading {
            position: fixed;
            inset: 0;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #111;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }

        .game-loading.hidden {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }

        .spinner {
            width: 48px;
            height: 48px;
            border: 4px solid rgba(255, 255, 255, 0.15);
            border-top-color: #fff;
            border-radius: 50%;
            animation: spin 0.9s linear infinite;
            margin-bottom: 20px;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .game-loading p {
            color: #888;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 1px;
        }

        /* ============================================
           RESPONSIVE
           ============================================ */
        @media (max-width: 650px) {
            .controls {
                top: 10px;
                gap: 6px;
                padding: 6px;
                border-radius: 13px;
            }

            .ctrl-btn {
                height: 38px;
                padding: 0 10px;
                font-size: 12px;
                border-radius: 9px;
            }

            .ctrl-btn span {
                display: none;
            }

            .ctrl-btn svg {
                width: 20px;
                height: 20px;
            }

            .ctrl-title {
                display: none;
            }

            .ctrl-divider {
                display: none;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation: none !important;
                transition: none !important;
            }
        }
    </style>
</head>
<body>

    <!-- Loading -->
    <div class="game-loading" id="game-loading">
        <div class="spinner"></div>
        <p>Loading game...</p>
    </div>

    <!-- Game iframe -->
    <iframe id="game-frame" src="about:blank" allowfullscreen allow="autoplay; fullscreen; gamepad; clipboard-write"></iframe>

    <!-- Control bar -->
    <div class="controls" id="controls">
        <span class="ctrl-title" id="ctrl-title">Game</span>
        <div class="ctrl-divider"></div>

        <button class="ctrl-btn fav-btn" id="fav-btn" title="Favorite this game">
            <svg viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>Favorite</span>
        </button>

        <button class="ctrl-btn" id="fullscreen-btn" title="Fullscreen">
            <svg viewBox="0 0 24 24">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
            </svg>
            <span>Fullscreen</span>
        </button>

        <button class="ctrl-btn" id="newtab-btn" title="Open in new tab">
            <svg viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <path d="M15 3h6v6"/>
                <path d="M10 14L21 3"/>
            </svg>
            <span>New tab</span>
        </button>

        <button class="ctrl-btn close-btn" id="close-btn" title="Close game">
            <svg viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
            <span>Close</span>
        </button>
    </div>

    <!-- Toast -->
    <div class="toast" id="toast"></div>

    <script>
        (function () {
            "use strict";

            /* ============================================
               FAVORITES STORAGE
               ============================================ */
            var FAV_KEY = "farius-favorites";

            function getFavorites() {
                try {
                    return JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
                } catch (e) { return []; }
            }

            function saveFavorites(list) {
                try {
                    localStorage.setItem(FAV_KEY, JSON.stringify(list));
                } catch (e) {}
            }

            function isFavorite(id) {
                return getFavorites().indexOf(id) > -1;
            }

            function toggleFavorite(id) {
                var list = getFavorites();
                var idx = list.indexOf(id);
                if (idx > -1) {
                    list.splice(idx, 1);
                } else {
                    list.push(id);
                }
                saveFavorites(list);
                return idx === -1;
            }

            /* ============================================
               ELEMENTS
            ============================================ */
            var frame = document.getElementById("game-frame");
            var loading = document.getElementById("game-loading");
            var controls = document.getElementById("controls");
            var favBtn = document.getElementById("fav-btn");
            var fsBtn = document.getElementById("fullscreen-btn");
            var newtabBtn = document.getElementById("newtab-btn");
            var closeBtn = document.getElementById("close-btn");
            var titleEl = document.getElementById("ctrl-title");
            var toastEl = document.getElementById("toast");

            var toastTimer;
            function toast(msg) {
                toastEl.textContent = msg;
                toastEl.classList.add("show");
                clearTimeout(toastTimer);
                toastTimer = setTimeout(function () {
                    toastEl.classList.remove("show");
                }, 1600);
            }

            /* ============================================
               PARSE URL PARAMS
            ============================================ */
            var params = new URLSearchParams(window.location.search);
            var gameUrl = params.get("url") || "";
            var gameName = params.get("name") || "Game";
            var gameId = params.get("id") || gameUrl;

            // Validate URL (must be http/https or relative)
            if (!gameUrl || (!/^https?:\/\//i.test(gameUrl) && !gameUrl.startsWith("/"))) {
                // Try to bail out gracefully
                if (!gameUrl) {
                    document.body.innerHTML =
                        '<div style="display:flex;align-items:center;justify-content:center;height:100vh;color:#fff;font-family:sans-serif;text-align:center;padding:40px;">' +
                        '<div><h1 style="margin-bottom:12px;">No game selected</h1><p style="color:#888;">Go back and pick a game.</p></div></div>';
                    return;
                }
            }

            titleEl.textContent = gameName;
            document.title = gameName + " — Farius";

            /* ============================================
               LOAD IFRAME
            ============================================ */
            frame.src = gameUrl;

            frame.addEventListener("load", function () {
                // Small delay so the game has a moment to render
                setTimeout(function () {
                    loading.classList.add("hidden");
                }, 400);
            });

            // Fallback hide after 8s
            setTimeout(function () {
                loading.classList.add("hidden");
            }, 8000);

            /* ============================================
               FAVORITE BUTTON
            ============================================ */
            function updateFavButton() {
                if (isFavorite(gameId)) {
                    favBtn.classList.add("active");
                    favBtn.querySelector("span").textContent = "Favorited";
                } else {
                    favBtn.classList.remove("active");
                    favBtn.querySelector("span").textContent = "Favorite";
                }
            }

            updateFavButton();

            favBtn.addEventListener("click", function () {
                var added = toggleFavorite(gameId);
                updateFavButton();
                toast(added ? "Added to favorites" : "Removed from favorites");

                // Notify parent window if embedded
                try {
                    if (window.parent !== window) {
                        window.parent.postMessage({
                            type: "farius-favorite-change",
                            id: gameId,
                            favorited: added
                        }, "*");
                    }
                } catch (e) {}
            });

            /* ============================================
               FULLSCREEN
            ============================================ */
            fsBtn.addEventListener("click", function () {
                if (!document.fullscreenElement) {
                    var el = document.documentElement;
                    if (el.requestFullscreen) {
                        el.requestFullscreen().catch(function () {
                            toast("Fullscreen not available");
                        });
                    } else if (el.webkitRequestFullscreen) {
                        el.webkitRequestFullscreen();
                    } else if (el.msRequestFullscreen) {
                        el.msRequestFullscreen();
                    } else {
                        toast("Fullscreen not supported");
                    }
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                }
            });

            document.addEventListener("fullscreenchange", function () {
                var span = fsBtn.querySelector("span");
                span.textContent = document.fullscreenElement ? "Exit" : "Fullscreen";
            });

            /* ============================================
               NEW TAB
            ============================================ */
            newtabBtn.addEventListener("click", function () {
                window.open(gameUrl, "_blank", "noopener");
            });

            /* ============================================
               CLOSE
            ============================================ */
            closeBtn.addEventListener("click", function () {
                // Try history back, fall back to games.html
                if (window.parent !== window) {
                    try {
                        window.parent.postMessage({ type: "farius-close-game" }, "*");
                        return;
                    } catch (e) {}
                }
                if (document.referrer && document.referrer.indexOf(location.host) > -1) {
                    history.back();
                } else {
                    location.href = "games.html";
                }
            });

            /* ============================================
               KEYBOARD SHORTCUTS
            ============================================ */
            document.addEventListener("keydown", function (e) {
                var tag = (e.target.tagName || "").toLowerCase();
                if (tag === "input" || tag === "textarea") return;

                if (e.key === "Escape") {
                    // Exit fullscreen first, otherwise close
                    if (document.fullscreenElement) {
                        document.exitFullscreen();
                    }
                }
                if (e.key === "f" && !e.ctrlKey && !e.metaKey) {
                    fsBtn.click();
                }
            });

            /* ============================================
               POST MESSAGE LISTENER (from parent)
            ============================================ */
            window.addEventListener("message", function (e) {
                if (e.data && e.data.type === "farius-close-game") {
                    closeBtn.click();
                }
            });

        })();
    </script>

</body>
</html>