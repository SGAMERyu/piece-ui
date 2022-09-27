import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { presetAttributify, presetTypography, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  plugins: [
    DefineOptions(),
    Unocss({
      presets: [
        presetUno({
          attributifyPseudo: true
        }),
        presetAttributify(),

        presetTypography()
      ],
      transformers: [transformerVariantGroup(), transformerDirectives()]
    })
  ] as any
})
