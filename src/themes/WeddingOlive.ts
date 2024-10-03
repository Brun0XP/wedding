import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const WeddingOliveTheme = definePreset(Aura, {
  primitive: {
    oliveGreen: {
      50: '#f4f6f3',
      100: '#e8ede6',
      200: '#c8d3c2',
      300: '#a7b99d',
      400: '#869f79',
      500: '#7a8e74',
      600: '#6f8169',
      700: '#63735d',
      800: '#586652',
      900: '#4c5946',
      950: '#414d3b'
    }
  },
  semantic: {
    primary: {
      50: '{olive.green.50}',
      100: '{olive.green.100}',
      200: '{olive.green.200}',
      300: '{olive.green.300}',
      400: '{olive.green.400}',
      500: '{olive.green.500}',
      600: '{olive.green.600}',
      700: '{olive.green.700}',
      800: '{olive.green.800}',
      900: '{olive.green.900}',
      950: '{olive.green.950}'
    }
  }
})

export default WeddingOliveTheme
