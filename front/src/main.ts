import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

import '@/assets/styles/index.scss'
import { Theme } from './theme'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)
app.use(PrimeVue, {
  theme: {
    preset: Theme,
    darkModeSelector: false,
  },
})

app.mount('#app')
