import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'html2a4tmpl',
      fileName: 'html2a4tmpl'
    },
    rollupOptions: {
      output: {
        assetFileNames: 'print.css'
      }
    }
  }
})