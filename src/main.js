import { createApp } from 'vue'
import './styles/index.css'
import i18n from './vue-i18n'
import App from './App.vue'

const app = createApp(App)
app.use(i18n)
app.mount('#app')
