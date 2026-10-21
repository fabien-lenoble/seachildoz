import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'github-pages-spa-fallback',
      apply: 'build',
      enforce: 'post',
      generateBundle(_options, bundle) {
        const index = bundle['index.html']
        if (!index || index.type !== 'asset') {
          throw new Error('Cannot generate the GitHub Pages fallback: index.html is missing')
        }
        this.emitFile({
          type: 'asset',
          fileName: '404.html',
          source: index.source
        })
      }
    }
  ],
  base: '/',
  build: {
    outDir: 'dist'
  }
})
