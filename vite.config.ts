import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [React()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173,      // Specify the port you want to use
  },
});
