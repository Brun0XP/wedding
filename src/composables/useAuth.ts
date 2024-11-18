import { ref } from 'vue'

import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import axios from '@/plugins/axios'

interface User {
  email?: string
  roles: string[]
  username: string
}

interface LoginRequestBody {
  email: string
  password: string
}

const user = ref<User | null>(null)

export default function () {
  const { accessToken } = storeToRefs(useAuthStore())
  const router = useRouter()
  const toast = useToast()

  const login = (body: LoginRequestBody) => {
    axios.post('auth/login', body).then((response) => {
      if (response.status === 401) {
        toast.add({
          severity: 'error',
          summary: 'Falha ao realizar login',
          detail: 'Usuário ou senha invalidos!',
          life: 6000
        })
        return
      }
      accessToken.value = response.data.token
      fetchUser()
      router.push('/')
      toast.add({
        severity: 'success',
        summary: 'Sucesso!',
        detail: 'Login realizado com sucesso!',
        life: 6000
      })
    })
  }

  const logout = () => {
    accessToken.value = ''
    user.value = null
  }

  const fetchUser = () => {
    if (!accessToken.value) return
    axios.get('auth/session').then((response) => {
      user.value = response.data
    })
  }

  return {
    login,
    logout,
    fetchUser,
    user
  }
}