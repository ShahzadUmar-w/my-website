import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-website/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '/my-website/assets/index-D-Ohovbc.js',
        '/my-website/assets/index-fNCE5DMw.css'
      ],
    },
  },
});
