import { convertThemePxToRem, generateThemeToSize, convertThemeMapToTokenMap } from '../generate'

const buttonSizeMap = {
  // size
  ...generateThemeToSize('pi-btn', [24, 28, 32, 36, 40]),
  // padding
  ...generateThemeToSize('pi-btn-padding', [10, 12, 16, 20, 24])
}

export const tokenButtonSize = convertThemeMapToTokenMap(convertThemePxToRem(buttonSizeMap))
