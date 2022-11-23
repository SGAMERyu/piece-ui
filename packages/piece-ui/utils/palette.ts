export function palette(
  color: string,
  suffixes: Array<string | number> = [100, 200, 300, 400, 500, 600, 700, 800, 900]
) {
  const colorRange: {
    [x: number]: {
      initial: string
    }
  } = {}

  suffixes.forEach((range) => {
    Reflect.set(colorRange, range, {
      initial: `{colors.${color}.${range}}`
    })
  })

  return colorRange
}
