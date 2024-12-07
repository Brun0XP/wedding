<template>
  <RouterView />
  <Toast />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useAuth } from '@/composables'

const { fetchUser } = useAuth()
onMounted(() => {
  fetchUser()
})
</script>
