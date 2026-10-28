import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// Sitio estático; solo /api/auth y /api/callback (login de Decap CMS) corren como funciones en Vercel.
export default defineConfig({
  site: 'https://websinole.vercel.app',
  adapter: vercel(),
  vite: { plugins: [tailwindcss()] },
});
