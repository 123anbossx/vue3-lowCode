import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
const pinia = createPinia()
import App from './App.vue'
const app = createApp(App)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')
