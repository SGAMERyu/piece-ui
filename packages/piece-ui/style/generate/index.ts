const SIZES = ['xs', 'sm', 'md', 'lg', 'xl']

export function generateThemeToSize(sizes: number[]) {
  const sizeMap: Record<string, { value: string }> = {}
  SIZES.forEach((_, index) => {
    Reflect.set(sizeMap, `${SIZES[index]}`, { value: `${sizes[index] / 16}rem` })
  })
  return sizeMap
}
