// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import clerk from '@clerk/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), // ✅ Tailwind debe ir aquí, no en vite.plugins
    clerk(),
    react()
  ],

  // CRÍTICO: Clerk necesita SSR
  output: 'server',

  // Adapter para Node (necesario para SSR)
  adapter: undefined // Astro lo detecta automáticamente en dev
});