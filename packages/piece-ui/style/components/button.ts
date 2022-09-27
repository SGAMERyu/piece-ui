import { generateThemeToSize } from '../generate'

export const tokenButtonSize = {
  btn: {
    ...generateThemeToSize([24, 28, 32, 36, 40])
  },
  'btn-padding': {
    ...generateThemeToSize([10, 12, 16, 20, 24])
  }
}
