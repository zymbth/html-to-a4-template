import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'html2a4tmpl',
      fileName: 'index'
    },
    rollupOptions: {
      output: {
        assetFileNames: 'print.css'
      }
    }
  }
})