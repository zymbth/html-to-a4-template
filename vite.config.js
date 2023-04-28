import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'html2a4tmpl',
      formats: ['es','umd'],
      fileName: (format) => `html2a4tmpl.${format}.js`
    },
    rollupOptions: {
      output: {
        assetFileNames: 'print.css'
      }
    }
  }
})