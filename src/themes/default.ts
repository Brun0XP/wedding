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
    },
    forestGreen: {
      50: '#f2f5f3',
      100: '#e5ece7',
      200: '#c0d2c6',
      300: '#9ab7a4',
      400: '#759d83',
      500: '#546b57', // cor base
      600: '#4c6050',
      700: '#435548',
      800: '#3a4a40',
      900: '#313e37',
      950: '#29332f'
    },
    oliveGreen: {
      50: '#f4f6f3',
      100: '#e8ede6',
      200: '#c8d3c2',
      300: '#a7b99d',
      400: '#869f79',
      500: '#7a8e74', // cor base
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
  },
 
})

export default DefaultTheme
