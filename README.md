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
| `public/screens/` | iPad screenshots from the game for "Take a peek"; `public/og-image.jpg` is the iPhone title screen for link previews. |
| `src/components/Sprite.astro` | Draws a sprite from `sprites.json` as crisp inline SVG. `palette` swaps colours by key (the little sister's blue dress on the home page). |
| `src/styles/tokens.css` | Colours, fonts and widths. |
| `src/components/` | Header, footer, App Store button (placeholder), FAQ item. |
| `public/` | Favicon (the crown) and `robots.txt`. |
| `design/` | The original design handoff. See its README. |

## Deploys

GitHub Pages, via `.github/workflows/deploy.yml`: on every push to `main`, and on demand from the Actions tab. The custom domain is set in the repo's Pages settings (and in `public/CNAME`). DNS lives in Cloudflare: `princess` is a DNS-only CNAME to `a7ex-turcan.github.io`.

## Still to do

- Swap the App Store button's text for Apple's official "Download on the App Store" badge (saved into `public/`). The button already links to the listing, `https://apps.apple.com/app/id6825225682`, which works once the app is live.
