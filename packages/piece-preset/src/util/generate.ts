import { camelCase } from 'scule'

const SIZES = ['xs', 'sm', 'md', 'lg', 'xl']

// cover theme to css var
export function generateThemeToCssVar(prefixRegExp: RegExp, theme: Record<string, string | number>) {
  const themeMap: Record<string, string> = {}
  Object.entries(theme).forEach(([key]) => {
    Reflect.set(themeMap, camelCase(key.replace(prefixRegExp, '')), `var(${key})`)
  })
  return themeMap
}

// cover px to rem
export function generateThemePxToRem(theme: Record<string, any>) {
  const themeRemMap: Record<string, string> = {}
  Object.entries(theme).forEach(([key, value]) => {
    Reflect.set(themeRemMap, key, `${value / 16}rem`)
  })
  return themeRemMap
}

// generate theme from size
export function generateThemeToSize(prefix: string, sizes: number[]) {
  const sizeMap = {}
  SIZES.forEach((_, index) => {
    Reflect.set(sizeMap, `${prefix}-${SIZES[index]}`, sizes[index])
  })
  return sizeMap
}
