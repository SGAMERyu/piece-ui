import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Dts from 'vite-plugin-dts'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  plugins: [vue(), UnoCSS(), Dts(), DefineOptions()],
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'PieceUI'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
