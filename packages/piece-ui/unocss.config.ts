import { presetPiece } from '@piece-ui/preset'
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [presetAttributify(), presetIcons(), presetUno(), presetPiece()],
  transformers: [transformerVariantGroup()],
  safelist: [
    ['xs', 'sm', 'md', 'lg'].map((s) => [
      `o-button-${s}`,
      `o-avatar-${s}`,
      `o-avatar-group-${s}`,
      `o-card-${s}`,
      `o-checkbox-${s}`
    ])
  ].flat(2) as string[]
})
