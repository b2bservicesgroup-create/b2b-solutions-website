import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://b2bsolutions.biz',
  integrations: [tailwind(), sitemap()],
  trailingSlash: 'never',
});
