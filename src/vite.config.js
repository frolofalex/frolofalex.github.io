import { defineConfig } from 'vite'
import { resolve } from 'path'
import { copyFileSync, existsSync, rmSync } from 'fs'
import react from '@vitejs/plugin-react-swc'

const copyIndexTo404 = targetDir => ({
  name: 'copy-index-to-404',
  closeBundle() {
    const indexPath = resolve(targetDir, 'index.html')
    const notFoundPath = resolve(targetDir, '404.html')

    if (existsSync(indexPath)) {
      copyFileSync(indexPath, notFoundPath)
    }
  },
})

const cleanAssetsDir = targetDir => ({
  name: 'clean-assets-dir',
  buildStart() {
    const assetsPath = resolve(targetDir, 'assets')
    if (existsSync(assetsPath)) {
      rmSync(assetsPath, { recursive: true, force: true })
    }
  },
})

// https://vite.dev/config/
const buildOutputDir = resolve(__dirname, '..')

export default defineConfig({
  plugins: [react(), cleanAssetsDir(buildOutputDir), copyIndexTo404(buildOutputDir)],
  build: {
    outDir: buildOutputDir,
    emptyOutDir: false,
  },
})
