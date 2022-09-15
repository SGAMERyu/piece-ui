import { generateThemePxToRem, generateThemeToCssVar, generateThemeToSize } from '../util'

const prefixRegExp = /--pi-btn-/g

const buttonSizeMap = {
  // size
  ...generateThemeToSize('--pi-btn', [24, 28, 32, 36, 40]),
  // padding
  ...generateThemeToSize('--pi-btn-padding', [24, 28, 32, 36, 40]),
}

export const buttonSize = generateThemePxToRem(buttonSizeMap)

export const themeButtonSize = generateThemeToCssVar(prefixRegExp, buttonSize)
