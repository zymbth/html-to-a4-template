import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'pagingUtil',
      fileName: 'paging-util'
    },
    rollupOptions: {
      output: {
        assetFileNames: 'print.css'
      }
    }
  }
})
