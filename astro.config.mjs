import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://b2bsolutions.biz',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !/\/(privacy-policy|terms-of-service)$/.test(page),
    }),
  ],
  trailingSlash: 'never',
  // Emit /about.html instead of /about/index.html so Netlify serves /about
  // directly instead of redirecting it to /about/ (which conflicts with the
  // no-slash canonical and sitemap URLs).
  build: { format: 'file' },
});
