import { convertThemePxToRem, generateThemeToSize, convertThemeMapToTokenMap } from '../generate'

const buttonSizeMap = {
  // size
  ...generateThemeToSize('pi-btn', [24, 28, 32, 36, 40]),
  // padding
  ...generateThemeToSize('pi-btn-padding', [24, 28, 32, 36, 40])
}

export const tokenButtonSize = convertThemeMapToTokenMap(convertThemePxToRem(buttonSizeMap))
