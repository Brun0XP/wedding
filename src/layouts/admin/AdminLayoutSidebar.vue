<template>
  <Button class="menu-item" icon="pi pi-bars" text @click="showSidebar = !showSidebar" />
</template>

<script lang="ts" setup>
import { useLayout } from '@/composables'

// import AdminLayoutSidebarMenu from '@/layouts/admin/AdminLayoutSidebarMenu.vue';

const { showSidebar } = useLayout()
</script>

<style lang="scss">
.menu-item {
  color: white;
}

.layout-sidebar {
  top: 4rem;
  padding-bottom: 4rem;
  border: none;
}
</style>
