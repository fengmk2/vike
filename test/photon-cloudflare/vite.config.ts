import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { defineConfig } from '@voidzero-dev/vite-plus'

export default defineConfig({
  plugins: [react(), vike()],
})
