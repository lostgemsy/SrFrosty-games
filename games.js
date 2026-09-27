/* =========================================================
   Yumix Games — catalog + renderer + iframe overlay
   ========================================================= */

(function () {
  'use strict';

  var folders = [
    '1','10-minutes-till-dawn','100ng','1v1lol','1v1space','2048','2048-multitask',
    '9007199254740992','99balls','DOOMORI','DogeMiner','Dogeminer2','HexGL','MonkeyMart',
    'OfflineParadise','Rocket-League','Run 2','ShapeShootout','Stickman-Survival','Trimps',
    'a-dance-of-fire-and-ice','achievementunlocked','adarkroom','adrenalinechallenge',
    'adventure-drivers','ages-of-conflict','alienhominid','align-4','amazing-rope-police',
    'amidst-the-clouds','among-us','angelunder','angry-sharks','aquapark-slides','astray',
    'avalanche','awesometanks2','backrooms','backrooms2d','bacon-may-die',
    'bad-ice-cream','bad-ice-cream-2','bad-ice-cream-3','baldis-basics','balldodge',
    'ballistic-chickens','basket-random','basketball-stars','basketbros-io','battleforgondor',
    'bigredbutton','bitlife','blacholesquare','blackknight','blockpost','bloonstd','bloonstd2',
    'bloxors','bntts','bobtherobber2','bonkio','boxhead2play','boxing-random','breakingthebank',
    'btd4','btd5','btts','burger-and-frights','bus and subway','cannon-basketball-4',
    'canyondefense','cars-simulator','cell-machine','champion-island','championarcher',
    'checkers','chess','chill-radio','chrome-dino','circlo','classicube','cluster-rush',
    'cnpingpong','connect3','cookie-clicker','core-ball','craftmine','creativekillchamber',
    'crossyroad','csgo-clicker','ctr','ctr-holiday','ctr-tr','cubefield','cupcake2048',
    'dante','deal-or-no-deal','death-run-3d','deepest-sword','defend-the-tank','doctor-acorn2',
    'dodge','doge2048','doodle-jump','doom','doublewires','dragon-vs-bricks','draw-the-hill',
    'drift-boss','drift-hunters','drive-mad','ducklife1','ducklife2','ducklife3','ducklife4',
    'duke-nukem-2','dumbwaystodie','eaglerfaithful','eaglerjp','earntodie','edge-surf',
    'edgenotfound','eel-slap','eggycar','elasticman','endlesswar3','escapingtheprison',
    'evil-glitch','evolution','exo','factoryballs','fairsquares','fake-virus',
    'fancypantsadventures','fantasy-dash','fireboywatergirlforesttemple','flappy plane',
    'flappy-2048','flappy-bird','flappybird','flashtetris','fleeingthecomplex','flippy-fish',
    'fnaw','fridaynightfunkin','froggys-battle','fruitninja','frying-nemo','fsucraft',
    'fuclient','gachalife','game-inside','gdtd','gearsofbabies','generic-fishing-game',
    'geochallenge','geodash','geodashlite','geogeo','geojump','geoneondash','geops1',
    'georash','georgeandtheprinter','geotrash','getaway-shootout','gimme-the-airpod',
    'glass-city','gmonster','go-ball','goodnight','goodnight-meowmie','google-feud',
    'google-snake','gravity-soccer','greybox','grindcraft','hackertype','handshakes',
    'happy-hop','happywheels','hardware-tycoon','hba','helicopter','hellscaper','hexempire',
    'hextris','highrisehop','hill-climb-racing','hungry-lamu','iceagebaby','iceagebaby2',
    'idle-breakout','idle-shark','idledice','idledices','impossiblequiz','interactivebuddy',
    'invite-the-blackbird','iron dash','jetpack-joyride','just-fall','just-one-boss',
    'kirkaio','kitchen-gun-game','kittencannon','knife-master','krunker','learntofly',
    'learntofly2','legacyflashgames','level13','linerider','ltf-idle','ltf3',
    'madalin-stunt-cars-2','madalin-stunt-cars-3','mario','mart','marvinspectrum',
    'matrixrampage','mc2d','mcje','meme2048','merge-round-racers','mindustry','mineblocks',
    'minecraft-15','minecraft-18','minecraft-classic','minecraftbeta','minecrafttowerdefence',
    'minesweeper','miniputt','missiles','monster-tracks','motox3m','motox3m-pool',
    'motox3m-spooky','motox3m-winter','motox3m2','my-rusty-submarine','n-gon','ninja',
    'ninjavsevilcorp','noob-steve-parkour','ns-shaft','nsresurgence','om-bounce','osu!',
    'out-of-ctrl','overwatch','ovo','pandemic2','papasburgeria','papaspizzaria','paperio2',
    'papery-planes','particle-clicker','particleclicker','piclient','pigeon-ascent',
    'pixel-gun-survival','planetlife','plants vs zombies 1','polybranch','poom',
    'popcat-classic','portalflash','precision-client','protektor','push-the-square',
    'push-your-luck','rabbit-samurai','rabbit-samurai2','resent-client','retro-bowl',
    'rhythm-doctor','riddleschool','riddleschool2','riddleschool3','riddleschool4',
    'riddleschool5','riddletransfer','riddletransfer2','roblox','roblox copy','robuxclicker',
    'rolling-forests','rolly-vortex','rooftop-snipers','roommate','ruffle','run','run 3',
    'run4bootleg','runner','sand-game','sandboxels','santy-is-home','scooperia','scrapmetal',
    'scratcharia','shellshockers','shogunshowdown','shotinthedark','shuttledeck',
    'sky-car-stunt','sleepingbeauty','slime-rush-td','slitherio','slope','slope-2',
    'slope-ball','sm64','smashkarts','smokingbarrels','snowbattle','snowrider3d',
    'soccer-random','soccer-skills','soldier-legend','space-company'
  ];

  // Entry overrides — only when index.html isn't at the folder root
  var entries = {
    'hellscaper': 'Hellscaper WebGL 4-19-23/index.html',
    'legacyflashgames': 'sesame/games/abbys-sandbox-search/index.html',
    'minesweeper': 'beginner/index.html',
    'resent-client': '1.8/index.html',
    'roommate': '31/index.html',
    'stationmeltdown': 'Build/index.html',
    'webretro': 'info/index.html'
  };

  // Manual image overrides — folder -> actual image filename (no "images/" prefix)
  var imageOverrides = {
    'DOOMORI': 'doomori.png',
    'DogeMiner': 'dogeminer.png',
    'Dogeminer2': 'dogeminer2.jpg',
    'HexGL': 'hexgl.png',
    'MonkeyMart': 'monkeymart.png',
    'OfflineParadise': 'offlineparadise.jpeg',
    'Rocket-League': 'rocket-league.png',
    'Run 2': 'run-2.jpg',
    'ShapeShootout': 'shapeshootout.png',
    'Stickman-Survival': 'stickman-survival.png',
    'Trimps': 'trimps.png',
    'bus and subway': 'bus-and-subway.png',
    'osu!': 'osu.png',
    'roblox copy': 'roblox-copy.png',
    '1v1lol': '1v1.png',
    'bitlife': 'logo.png',
    'cookie-clicker': 'cookie.png',
    'csgo-clicker': 'csgo.png',
    'death-run-3d': 'death.png',
    'drive-mad': 'drive.png',
    'getaway-shootout': 'images.jpg',
    'idle-breakout': 'idle.png',
    "backrooms2d": "backrooms-2d.png",
    "particleclicker": "particle-clicker.png"
  };

  var games = folders.map(function (folder) {
    return {
      folder: folder,
      entry: entries[folder] || null,
      image: imageOverrides[folder] || null
    };
  });

  /* Helpers */
  function displayName(game) {
    return String(game.folder)
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  function gameUrl(game) {
    var folder = String(game.folder).split('/').map(encodeURIComponent).join('/');
    var entry = String(game.entry || 'index.html').split('/').map(encodeURIComponent).join('/');
    return 'games/' + folder + '/' + entry;
  }

  function candidateImages(game) {
    if (game.folder === 'drive-mad') return ['games/drive-mad/logo.jpg'];
    if (game.folder === 'baldis-basics') return ['games/baldis-basics/splash.png'];
    if (game.folder === 'basket-random') return ['games/basket-random/splash.jpeg'];
    if (game.folder === '1v1lol') return ['/games/1v1lol/splash.png'];
    if (game.image) return ['images/' + game.image];
    var base = 'images/' + game.folder;
    var low = 'images/' + game.folder.toLowerCase();
    return [
      base + '.png', base + '.jpg', base + '.jpeg', base + '.webp',
      base + '.PNG', base + '.JPG', base + '.JPEG',
      low + '.png', low + '.jpg', low + '.jpeg', low + '.webp'
    ];
  }

  /* Render */
  var grid = document.getElementById('gameGrid');
  var search = document.getElementById('search');
  var count = document.getElementById('count');

  function render(filter) {
    var q = String(filter || '').trim().toLowerCase();
    var shown = games.filter(function (g) {
      return displayName(g).toLowerCase().indexOf(q) !== -1;
    });

    grid.innerHTML = '';

    if (!shown.length) {
      grid.innerHTML = '<div class="empty">No games match that search.</div>';
    } else {
      shown.forEach(function (game) {
        var card = document.createElement('a');
        card.className = 'game-card';
        card.href = gameUrl(game);

        var img = document.createElement('img');
        img.alt = '';
        img.loading = 'lazy';

        var cands = candidateImages(game);
        var i = 0;
        function tryNext() {
          if (i >= cands.length) { img.style.visibility = 'hidden'; return; }
          img.src = cands[i++];
        }
        img.onerror = tryNext;
        tryNext();

        var title = document.createElement('h3');
        title.textContent = displayName(game);

        card.appendChild(img);
        card.appendChild(title);
        grid.appendChild(card);
      });
    }

    if (count) {
      count.textContent = q
        ? shown.length + ' of ' + games.length + ' games'
        : games.length + ' games';
    }
  }

  if (search) {
    search.addEventListener('input', function () {
      render(search.value);
    });
  }

  render();

  /* Iframe overlay */
  var overlay = document.getElementById('gameOverlay');
  var frame = document.getElementById('gameFrame');
  var bar = document.getElementById('overlayBar');
  var barTitle = document.getElementById('obarTitle');
  var loading = document.getElementById('overlayLoading');
  var loadingText = document.getElementById('overlayLoadingText');
  var closeBtn = document.getElementById('obarClose');
  var reloadBtn = document.getElementById('obarReload');
  var fsBtn = document.getElementById('obarFullscreen');
  var newtabBtn = document.getElementById('obarNewtab');

  var currentUrl = '';
  var currentName = '';
  var loadTimer = null;

  function openGame(url, name) {
    currentUrl = url;
    currentName = name || 'Game';
    barTitle.textContent = currentName;
    document.title = currentName + ' — Yumix Games';

    overlay.classList.add('active');
    loading.classList.remove('hidden');
    loadingText.textContent = 'Loading ' + currentName + '...';
    frame.src = 'about:blank';
    document.body.style.overflow = 'hidden';

    setTimeout(function () {
      frame.src = url;
      clearTimeout(loadTimer);
      loadTimer = setTimeout(function () {
        loading.classList.add('hidden');
        bar.classList.add('visible');
      }, 8000);
    }, 80);
  }

  function closeGame() {
    clearTimeout(loadTimer);
    overlay.classList.remove('active');
    bar.classList.remove('visible');
    loading.classList.add('hidden');
    frame.src = 'about:blank';
    document.body.style.overflow = '';
    document.title = 'Yumix Games';
    currentUrl = '';
    currentName = '';
  }

  frame.addEventListener('load', function () {
    var src = frame.getAttribute('src') || '';
    if (src === 'about:blank' || !src) return;
    clearTimeout(loadTimer);
    loading.classList.add('hidden');
    setTimeout(function () { bar.classList.add('visible'); }, 250);
  });

  closeBtn.addEventListener('click', closeGame);

  reloadBtn.addEventListener('click', function () {
    if (!currentUrl) return;
    var url = currentUrl;
    frame.src = 'about:blank';
    setTimeout(function () { frame.src = url; }, 80);
  });

  fsBtn.addEventListener('click', function () {
    if (!document.fullscreenElement) {
      var el = document.documentElement;
      if (el.requestFullscreen) el.requestFullscreen().catch(function () {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  });

  newtabBtn.addEventListener('click', function () {
    if (currentUrl) window.open(currentUrl, '_blank', 'noopener');
  });

  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') {
      if (document.fullscreenElement) document.exitFullscreen();
      else closeGame();
    }
  });

  if (grid) {
    grid.addEventListener('click', function (e) {
      var card = e.target.closest('.game-card');
      if (!card) return;
      e.preventDefault();
      e.stopPropagation();
      var url = card.getAttribute('href') || '';
      var title = card.querySelector('h3');
      var name = title ? title.textContent : 'Game';
      if (!url) return;
      openGame(url, name);
    }, true);
  }
})();