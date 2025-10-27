import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/veridia-hiring-platform/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
    allowedHosts: ['.vercel.run'],
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173
    }
  }
})
