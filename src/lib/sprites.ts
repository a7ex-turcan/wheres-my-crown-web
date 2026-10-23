import data from '../data/sprites.json';

export type SpriteName = keyof typeof data.sprites;

interface Sprite {
  size: number[];
  palette: Record<string, string>;
  rows: string[];
}

export interface SpriteLayer {
  fill: string;
  d: string;
}

/**
 * Turns a sprite's text rows into one SVG path per palette colour, drawn as
 * runs of 1px-tall rectangles. `palette` overrides colours by palette key
 * (e.g. { p: '#4A90E2' } for a blue dress).
 */
export function spriteLayers(name: SpriteName, palette: Record<string, string> = {}) {
  const sprite: Sprite = data.sprites[name];
  const runs: Record<string, string[]> = {};
  sprite.rows.forEach((row, y) => {
    for (let x = 0; x < row.length; ) {
      const key = row[x];
      let n = 1;
      while (row[x + n] === key) n++;
      if (key !== '.') (runs[key] ??= []).push(`M${x} ${y}h${n}v1h-${n}z`);
      x += n;
    }
  });
  const layers: SpriteLayer[] = Object.keys(sprite.palette)
    .filter((key) => runs[key])
    .map((key) => ({ fill: palette[key] ?? sprite.palette[key], d: runs[key].join('') }));
  const [width, height] = sprite.size;
  return { width, height, layers };
}
