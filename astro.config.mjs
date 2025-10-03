// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import clerk from '@clerk/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  
  integrations: [
    clerk()
  ],
  
  // CRÍTICO: Clerk necesita SSR
  output: 'server',
  
  // Adapter para Node (necesario para SSR)
  adapter: undefined // Astro lo detecta automáticamente en dev
});