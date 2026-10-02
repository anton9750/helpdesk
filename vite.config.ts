import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // På GitHub Pages sætter workflowet VITE_BASE til /<repo-navn>/
  base: process.env.VITE_BASE ?? '/',
  server: { port: 5174 },
  plugins: [react()],
})
