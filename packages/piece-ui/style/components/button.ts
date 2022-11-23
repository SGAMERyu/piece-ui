import { generateThemeToSize } from '../generate'

export const tokenButtonSize = {
  btn: {
    ...generateThemeToSize([24, 28, 32, 36, 40])
  },
  'btn-padding': {
    ...generateThemeToSize([10, 12, 16, 20, 24])
  }
}

export const buttonUtils = {
  'btn-size': (value: any) => ({
    height: `{size.btn.${value}}`,
    fontSize: `{fontSizes.${value}}`,
    padding: `0px {size.btn-padding.xs}`
  })
}
