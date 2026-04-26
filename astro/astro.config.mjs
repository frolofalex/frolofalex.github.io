import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { copyFileSync, existsSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(__dirname, '..')

// Copy index.html → 404.html for GitHub Pages SPA fallback on unknown routes
const copyIndexTo404 = {
  name: 'copy-index-to-404',
  hooks: {
    'astro:build:done'() {
      const src = resolve(outDir, 'index.html')
      const dest = resolve(outDir, '404.html')
      if (existsSync(src)) copyFileSync(src, dest)
    },
  },
}

export default defineConfig({
  integrations: [react(), copyIndexTo404],
  output: 'static',
  outDir,
  build: {
    format: 'directory',
    assets: '_astro',
  },
  vite: {
    build: {
      emptyOutDir: false,
    },
  },
})
