import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const DefaultTheme = definePreset(Aura, {
  primitive: {
    weddingPink: {
      50: '#fdf2f4',
      100: '#fbe5ea',
      200: '#f6bccd',
      300: '#f094af',
      400: '#eb6b91',
      500: '#e2799b',
      600: '#db5773',
      700: '#d4344b',
      800: '#bd2f42',
      900: '#a52938',
      950: '#8e2230'
    }
  },
  semantic: {
    primary: {
      50: '{wedding.pink.50}',
      100: '{wedding.pink.100}',
      200: '{wedding.pink.200}',
      300: '{wedding.pink.300}',
      400: '{wedding.pink.400}',
      500: '{wedding.pink.500}',
      600: '{wedding.pink.600}',
      700: '{wedding.pink.700}',
      800: '{wedding.pink.800}',
      900: '{wedding.pink.900}',
      950: '{wedding.pink.950}'
    }
  }
})

export default DefaultTheme
