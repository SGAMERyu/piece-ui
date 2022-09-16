import { resolve, join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Dts from 'vite-plugin-dts'
import DefineOptions from 'unplugin-vue-define-options/vite'
import Pinceau from 'pinceau/vite'

export default defineConfig({
  plugins: [
    vue(),
    Dts(),
    DefineOptions(),
    Pinceau({
      configOrPaths: join(__dirname, 'style'),
      configFileName: 'tokens.config'
    })
  ],
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
