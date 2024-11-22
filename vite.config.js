import * as path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: 'src/lib/html2a4tmpl.js',
      name: 'html2a4tmpl',
      formats: ['es', 'umd'],
      fileName: format => `html2a4tmpl.${format}.js`
    }
  }
})
