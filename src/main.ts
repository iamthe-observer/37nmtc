import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './style.css'
import Footer from '@/components/Footer.vue'

const app = createApp(App)
app.component('Footer', Footer)
app.use(router)
app.mount('#app')
