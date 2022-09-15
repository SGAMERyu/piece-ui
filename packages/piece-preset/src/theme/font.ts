import { generateThemeToCssVar, generateThemePxToRem, generateThemeToSize } from '../util'

const prefixRegExp = /--pi-text-/g

const fontSize: Record<string, number> = {
  ...generateThemeToSize('--pi-text', [12, 14, 16, 18, 20])
}

export const fonts = generateThemePxToRem(fontSize)

export const themeFonts = generateThemeToCssVar(prefixRegExp, fonts)
