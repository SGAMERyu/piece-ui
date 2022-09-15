import { presetPiece } from '@piece-ui/preset'
import { defineConfig, presetUno } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'

export default defineConfig({
  presets: [presetUno(), presetPiece()],
  transformers: [transformerDirective()]
})
