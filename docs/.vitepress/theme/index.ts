import theme from 'vitepress/theme'
import PieceUi from 'piece-ui'
import DemoBlock from '../components/demoBlock.vue'
import 'piece-ui/dist/style.css'
import 'uno.css'
import { pascalCase } from 'scule'

const components = [DemoBlock]

export default {
  ...theme,
  enhanceApp({ app }) {
    const examples = import.meta.globEager('../../example/**/*.vue')
    for (const path in examples) {
      const componentName = path.split('/').at(-1)?.split('.')[0]
      app.component(pascalCase(componentName), examples[path].default)
    }
    app.component('DemoBlock', DemoBlock)
    app.use(PieceUi)
  }
}
