import { defineConfig } from 'vite'
import { resolve } from 'path'
import { copyFileSync, existsSync } from 'fs'
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

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyIndexTo404(resolve(__dirname, '..'))],
  build: {
    outDir: resolve(__dirname, '..'),
    emptyOutDir: false,
  },
})
