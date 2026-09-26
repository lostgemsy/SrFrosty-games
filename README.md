# Farius Games

A monochrome, animated unblocked-games site with a live poll and a
site-wide announcement system, ready to deploy on Vercel.

## About the game list

This now uses your real `games.js` — I dropped it in exactly as you
sent it, untouched. I counted it directly: it defines **352 games**
(not 286 — looks like the list has grown since you last counted, or
286 was just an estimate; either way, 352 is what's actually in the
file). One thing worth double-checking on your end: your script reads
games from a folder called **`Games`** (capital G), not `games` —
I renamed the folder in this zip to match. Vercel's servers are
case-sensitive (unlike Windows/Mac by default), so if your real folder
is lowercase this would silently 404 every game in production even
though it worked fine locally.

To wire up your real content:
1. Copy your real `Games/` folder (all 352 game folders) into this
   project at the root, replacing the placeholder one.
2. Copy your real `images/` folder in the same way.

Nothing else needs to change — `games.js` builds the whole grid itself
(image fallback, folder encoding, the special `entry:` overrides for
games like `hellscaper`, `minesweeper`, `roommate`, etc.), and
`js/main.js` just adds search on top of what it renders.

## What's in here

```
index.html              main page: search, poll, games grid
css/style.css           the whole monochrome theme + animations
js/main.js              boots poll + announcement, adds search
js/poll.js              fetches/votes on the homepage poll
js/announcement.js      shows the fullscreen announcement + countdown
games.js                your real game list, as given, untouched
Games/, images/         your game files and thumbnails (drop your real ones in)
owner/index.html        poll admin — served at /OwnerPolls
admin/index.html        announcement admin — served at /AdminAnnouncements
api/polls.js            poll GET/vote/create endpoint
api/announcements.js    announcement GET/create/clear endpoint
api/_store.js           shared storage (Vercel KV, see below)
api/_auth.js            checks the admin password on writes
vercel.json             maps /OwnerPolls and /AdminAnnouncements to their pages
```

## How the games grid works

This is entirely your own `games.js` logic, unchanged: each game is a
plain link to `Games/<folder>/index.html` (or its `entry:` override),
so clicking a card just navigates to the game directly. The image
guesser tries `images/<slugified-folder>.<ext>` across several
extensions, then a couple of fallback filenames inside the game's own
folder, and hides the image entirely if none of those load. The card
title is auto-generated from the folder name (dashes/underscores
become spaces, each word capitalized) — there's no separate "display
name" field, so a title like `a-dance-of-fire-and-ice` becomes "A
Dance Of Fire And Ice".

There's no category filter in this version — your `games.js` doesn't
carry genre/category data for any entry, so there was nothing to
filter by. Search-by-name is there instead. If you want categories
later, that means hand-tagging each game (or a chunk of them) with a
category and I can wire the filter back in.

## The poll

- `/api/polls` (GET) returns whatever poll is currently live.
- The homepage shows the question and options; voting posts to the
  same endpoint and immediately reveals the correct answer (marked
  with ✓) along with the live vote percentages.
- A visitor's browser remembers (via `localStorage`) that they already
  voted on a given poll, so reloading the page won't let them vote
  twice or re-hide the answer.
- You manage polls at **`/OwnerPolls`** — enter your admin password,
  write a question, add options, mark which one is correct, publish.
  Publishing a new poll replaces whatever was live before.

## The announcement

- You manage it at **`/AdminAnnouncements`** — write the message, set
  how many seconds it should stay on everyone's screen, publish.
- Every visitor's browser checks every 15 seconds for a new
  announcement, so it can pop up without anyone refreshing.
- It shows fullscreen with a thin countdown bar and disappears on its
  own once the time's up (or immediately if you hit "Clear now" in the
  admin page). A visitor who dismisses it won't see the same one again
  in that browser tab session.

## Setting up storage (important)

Polls and announcements need to be visible to **every visitor**, not
just the browser that created them — that requires a real shared
database, not just this Node process's memory. This project is wired
for **Vercel KV** (a free Redis database on Vercel's Hobby plan):

1. In your Vercel project, go to **Storage → Create Database → KV**.
2. Connect it to this project. Vercel will automatically add the
   `KV_REST_API_URL` and `KV_REST_API_TOKEN` environment variables —
   you don't need to type them in yourself.
3. Redeploy.

Without a KV database attached, the site still runs (using in-memory
storage) but poll votes and announcements may not reliably show up for
other visitors or survive between requests — fine for testing locally,
not for real use.

## Setting the admin password

In your Vercel project settings, add an environment variable:

```
ADMIN_PASSWORD=<pick something only you know>
```

This is what protects the actual publish actions on `/OwnerPolls` and
`/AdminAnnouncements` — so even if someone finds those URLs, they
can't post anything without the password. Redeploy after adding it.

## Deploying

```bash
npm install
vercel deploy        # or just connect the repo in the Vercel dashboard
```

Vercel picks up `/api/*.js` as serverless functions automatically —
no extra config needed beyond the two things above.

## Notes / things you may want to change

- The admin routes are protected by a password, but the URLs
  themselves aren't hidden from anyone who guesses them — keep
  `/OwnerPolls` and `/AdminAnnouncements` to yourself.
- The theme is pure grayscale on purpose — correct/incorrect poll
  answers are shown with weight and a ✓/✕ glyph rather than color, to
  stay on-brief. If you'd rather it use color anywhere, that's a quick
  change in `css/style.css`.
- Light/dark: it currently follows the visitor's system theme
  automatically (still monochrome either way).
