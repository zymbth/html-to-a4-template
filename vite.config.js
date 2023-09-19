import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

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
      formats: ['es','umd'],
      fileName: (format) => `html2a4tmpl.${format}.js`
    }
  },
  server: {
    proxy: {
      '/pdf': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { '^/pdf': '' },
      },
      '/d3': {
        target: 'http://119.136.27.201:2503', //接口域名
        changeOrigin: true, //是否跨域
        // ws: true,                       //是否代理 websockets
        // secure: true,                   //是否https接口
        pathRewrite: {
          //路径重置
          '^/d3': '',
        },
      },
    },
  },
})