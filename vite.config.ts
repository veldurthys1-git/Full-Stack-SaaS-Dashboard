import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Full-Stack-SaaS-Dashboard/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
