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
| `/privacy` | `src/pages/privacy.astro`: the app's privacy policy (it collects nothing; no ads). It matches `content/legal/privacy-policy.md` in the game's repo, and the app's grown-ups screen and the App Store listing link here; change both together. |

## Where things live

| Path | What |
|---|---|
| `src/data/sprites.json` | The game's sprites, copied from the game's `Packages/CrownKit/Sources/GameScene/Resources/sprites.json`. Each sprite is rows of palette characters. |
| `public/screens/` | iPad screenshots from the game (iPad Pro 13-inch Simulator, halved to 1376×1032 JPEG): "Take a peek" shows what's on the App Store (1.1); `jump-*.jpg` are jump mode, shown as coming soon until 2.0 is out. |
| `public/art/` | The game's generated art: `night.jpg` (the title backdrop, behind the hero and the download call) and `cast.jpg` (the App Store header). `public/og-image.jpg` is the header cropped to 1200×630 for link previews. |
| `public/app-store-badge.svg` | Apple's "Download on the App Store" badge (black, US-UK), used as supplied. |
| `src/components/Sprite.astro` | Draws a sprite from `sprites.json` as crisp inline SVG. `palette` swaps colours by key (the little sister's blue dress on the home page). |
| `src/styles/tokens.css` | Colours, fonts and widths. |
| `src/components/` | Header, footer, App Store button (placeholder), FAQ item. |
| `public/` | Favicon (the crown) and `robots.txt`. |
| `design/` | The original design handoff. See its README. |

## Deploys

GitHub Pages, via `.github/workflows/deploy.yml`: on every push to `main`, and on demand from the Actions tab. The custom domain is set in the repo's Pages settings (and in `public/CNAME`). DNS lives in Cloudflare: `princess` is a DNS-only CNAME to `a7ex-turcan.github.io`.

## When 2.0 ships

The home page's "Jump mode" section (`#jump`, `jumpShots`/`jumpPoints` in `src/pages/index.astro`) says it's coming
soon and not on the App Store yet. Once 2.0 is live, drop the COMING SOON tag and the note, and fold jump mode into the
hero copy and the features.
