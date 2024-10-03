<template>
  <nav class="flex items-center px-4 h-[4rem] bg-white shadow-5">
    <ul class="flex list-none p-0 m-0 gap-2">
      <li v-for="link in links">
        <RouterLink :to="link.to || '/'">
          <Button :label="link.label" text></Button>
        </RouterLink>
      </li>
    </ul>
    <RouterLink class="ml-auto" to="/lista-presentes">
      <Button label="Presentear" rounded icon="pi pi-gift"></Button>
    </RouterLink>
  </nav>
</template>

<script lang="ts" setup>
const links = [
  {
    label: 'Home',
    sectionId: 'home',
    to: '/'
  }
  // {
  //   label: 'O casal',
  //   sectionId: 'about'
  // },
  // {
  //   label: 'Galeria',
  //   sectionId: 'galery'
  // },
  // {
  //   label: 'Cerimônia',
  //   sectionId: 'ceremony'
  // },
  // {
  //   label: 'Recepção',
  //   sectionId: 'reception'
  // }
]
</script>
