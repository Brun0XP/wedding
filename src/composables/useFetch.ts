import { createFetch } from '@vueuse/core'

const useFetch = createFetch({
  baseUrl: process.env.VITE_API_URL,
  fetchOptions: {
    mode: 'cors'
  }
})

export default useFetch
