<template>
  <nav class="flex align-items-center px-4 h-4rem bg-white">
    <ul class="hidden md:flex list-none p-0 m-0 gap-1">
      <li v-for="link in links">
        <Button class="link-button" :label="link.label" rounded text></Button>
      </li>
    </ul>
    <RouterLink class="ml-auto" to="/lista-presentes">
      <Button
        class="gift-button"
        label="Presentear"
        rounded
        icon="pi pi-gift"
      ></Button>
    </RouterLink>
  </nav>
</template>

<script lang="ts" setup>
const links = [
  {
    label: 'Home',
    sectionId: 'home'
  },
  {
    label: 'O casal',
    sectionId: 'about'
  },
  {
    label: 'Galeria',
    sectionId: 'galery'
  },
  {
    label: 'Cerimônia',
    sectionId: 'ceremony'
  },
  {
    label: 'Recepção',
    sectionId: 'reception'
  }
];
</script>

<style lang="scss" scoped>
.link-button {
  color: #e2799b;
  &:hover {
    color: darken(#e2799b, 10);
  }
}
.gift-button {
  background-color: #e2799b;
  border: 1px solid #e2799b;
  &:hover {
    background-color: darken(#e2799b, 10);
  }
}
</style>
