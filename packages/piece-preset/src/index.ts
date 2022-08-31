import type { Preset } from 'unocss'

export function presetPiece(): Preset {
  return {
    name: '@piece-ui/preset',
    theme: {
      colors: {
        primary: '#21a4fc'
      }
    },
    shortcuts: {
      'pi-btn': 'px-2.5 h-6 text-xs shadow-xs'
    }
  }
}
