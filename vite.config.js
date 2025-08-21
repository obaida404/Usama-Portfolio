import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Usama-Portfolio/',  // 👈 correct base for GitHub Pages
})
