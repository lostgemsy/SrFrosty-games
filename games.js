/* =========================================================
   Yumix Games — catalog + renderer + iframe overlay
   Games folder is lowercase: games/<folder>/index.html
   ========================================================= */

(function () {
  'use strict';

  /* =========================================================
     GAME LIST
     ========================================================= */
  var games = [
    { folder: '1',                      image: '1.png' },
    { folder: '10-minutes-till-dawn',   image: '10-minutes-till-dawn.png' },
    { folder: '100ng',                  image: '100ng.png' },
    { folder: '1v1lol',                 image: '1v1.png' },
    { folder: '1v1space',               image: '1v1space.png' },
    { folder: '2048',                   image: '2048.png' },
    { folder: '2048-multitask',         image: '2048-multitask.png' },
    { folder: '9007199254740992',       image: '9007199254740992.png' },
    { folder: '99balls',                image: '99balls.png' },
    { folder: 'a-dance-of-fire-and-ice', image: 'a-dance-of-fire-and-ice.png' },
    { folder: 'achievementunlocked',    image: 'achievementunlocked.png' },
    { folder: 'adarkroom',              image: 'adarkroom.png' },
    { folder: 'adrenalinechallenge',    image: 'adrenalinechallenge.jpg' },
    { folder: 'adventure-drivers',      image: 'adventure-drivers.png' },
    { folder: 'ages-of-conflict',       image: 'ages-of-conflict.jpg' },
    { folder: 'alienhominid',           image: 'alienhominid.jpg' },
    { folder: 'align-4',                image: 'align-4.png' },
    { folder: 'amazing-rope-police',    image: 'amazing-rope-police.jpeg' },
    { folder: 'amidst-the-clouds',      image: 'amidst-the-clouds.png' },
    { folder: 'among-us',               image: 'among-us.png' },
    { folder: 'angelunder',             image: 'angelunder.png' },
    { folder: 'angry-sharks',           image: 'angry-sharks.png' },
    { folder: 'aquapark-slides',        image: 'aquapark-slides.png' },
    { folder: 'astray',                 image: 'astray.png' },
    { folder: 'avalanche',              image: 'avalanche.png' },
    { folder: 'awesometanks2',          image: 'awesometanks2.jpg' },
    { folder: 'backrooms',              image: 'backrooms.png' },
    { folder: 'backrooms-2d',           image: 'backrooms-2d.png' },
    { folder: 'backrooms2d',            image: 'backrooms-2d.png' },
    { folder: 'bacon-may-die',          image: 'bacon-may-die.png' },
    { folder: 'bad-ice-cream',          image: 'bad-ice-cream.jpg' },
    { folder: 'bad-ice-cream-2',        image: 'bad-ice-cream-2.jpg' },
    { folder: 'bad-ice-cream-3',        image: 'bad-ice-cream-3.jpg' },
    { folder: 'baldis-basics',          image: 'baldis-basics.png' },
    { folder: 'balldodge',              image: 'balldodge.png' },
    { folder: 'ballistic-chickens',     image: 'ballistic-chickens.png' },
    { folder: 'basket-random',          image: 'basket-random.png' },
    { folder: 'basketball-stars',       image: 'basketball-stars.png' },
    { folder: 'basketbros-io',          image: 'basketbros-io.png' },
    { folder: 'battleforgondor',        image: 'battleforgondor.JPG' },
    { folder: 'bigredbutton',           image: 'bigredbutton.png' },
    { folder: 'bitlife',                image: 'bit.png' },
    { folder: 'blacholesquare',         image: 'blacholesquare.png' },
    { folder: 'blackknight',            image: 'blackknight.png' },
    { folder: 'blockpost',              image: 'blockpost.jpg' },
    { folder: 'bloonstd',               image: 'bloonstd.jpg' },
    { folder: 'bloonstd2',              image: 'bloonstd2.png' },
    { folder: 'bloxors',                image: 'bloxors.png' },
    { folder: 'bntts',                  image: 'bntts.png' },
    { folder: 'bobtherobber2',          image: 'bobtherobber2.png' },
    { folder: 'bonkio',                 image: 'bonkio.png' },
    { folder: 'boxhead2play',           image: 'boxhead2play.jpg' },
    { folder: 'boxing-random',          image: 'boxing-random.jpg' },
    { folder: 'breakingthebank',        image: 'breakingthebank.png' },
    { folder: 'btd4',                   image: 'btd4.jpg' },
    { folder: 'btd5',                   image: 'btd5.png' },
    { folder: 'btts',                   image: 'btts.png' },
    { folder: 'burger-and-frights',     image: 'burger-and-frights.png' },
    { folder: 'bus and subway',         image: 'bus-and-subway.png' },
    { folder: 'cannon-basketball-4',    image: 'cannon-basketball-4.png' },
    { folder: 'canyondefense',          image: 'canyondefense.png' },
    { folder: 'cars-simulator',         image: 'cars-simulator.png' },
    { folder: 'cell-machine',           image: 'cell-machine.png' },
    { folder: 'champion-island',        image: 'champion-island.png' },
    { folder: 'championarcher',         image: 'championarcher.png' },
    { folder: 'checkers',               image: 'checkers.png' },
    { folder: 'chess',                  image: 'chess.png' },
    { folder: 'chill-radio',            image: 'chill-radio.png' },
    { folder: 'chrome-dino',            image: 'chrome-dino.png' },
    { folder: 'circlo',                 image: 'circlo.png' },
    { folder: 'classicube',             image: 'classicube.png' },
    { folder: 'cluster-rush',           image: 'cluster-rush.jpg' },
    { folder: 'cnpingpong',             image: 'cnpingpong.png' },
    { folder: 'connect3',               image: 'connect3.png' },
    { folder: 'cookie-clicker',         image: 'cookie.png' },
    { folder: 'core-ball',              image: 'core-ball.png' },
    { folder: 'craftmine',              image: 'craftmine.png' },
    { folder: 'creativekillchamber',    image: 'creativekillchamber.jpg' },
    { folder: 'crossyroad',             image: 'crossyroad.png' },
    { folder: 'csgo-clicker',           image: 'csgo.png' },
    { folder: 'ctr',                    image: 'ctr.png' },
    { folder: 'ctr-holiday',            image: 'ctr-holiday.png' },
    { folder: 'ctr-tr',                 image: 'ctr-tr.png' },
    { folder: 'cubefield',              image: 'cubefield.png' },
    { folder: 'cupcake2048',            image: 'cupcake2048.png' },
    { folder: 'dante',                  image: 'dante.png' },
    { folder: 'deal-or-no-deal',        image: 'deal-or-no-deal.jpg' },
    { folder: 'death-run-3d',           image: 'death.png' },
    { folder: 'deepest-sword',          image: 'deepest-sword.jpg' },
    { folder: 'defend-the-tank',        image: 'defend-the-tank.png' },
    { folder: 'doctor-acorn2',          image: 'doctor-acorn2.jpg' },
    { folder: 'dodge',                  image: 'dodge.png' },
    { folder: 'doge2048',               image: 'doge2048.png' },
    { folder: 'DogeMiner',              image: 'dogeminer.png' },
    { folder: 'Dogeminer2',             image: 'dogeminer2.jpg' },
    { folder: 'doodle-jump',            image: 'doodle-jump.png' },
    { folder: 'doom',                   image: 'doom.png' },
    { folder: 'DOOMORI',                image: 'doomori.png' },
    { folder: 'doublewires',            image: 'doublewires.png' },
    { folder: 'dragon-vs-bricks',       image: 'dragon-vs-bricks.jpg' },
    { folder: 'draw-the-hill',          image: 'draw-the-hill.png' },
    { folder: 'drift-boss',             image: 'drift.png' },
    { folder: 'drift-hunters',          image: 'hunt.png' },
    { folder: 'drive-mad',              image: 'drive.png' },
    { folder: 'ducklife1',              image: 'ducklife.png' },
    { folder: 'ducklife2',              image: 'ducklife2.png' },
    { folder: 'ducklife3',              image: 'ducklife3.png' },
    { folder: 'ducklife4',              image: 'ducklife4.jpg' },
    { folder: 'duke-nukem-2',           image: 'duke-nukem-2.jpg' },
    { folder: 'dumbwaystodie',          image: 'dumbwaystodie.png' },
    { folder: 'eaglerfaithful',         image: 'eaglerfaithful.png' },
    { folder: 'eaglerjp',               image: 'eaglerjp.png' },
    { folder: 'earntodie',              image: 'earntodie.png' },
    { folder: 'edge-surf',              image: 'edge-surf.png' },
    { folder: 'edgenotfound',           image: 'edgenotfound.png' },
    { folder: 'eel-slap',               image: 'eel-slap.png' },
    { folder: 'eggycar',                image: 'eggy-car.png' },
    { folder: 'elasticman',             image: 'elasticman.jpg' },
    { folder: 'endlesswar3',            image: 'endlesswar3.png' },
    { folder: 'escapingtheprison',      image: 'escapingtheprison.jpg' },
    { folder: 'evil-glitch',            image: 'evil-glitch.png' },
    { folder: 'evolution',              image: 'evolution.png' },
    { folder: 'exo',                    image: 'exo.jpg' },
    { folder: 'factoryballs',           image: 'factoryballs.png' },
    { folder: 'fairsquares',            image: 'fairsquares.png' },
    { folder: 'fake-virus',             image: 'fake-virus.png' },
    { folder: 'fancypantsadventures',   image: 'fancypantsadventures.png' },
    { folder: 'fantasy-dash',           image: 'fantasy-dash.png' },
    { folder: 'fireboywatergirlforesttemple', image: 'fireboywatergirlforesttemple.png' },
    { folder: 'flappy plane',           image: 'flappy-plane.png' },
    { folder: 'flappy-2048',            image: 'flappy-2048.png' },
    { folder: 'flappy-bird',            image: 'flappy-bird.png' },
    { folder: 'flappybird',             image: 'flappybird.png' },
    { folder: 'flashtetris',            image: 'flashtetris.png' },
    { folder: 'fleeingthecomplex',      image: 'fleeingthecomplex.png' },
    { folder: 'flippy-fish',            image: 'flippy-fish.png' },
    { folder: 'fnaw',                   image: 'fnaw.png' },
    { folder: 'fridaynightfunkin',      image: 'fridaynightfunkin.png' },
    { folder: 'froggys-battle',         image: 'froggys-battle.png' },
    { folder: 'fruitninja',             image: 'fruitninja.png' },
    { folder: 'frying-nemo',            image: 'frying-nemo.png' },
    { folder: 'fsucraft',               image: 'fsucraft.png' },
    { folder: 'fuclient',               image: 'fuclient.png' },
    { folder: 'gachalife',              image: 'gachalife.webp' },
    { folder: 'game-inside',            image: 'game-inside.png' },
    { folder: 'gdtd',                   image: 'gdtd.png' },
    { folder: 'gearsofbabies',          image: 'gearsofbabies.png' },
    { folder: 'generic-fishing-game',   image: 'generic-fishing-game.png' },
    { folder: 'geochallenge',           image: 'geochallenge.png' },
    { folder: 'geodash',                image: 'geodash.png' },
    { folder: 'geodashlite',            image: 'geodashlite.png' },
    { folder: 'geogeo',                 image: 'geogeo.png' },
    { folder: 'geojump',                image: 'geojump.png' },
    { folder: 'geoneondash',            image: 'geoneondash.png' },
    { folder: 'geops1',                 image: 'geops1.png' },
    { folder: 'georash',                image: 'georash.png' },
    { folder: 'georgeandtheprinter',    image: 'georgeandtheprinter.png' },
    { folder: 'geotrash',               image: 'geotrash.png' },
    { folder: 'getaway-shootout',       image: 'getaway-shootout.jpg' },
    { folder: 'gimme-the-airpod',       image: 'gimme-the-airpod.png' },
    { folder: 'glass-city',             image: 'glass-city.png' },
    { folder: 'gmonster',               image: 'gmonster.png' },
    { folder: 'go-ball',                image: 'go-ball.png' },
    { folder: 'goodnight',              image: 'goodnight.png' },
    { folder: 'goodnight-meowmie',      image: 'goodnight-meowmie.png' },
    { folder: 'google-feud',            image: 'google-feud.png' },
    { folder: 'google-snake',           image: 'google-snake.png' },
    { folder: 'gravity-soccer',         image: 'gravity-soccer.png' },
    { folder: 'greybox',                image: 'greybox.png' },
    { folder: 'grindcraft',             image: 'grindcraft.png' },
    { folder: 'hackertype',             image: 'hackertype.png' },
    { folder: 'handshakes',             image: 'handshakes.png' },
    { folder: 'happy-hop',              image: 'happy-hop.png' },
    { folder: 'happywheels',            image: 'happywheels.png' },
    { folder: 'hardware-tycoon',        image: 'hardware-tycoon.png' },
    { folder: 'hba',                    image: 'hba.JPG' },
    { folder: 'helicopter',             image: 'helicopter.png' },
    { folder: 'hellscaper',             image: 'hellscaper.png', entry: 'Hellscaper WebGL 4-19-23/index.html' },
    { folder: 'hexempire',              image: 'hexempire.jpg' },
    { folder: 'HexGL',                  image: 'hexgl.png' },
    { folder: 'hextris',                image: 'hextris.png' },
    { folder: 'highrisehop',            image: 'highrisehop.png' },
    { folder: 'hill-climb-racing',      image: 'hill-climb-racing.png' },
    { folder: 'hungry-lamu',            image: 'hungry-lamu.png' },
    { folder: 'iceagebaby',             image: 'iceagebaby.png' },
    { folder: 'iceagebaby2',            image: 'iceagebaby2.png' },
    { folder: 'idle-breakout',          image: 'idle.png' },
    { folder: 'idle-shark',             image: 'idle-shark.png' },
    { folder: 'idledice',               image: 'idledice.png' },
    { folder: 'idledices',              image: 'idledices.png' },
    { folder: 'impossiblequiz',         image: 'impossiblequiz.png' },
    { folder: 'interactivebuddy',       image: 'interactivebuddy.jpg' },
    { folder: 'invite-the-blackbird',   image: 'invite-the-blackbird.png' },
    { folder: 'jetpack-joyride',        image: 'jetpack-joyride.jpg' },
    { folder: 'just-fall',              image: 'just-fall.jpg' },
    { folder: 'just-one-boss',          image: 'just-one-boss.png' },
    { folder: 'kitchen-gun-game',       image: 'kitchen-gun-game.png' },
    { folder: 'kittencannon',           image: 'kittencannon.png' },
    { folder: 'knife-master',           image: 'knife-master.jpg' },
    { folder: 'krunker',                image: 'krunker.png' },
    { folder: 'learntofly',             image: 'learn.png' },
    { folder: 'learntofly2',            image: 'learntofly2.jpg' },
    { folder: 'legacyflashgames',       image: 'legacyflashgames.png', entry: 'sesame/games/abbys-sandbox-search/index.html' },
    { folder: 'level13',                image: 'level13.png' },
    { folder: 'ltf3',                   image: 'ltf3.png' },
    { folder: 'madalin-stunt-cars-2',   image: 'madalin-stunt-cars-2.jpg' },
    { folder: 'madalin-stunt-cars-3',   image: 'madalin-stunt-cars-3.png' },
    { folder: 'marvinspectrum',         image: 'marvinspectrum.png' },
    { folder: 'meme2048',               image: 'meme2048.png' },
    { folder: 'merge-round-racers',     image: 'merge-round-racers.png' },
    { folder: 'mindustry',              image: 'mindustry.png' },
    { folder: 'mineblocks',             image: 'mineblocks.png' },
    { folder: 'minecraft-15',           image: 'mine15.png' },
    { folder: 'minecraft-classic',      image: 'minecraft-classic.png' },
    { folder: 'minecraftbeta',          image: 'minecraftbeta.png' },
    { folder: 'minesweeper',            image: 'minesweeper.png', entry: 'beginner/index.html' },
    { folder: 'missiles',               image: 'missiles.png' },
    { folder: 'MonkeyMart',             image: 'monkey.png' },
    { folder: 'monster-tracks',         image: 'monster-tracks.jpg' },
    { folder: 'motox3m-pool',           image: 'motox3m-pool.jpg' },
    { folder: 'motox3m-spooky',         image: 'motox3m-spooky.jpeg' },
    { folder: 'motox3m-winter',         image: 'motox3m-winter.png' },
    { folder: 'motox3m2',               image: 'motox3m2.png' },
    { folder: 'my-rusty-submarine',     image: 'my-rusty-submarine.png' },
    { folder: 'n-gon',                  image: 'n-gon.png' },
    { folder: 'ninja',                  image: 'ninja.png' },
    { folder: 'ninjavsevilcorp',        image: 'ninjavsevilcorp.png' },
    { folder: 'noob-steve-parkour',     image: 'noob-steve-parkour.png' },
    { folder: 'ns-shaft',               image: 'ns-shaft.png' },
    { folder: 'nsresurgence',           image: 'nsresurgence.png' },
    { folder: 'OfflineParadise',        image: 'offlineparadise.jpeg' },
    { folder: 'om-bounce',              image: 'om-bounce.png' },
    { folder: 'osu!',                   image: 'osu.png' },
    { folder: 'papaspizzaria',          image: 'papaspizzaria.jpg' },
    { folder: 'particle-clicker',       image: 'particle-clicker.png' },
    { folder: 'pixel-gun-survival',     image: 'pixel-gun-survival.jpg' },
    { folder: 'planetlife',             image: 'planetlife.png' },
    { folder: 'poom',                   image: 'poom.png' },
    { folder: 'popcat-classic',         image: 'popcat-classic.png' },
    { folder: 'precision-client',       image: 'precision-client.png' },
    { folder: 'protektor',              image: 'protektor.jpg' },
    { folder: 'push-the-square',        image: 'push-the-square.png' },
    { folder: 'push-your-luck',         image: 'push-your-luck.png' },
    { folder: 'rabbit-samurai',         image: 'rabbit-samurai.png' },
    { folder: 'rabbit-samurai2',        image: 'rabbit-samurai2.png' },
    { folder: 'resent-client',          image: 'resent-client.png', entry: '1.8/index.html' },
    { folder: 'riddleschool',           image: 'riddle.png' },
    { folder: 'riddleschool2',          image: 'riddleschool2.png' },
    { folder: 'riddleschool3',          image: 'riddleschool3.png' },
    { folder: 'riddleschool4',          image: 'riddleschool4.png' },
    { folder: 'riddleschool5',          image: 'riddleschool5.png' },
    { folder: 'riddletransfer',         image: 'riddletransfer.png' },
    { folder: 'riddletransfer2',        image: 'riddletransfer2.png' },
    { folder: 'roblox',                 image: 'roblox.png' },
    { folder: 'roblox copy',            image: 'roblox-copy.png' },
    { folder: 'Rocket-League',          image: 'rocket.png' },
    { folder: 'rolling-forests',        image: 'rolling-forests.png' },
    { folder: 'rolly-vortex',           image: 'rolly-vortex.png' },
    { folder: 'rooftop-snipers',        image: 'rooftop-snipers.png' },
    { folder: 'roommate',               image: 'roommate.png', entry: '31/index.html' },
    { folder: 'Run 2',                  image: 'run-2.jpg' },
    { folder: 'run4bootleg',            image: 'run4bootleg.png' },
    { folder: 'runner',                 image: 'runner.png' },
    { folder: 'sand-game',              image: 'sand-game.PNG' },
    { folder: 'santy-is-home',          image: 'santy-is-home.png' },
    { folder: 'scooperia',              image: 'scooperia.png' },
    { folder: 'scratcharia',            image: 'scratcharia.png' },
    { folder: 'ShapeShootout',          image: 'shapeshootout.png' },
    { folder: 'shellshockers',          image: 'shellshockers.png' },
    { folder: 'shotinthedark',          image: 'shotinthedark.png' },
    { folder: 'shuttledeck',            image: 'shuttledeck.png' },
    { folder: 'sky-car-stunt',          image: 'sky-car-stunt.png' },
    { folder: 'sleepingbeauty',         image: 'sleepingbeauty.png' },
    { folder: 'slime-rush-td',          image: 'slime-rush-td.png' },
    { folder: 'slope',                  image: 'slope.jpeg' },
    { folder: 'slope-ball',             image: 'slope-ball.jpg' },
    { folder: 'smashkarts',             image: 'smashkarts.png' },
    { folder: 'smokingbarrels',         image: 'smokingbarrels.jpg' },
    { folder: 'snowbattle',             image: 'snowbattle.png' },
    { folder: 'snowrider3d',            image: 'snowrider3d.png' },
    { folder: 'soccer-random',          image: 'soccer-random.png' },
    { folder: 'soccer-skills',          image: 'soccer-skills.png' },
    { folder: 'soldier-legend',         image: 'soldier-legend.png' },
    { folder: 'solitaire',              image: 'solitaire.png' },
    { folder: 'sort-the-court',         image: 'sort-the-court.png' },
    { folder: 'soundboard',             image: 'soundboard.jpeg' },
    { folder: 'space-company',          image: 'space-company.png' },
    { folder: 'spacegarden',            image: 'spacegarden.png' },
    { folder: 'spelunky',               image: 'spelunky.png' },
    { folder: 'spinningrat',            image: 'spinningrat.jpg' },
    { folder: 'ssurferbotleg',          image: 'ssurferbotleg.png' },
    { folder: 'starve',                 image: 'starve.png' },
    { folder: 'station-141',            image: 'station-141.png' },
    { folder: 'stationmeltdown',        image: 'stationmeltdown.png', entry: 'Build/index.html' },
    { folder: 'stealingthediamond',     image: 'stealingthediamond.jpg' },
    { folder: 'stick-duel-battle',      image: 'stick-duel-battle.jpg' },
    { folder: 'stick-merge',            image: 'stick-merge.png' },
    { folder: 'stickman-boost',         image: 'stickman-boost.jpeg' },
    { folder: 'stickman-golf',          image: 'stickman-golf.png' },
    { folder: 'stickman-hook',          image: 'stickman.png' },
    { folder: 'Stickman-Survival',      image: 'stickman-survival.png' },
    { folder: 'stickwar',               image: 'stickwar.jpg' },
    { folder: 'stormthehouse2',         image: 'stormthehouse2.jpg' },
    { folder: 'subway-surfers-ny',      image: 'subway-surfers-ny.png' },
    { folder: 'superfowlist',           image: 'superfowlist.png' },
    { folder: 'superhot',               image: 'superhot.jpg' },
    { folder: 'surviv',                 image: 'surviv.png' },
    { folder: 'sushi-unroll',           image: 'sushi-unroll.png' },
    { folder: 'swerve',                 image: 'swerve.jpg' },
    { folder: 'tactical-weapon-pack-2', image: 'tactical-weapon-pack-2.png' },
    { folder: 'tacticalassasin2',       image: 'tacticalassasin2.png' },
    { folder: 'tanuki-sunset',          image: 'tanuki-sunset.png' },
    { folder: 'temple-run-2',           image: 'temple-run-2.webp' },
    { folder: 'the-final-earth-2',      image: 'the-final-earth-2.png' },
    { folder: 'the-hotel',              image: 'the-hotel.png' },
    { folder: 'thebattle',              image: 'thebattle.png' },
    { folder: 'theheist',               image: 'theheist.jpg' },
    { folder: 'there-is-no-game',       image: 'there-is-no-game.png' },
    { folder: 'thisistheonlylevel',     image: 'thisistheonlylevel.png' },
    { folder: 'throwrocks',             image: 'throwrocks.png' },
    { folder: 'tiny-fishing',           image: 'tiny.png' },
    { folder: 'tiny-islands',           image: 'tiny-islands.png' },
    { folder: 'tosstheturtle',          image: 'tosstheturtle.png' },
    { folder: 'townscaper',             image: 'townscaper.jpg' },
    { folder: 'Trimps',                 image: 'trimps.png' },
    { folder: 'tube-jumpers',           image: 'tube-jumpers.jpg' },
    { folder: 'tunnel-rush',            image: 'tunnel-rush.png' },
    { folder: 'tv-static',              image: 'tv-static.png' },
    { folder: 'twitch-tetris',          image: 'twitch-tetris.png' },
    { folder: 'veloce',                 image: 'veloce.png' },
    { folder: 'vex3',                   image: 'vex3.png' },
    { folder: 'vex4',                   image: 'vex4.png' },
    { folder: 'vex6',                   image: 'vex6.png' },
    { folder: 'vex7',                   image: 'vex7.png' },
    { folder: 'waterworks',             image: 'waterworks.png' },
    { folder: 'weavesilk',              image: 'weavesilk.png' },
    { folder: 'webcleaner',             image: 'webcleaner.png' },
    { folder: 'webgl-fluid-simulation', image: 'webgl-fluid-simulation.png' },
    { folder: 'webretro',               image: 'webretro.png', entry: 'info/index.html' },
    { folder: 'webxash',                image: 'webxash.png' },
    { folder: 'win-the-whitehouse',     image: 'win-the-whitehouse.png' },
    { folder: 'wolf2d',                 image: 'wolf2d.png' },
    { folder: 'wolf3d',                 image: 'wolf3d.png' },
    { folder: 'wordle',                 image: 'wordle.png' },
    { folder: 'worlds-hardest-game',    image: 'world.png' },
    { folder: 'worlds-hardest-game-2',  image: 'worlds-hardest-game-2.jpg' },
    { folder: 'wounded-summer-baby-edition', image: 'wounded-summer-baby-edition.png' },
    { folder: 'xx142-b2exe',            image: 'xx142-b2exe.png' },
    { folder: 'yohoho',                 image: 'yohoho.png' },
    { folder: 'yoshifabrication',       image: 'yoshifabrication.png' },
    { folder: 'you-are-bezos',          image: 'you-are-bezos.png' },
    { folder: 'zombs-royale',           image: 'zombs-royale.png' }
  ];

  /* =========================================================
     Helpers
     ========================================================= */
  function displayName(game) {
    if (game.name) return game.name;
    return String(game.folder)
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  // ⚠️ games folder is lowercase now
  function gameUrl(game) {
    var folder = String(game.folder).split('/').map(encodeURIComponent).join('/');
    var entry = String(game.entry || 'index.html').split('/').map(encodeURIComponent).join('/');
    return 'games/' + folder + '/' + entry;
  }

  function imageUrl(game) {
    if (!game.image) return '';
    if (/^https?:\/\//i.test(game.image)) return game.image;
    return 'images/' + game.image;
  }

  /* =========================================================
     Render grid
     ========================================================= */
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
        img.src = imageUrl(game);
        img.alt = '';
        img.loading = 'lazy';
        img.onerror = function () { this.style.visibility = 'hidden'; };

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

  /* =========================================================
     Iframe overlay
     ========================================================= */
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
    setTimeout(function () {
      bar.classList.add('visible');
    }, 250);
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
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        closeGame();
      }
    }
  });

  /* Intercept card clicks — open in iframe instead of navigating */
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