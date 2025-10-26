import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/veridia-hiring-platform/',
  server: {
    port: 5173,
    host: '0.0.0.0',
    allowedHosts: ['.vercel.run'],
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173  // Match the server port
    }
  }
})