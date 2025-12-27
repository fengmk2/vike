import vikeSolid from 'vike-solid/vite'
import vike from 'vike/plugin'
import type { UserConfig } from '@voidzero-dev/vite-plus'

export default {
  plugins: [vike(), vikeSolid()],
} satisfies UserConfig
