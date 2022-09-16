const SIZES = ['xs', 'sm', 'md', 'lg', 'xl']

export function convertThemeMapToTokenMap(theme: Record<string, string>) {
  const tokenMap: Record<string, { value: string }> = {}
  Object.entries(theme).forEach(([key, value]) => {
    Reflect.set(tokenMap, key, { value })
  })
  return tokenMap
}

// cover px to rem
export function convertThemePxToRem(theme: Record<string, any>) {
  const themeRemMap: Record<string, string> = {}
  Object.entries(theme).forEach(([key, value]) => {
    Reflect.set(themeRemMap, key, `${value / 16}rem`)
  })
  return themeRemMap
}

export function generateThemeToSize(prefix: string, sizes: number[]) {
  const sizeMap = {}
  SIZES.forEach((_, index) => {
    Reflect.set(sizeMap, `${prefix}-${SIZES[index]}`, sizes[index])
  })
  return sizeMap
}
