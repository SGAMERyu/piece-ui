import { defineSetupVue3 } from '@histoire/plugin-vue'

import './dist/style.css'
import * as PieceUiIcons from '@piece-ui/icon'

export const setupVue3 = defineSetupVue3(({ app }) => {
  for (const [key, component] of Object.entries(PieceUiIcons)) {
    app.component(key, component)
  }
})
