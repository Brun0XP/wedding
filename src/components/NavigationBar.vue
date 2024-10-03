<template>
  <nav class="flex items-center px-4 h-[4rem] bg-white shadow-5">
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
    <RouterLink class="ml-auto" to="/lista-presentes">
      <Button label="Presentear" rounded icon="pi pi-gift"></Button>
    </RouterLink>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

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
