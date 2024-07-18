import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

import PrimeVue from 'primevue/config'
import DefaultTheme from '@/themes/default'
// import StyleClass from 'primevue/styleclass'

import '@/assets/scss/core.scss'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: DefaultTheme,
    options: {
      darkModeSelector: 'none',
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      }
    }
  },
  ripple: true
})

// app.directive('styleclass', StyleClass)

app.mount('#app')
