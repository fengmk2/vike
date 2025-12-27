import { telefunc } from 'telefunc/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from '@voidzero-dev/vite-plus'
import vike from 'vike/plugin'

export default defineConfig({
  plugins: [vike(), react(), telefunc()],
})
