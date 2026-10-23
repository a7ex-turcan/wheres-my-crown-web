// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://princess.nutrx-labs.com',
  build: { inlineStylesheets: 'auto' },
  integrations: [sitemap()],
});
