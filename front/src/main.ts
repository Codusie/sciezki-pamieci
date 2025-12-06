import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import PrimeVue from 'primevue/config'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import '@/assets/styles/index.scss'
import 'primeicons/primeicons.css'
import 'leaflet/dist/leaflet.css'
import { Theme } from './theme'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(VueQueryPlugin)
app.use(PrimeVue, {
  theme: {
    preset: Theme,
    darkModeSelector: false,
  },
})

app.mount('#app')
