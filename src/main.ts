import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import PrimeVue from 'primevue/config'
import DialogService from 'primevue/dialogservice'
import WeddingOlive from '@/themes/WeddingOlive'
import router from '@/router'

import '@/assets/css/styles.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: WeddingOlive,
    options: {
      darkModeSelector: 'none',
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      }
    }
  }
})
app.use(DialogService)

app.mount('#app')
