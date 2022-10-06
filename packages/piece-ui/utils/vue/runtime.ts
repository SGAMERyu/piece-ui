export function addDynamicClass(prefixName: string) {
  return {
    e(name: string, state: boolean | undefined) {
      return state ? `${prefixName}-${name}` : ''
    },
    m(name: string, state: boolean | undefined) {
      return state ? `${prefixName}--${name}` : ''
    }
  }
}

export function addVariantClass(className: string, classProps: unknown) {
  return classProps ? className : null
}

export function addCssVarStyle(token: string, value: string) {
  return `var(--${token}-pi-${value})`
}
