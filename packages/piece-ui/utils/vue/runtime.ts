export function addDynamicClass(prefixName: string) {
  return function (name: string, state: boolean | undefined) {
    return state ? `${prefixName}--${name}` : ''
  }
}
