import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { TESTButton } from 'piece-ui'
import 'uno.css'

const app = createApp(App)
app.use(TESTButton).mount('#app')
