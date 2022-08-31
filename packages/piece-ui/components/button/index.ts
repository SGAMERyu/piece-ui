import PiButton from './src/button.vue'

PiButton.install = function (app: any) {
  app.component(PiButton.name, PiButton)
}

export const TESTButton = PiButton
export default PiButton
export * from './src/button.vue'
