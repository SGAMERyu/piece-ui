import { defineSetupVue3 } from '@histoire/plugin-vue'

import './dist/style.css'
import * as PieceUiIcons from '@piece-ui/icon'
import { plugin as Pinceau } from 'pinceau/runtime'

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(Pinceau)
  for (const [key, component] of Object.entries(PieceUiIcons)) {
    app.component(key, component)
  }
})
