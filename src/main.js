import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import store from "./store"

const app = createApp(App)

registerPlugins(app)
app.use(store)
app.mount('#app')
