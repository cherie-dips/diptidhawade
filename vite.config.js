import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: https://cherie-dips.github.io/diptidhawade/
export default defineConfig({
  base: '/diptidhawade/',
  plugins: [react()],
})