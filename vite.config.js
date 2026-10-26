import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// La salida va a dist/public para coincidir con "outputDirectory" de vercel.json
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist/public', emptyOutDir: true },
})
