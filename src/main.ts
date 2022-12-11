import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './style.css'
import Footer from '@/components/Footer.vue'
import 'primeicons/primeicons.css'
import { createPinia } from 'pinia'
import NavBar from './views/NavBar.vue'
import PrimeVue from 'primevue/config'
import { MotionPlugin } from '@vueuse/motion'
import Fieldset from 'primevue/fieldset'
import CUM from '@/components/UnderMaintenance.vue'

const app = createApp(App)
app.component('Footer', Footer)
app.component('NavBar', NavBar)
app.component('Fieldset', Fieldset)
app.component('ComponentUM', CUM)
app.use(router)
app.use(MotionPlugin)
app.use(createPinia())
app.use(PrimeVue, { ripple: true })
app.mount('#app')
