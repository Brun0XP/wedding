import { useSessionStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

const useAuthStore = defineStore('auth', () => {
  const accessToken = useSessionStorage('accessToken', '')

  return { accessToken }
})

export default useAuthStore
