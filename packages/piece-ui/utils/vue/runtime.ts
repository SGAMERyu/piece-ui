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
