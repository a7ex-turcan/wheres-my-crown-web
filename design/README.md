# Design handoff

From `wheres-my-crown-handover-v5.zip` (2026-10-23), the `website/` part of the game handover.

`static/` holds the three pages as the designer delivered them: plain HTML with inline styles and fonts from Google Fonts. They're the reference for look and copy; the site in `src/` is the Astro port of them. Serve the folder (for example `python3 -m http.server -d design/static`) to compare side by side.

The port differs from the reference in a few small, deliberate ways:

- Sprites are generated from `src/data/sprites.json` instead of pasted SVG paths. The output paths are identical.
- Fonts are self-hosted (Fontsource), not loaded from Google Fonts.
- On cream backgrounds, links use `#5B3FD6` on every page. The home page used `#7A5AF0`, which is below 4.5:1 contrast on cream.
- The footer year is filled in at build time.
- The bob animation stops when the visitor prefers reduced motion.
