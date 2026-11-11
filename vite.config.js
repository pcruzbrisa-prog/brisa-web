import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Para GitHub Pages en https://pcruzbrisa-prog.github.io/brisa-web/
// Si algún día se usa dominio propio, cambiar base a '/'
export default defineConfig({
  plugins: [react()],
  base: '/brisa-web/',
})
