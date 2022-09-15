import PiButton from './src/button.vue'

PiButton.install = function (app: any) {
  app.component(PiButton.name, PiButton)
}

export * from './src/button.vue'
export { default as PiButton } from './src/button.vue'
