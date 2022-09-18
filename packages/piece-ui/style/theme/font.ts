import { convertThemeMapToTokenMap, convertThemePxToRem, generateThemeToSize } from '../generate'

const fontSizeMap = {
  ...generateThemeToSize('pi-font', [12, 14, 16, 20, 24])
}

export const tokenFontSize = convertThemeMapToTokenMap(convertThemePxToRem(fontSizeMap))
