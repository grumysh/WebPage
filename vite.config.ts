import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base relativa para que funcione igual en GitHub Pages (/WebPage/) o en un dominio propio
export default defineConfig({
  base: './',
  plugins: [react()],
});
