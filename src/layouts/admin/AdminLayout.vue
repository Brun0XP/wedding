<template>
  <div class="flex flex-column h-screen">
    <AdminLayoutNavbar />
    <div
      class="flex-grow-1 bg-gray-50 overflow-y-auto transition-ease-out transition-duration-300"
      :class="{ 'sidebar-open': showSidebar }"
    >
      <div class="p-3">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLayout } from '@/composables';

import AdminLayoutNavbar from '@/layouts/admin/AdminLayoutNavbar.vue';

const { showSidebar } = useLayout();
</script>

<style lang="scss" scoped>
.sidebar-open {
  margin-left: 320px;
}
</style>
