import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': '/src',
      components: '/src/components',
      pages: '/src/pages',
      styles: '/src/styles',
      utils: '/src/utils',
      assets: '/src/assets',
      hooks: '/src/hooks',
      contexts: '/src/contexts',
      animations: '/src/animations',}
    ,
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
