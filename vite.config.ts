import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      // 生成类型声明文件
      insertTypesEntry: true,
      include: ['src/**/*.d.ts', 'src/**/*.ts'],
      outDir: 'dist'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
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
