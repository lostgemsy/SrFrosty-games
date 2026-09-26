# Farius Games

A Vercel-ready monochrome game library built around a root-level `games/` folder and `images/` folder.

## Important catalog detail

The supplied `games.js` contains **352 actual game objects** (the extra `slope` seen by a simple text count came from the instructional comment). The generated `games.js` preserves all 352 unique entries, including custom `entry` paths.

## Folder layout

```text
/
├── index.html
├── game.html
├── games.js
├── app.js
├── player.js
├── styles.css
├── package.json
├── vercel.json
├── /games/              <-- put your 352 game folders here
├── /images/             <-- put the game thumbnails here
├── /api/
├── /OwnerPolls/
└── /AdminAnnouncements/
```

Do **not** put `games` or `images` inside another folder. Keep them at the root exactly as shown.

## Why the games load correctly

The library does not open a bare game folder. A click goes to `game.html?game=...`, and the player resolves the selected catalog entry to:

`/games/<game-folder>/<entry>`

If no custom `entry` exists, it uses `/games/<game-folder>/index.html`. Each game's page remains inside an iframe, so its relative JavaScript, CSS, images, audio, and other assets resolve relative to the actual game directory.

## Vercel

1. Copy your existing `games/` and `images/` folders into this project root.
2. Push the project to GitHub.
3. Import it into Vercel.
4. Build command: `npm run build`
5. Output directory: `.`

No giant game files need to be sent to this ZIP; the ZIP is the site structure. Keep your existing game assets in the Codespace/repository.

## Owner polls and announcements

The pages are:

- `/OwnerPolls`
- `/AdminAnnouncements`

For shared persistence on Vercel, create an Upstash Redis/Vercel KV-compatible store and set:

- `ADMIN_PASSWORD`
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

The owner forms send the password as a server-side checked header. The public site can read the active poll/announcement without exposing the password.

Without Redis environment variables, the API falls back to temporary in-memory storage, which is useful for local testing but is **not persistent across Vercel serverless instances**.
