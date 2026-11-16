import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://b2bsolutions.biz',
  integrations: [
    tailwind(),
    sitemap({
      // Pages whose canonical points to another site stay out of this sitemap.
      filter: (page) =>
        !/\/(privacy-policy|terms-of-service)$/.test(page) &&
        !page.endsWith('/blog/how-to-form-an-llc-in-washington-state'),
    }),
  ],
  trailingSlash: 'never',
  // Emit /about.html instead of /about/index.html so Netlify serves /about
  // directly instead of redirecting it to /about/ (which conflicts with the
  // no-slash canonical and sitemap URLs).
  build: { format: 'file' },
});
