import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://arshid.tech',
  output: 'static',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fa',
        locales: {
          fa: 'fa-IR',
          en: 'en-US',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
