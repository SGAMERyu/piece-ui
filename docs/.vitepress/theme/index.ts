import theme from 'vitepress/theme'
import PieceUi from 'piece-ui'
import * as PieceUiIcons from '@piece-ui/icon'
import DemoBlock from '../components/demoBlock.vue'
import DemoCode from '../components/demoCode.vue'
import 'piece-ui/dist/style.css'
import 'uno.css'
import { pascalCase } from 'scule'

export default {
  ...theme,
  enhanceApp({ app }) {
    const examples = import.meta.globEager('../../example/**/*.vue')
    for (const path in examples) {
      const componentName = path.split('/').at(-1)?.split('.')[0]
      app.component(pascalCase(componentName), examples[path].default)
    }
    for (const [key, component] of Object.entries(PieceUiIcons)) {
      app.component(key, component)
    }
    app.component('DemoBlock', DemoBlock)
    app.component('DemoCode', DemoCode)
    app.use(PieceUi)
  }
}
