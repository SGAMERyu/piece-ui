import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PieceUi from 'piece-ui'
import 'piece-ui/dist/style.css'
import * as PieceUiIcons from '@piece-ui/icon'
import 'uno.css'

const app = createApp(App)
for (const [key, component] of Object.entries(PieceUiIcons)) {
  app.component(key, component)
}
app.use(PieceUi).mount('#app')
