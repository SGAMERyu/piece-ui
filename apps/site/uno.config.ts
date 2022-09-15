import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import { presetPiece } from '@piece-ui/preset'

export default defineConfig({
  presets: [presetPiece(), presetAttributify(), presetIcons(), presetUno()]
})
