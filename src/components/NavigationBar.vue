<template>
  <nav class="flex items-center h-[4rem] px-4 sm:px-0 bg-white shadow-5 max-w-[940px] w-full mx-auto">
    <Button
      text
      icon="pi pi-bars"
      class="sm:hidden"
      aria-haspopup="true"
      aria-controls="overlay_menu"
      @click="menu.toggle($event)"
    ></Button>
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
      <template #item="{ item, props }">
        <a v-ripple class="flex items-center text-primary-500" v-bind="props.action">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
          <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
          >
            {{ item.shortcut }}
          </span>
        </a>
      </template>
    </Menu>
    <ul class="list-none p-0 m-0 gap-2 hidden sm:flex">
      <li v-for="item in items">
        <Button :label="item.label" text @click="item.command"></Button>
      </li>
    </ul>

    <ButtonGroup class="ml-auto flex">
      <Button label="Presentear" rounded icon="pi pi-gift" @click="router.push('/lista-presentes')"></Button>

      <Button
        v-if="cartItemCount > 0"
        rounded
        icon="pi pi-shopping-cart"
        :badge="`${cartItemCount}`"
        badgeSeverity="primary"
        outlined
        @click="router.push('/carrinho')"
      ></Button>
    </ButtonGroup>
    {{ user }}
    <Button v-if="user" class="ml-1" rounded icon="pi pi-sign-out" outlined @click="logout"></Button>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables'

import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const { cartItemCount } = storeToRefs(useCartStore())
const { user, logout } = useAuth()

const router = useRouter()
const menu = ref()

const items = [
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      goToSection('/')
    }
  },
  {
    label: 'O casal',
    icon: 'pi pi-users',
    command: () => {
      goToSection('/', 'casal')
    }
  },
  {
    label: 'Cerimônia',
    icon: 'pi pi-bell',
    command: () => {
      goToSection('/', 'cerimonia')
    }
  },
  {
    label: 'Recepção',
    icon: 'pi pi-envelope',
    command: () => {
      goToSection('/', 'recepcao')
    }
  },
  {
    label: 'Confirmar Presença',
    icon: 'pi pi-check',
    command: () => {
      router.push('/rsvp')
    }
  }
]

const goToSection = (url: string, sectionId?: string) => {
  router.push(url)
  setTimeout(() => {
    if (!sectionId) return
    const sectionElement = document.getElementById(sectionId)
    if (sectionElement) sectionElement.scrollIntoView({ behavior: 'smooth' })
  }, 1000)
}
</script>
