<template>
  <nav class="navbar">
    <AdminLayoutSidebar />
  </nav>
</template>

<script lang="ts" setup>
import AdminLayoutSidebar from '@/layouts/admin/AdminLayoutSidebar.vue';
</script>

<style lang="scss" scoped>
.navbar {
  height: 4rem;
  background-color: #e2799b;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.menu-button {
  color: white;
}
</style>
