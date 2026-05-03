import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    hmr: {
      port: 5173, // match your dev server port
    },
    watch: {
      usePolling: true, // This tells Vite to manually check for file changes instead of relying on the OS
    },
  },
});
