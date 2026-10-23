# wheres-my-crown-web

The marketing site for **Where's My Crown? — A Princess Maze Adventure**, a gentle 16-bit maze game for little kids on iPhone and iPad. It will live at [princess.nutrx-labs.com](https://princess.nutrx-labs.com).

Static site built with [Astro](https://astro.build). There's no backend, and the pages make no third-party requests: the fonts are self-hosted and the sprites are inline SVG.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/
```

Requires Node 22.12+. Astro is pinned to 7.3.x because 7.4 needs Node 22.23+.

## Pages

| URL | Source |
|---|---|
| `/` | `src/pages/index.astro`: hero, Nati's story, screenshots, features, helpers, for parents, download. |
| `/support` | `src/pages/support.astro`: contact card and FAQ. Keep the in-app paths in the answers in sync with the real app. |
| `/privacy` | `src/pages/privacy.astro`: a **draft**, with a visible banner. Fill in the brackets, pick one Advertising option, have it reviewed, then remove the banner. |

## Where things live

| Path | What |
|---|---|
| `src/data/sprites.json` | The game's sprites, copied from the game handover. Each sprite is rows of palette characters. |
| `src/components/Sprite.astro` | Draws a sprite from `sprites.json` as crisp inline SVG. `palette` swaps colours by key (the little sister's blue dress on the home page). |
| `src/styles/tokens.css` | Colours, fonts and widths. |
| `src/components/` | Header, footer, App Store button (placeholder), FAQ item. |
| `public/` | Favicon (the crown) and `robots.txt`. |
| `design/` | The original design handoff. See its README. |

## Placeholders still to fill

Search for `[` in `src/`: `[APP STORE BADGE]`, the three `[SCREENSHOT: …]` slots, `[SUPPORT EMAIL]`, `[CONFIRM AD DETAILS BEFORE LAUNCH]`, and the privacy policy's `[DATE]`, `[LEGAL NAME OF DEVELOPER]`, `[POSTAL ADDRESS]`, ad network details, `[PERIOD]`, the read-aloud wording and the website note. Also still to add: an Open Graph image and Apple's Smart App Banner meta tag once the App Store ID exists.
