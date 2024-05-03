import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    minify:false,
    cssMinify:false,
  },
  plugins: [vue(
        {
        template: {
          transformAssetUrls: {
            base: null,
            includeAbsolute: false,
          },
          compilerOptions: {
              // isCustomElement: (tag) => ['k-block'].includes(tag),
          }
        },
      }
  )],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, './src'),
      '~bootstrap': path.resolve(__dirname, '/node_modules/bootstrap'),
    },
  },
})
