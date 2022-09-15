import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { PiButton } from 'piece-ui'
import 'piece-ui/dist/style.css'
import 'uno.css'

const app = createApp(App)
app.use(PiButton as any).mount('#app')
