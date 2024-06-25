<template>
  <Sidebar
    v-model:visible="showSidebar"
    :modal="false"
    :dismissable="false"
    pt:root:class="layout-sidebar"
  >
    <template #container>
      <div class="flex flex-column h-full">
        <div
          class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0"
        >
          <span class="inline-flex align-items-center gap-2">
            <span class="font-semibold text-2xl text-primary">B & A</span>
          </span>
        </div>
        <AdminLayoutSidebarMenu />
        <div class="mt-auto">
          <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
          <a
            v-ripple
            class="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
          >
            <Avatar image="/imgs/carol_kerolayne.jpg" shape="circle" />
            <span class="font-bold">Ana Carolina</span>
          </a>
        </div>
      </div>
    </template>
  </Sidebar>
  <Button
    class="menu-item"
    icon="pi pi-bars"
    text
    @click="showSidebar = !showSidebar"
  />
</template>

<script lang="ts" setup>
import { useLayout } from '@/composables';

import AdminLayoutSidebarMenu from '@/layouts/admin/AdminLayoutSidebarMenu.vue';

const { showSidebar } = useLayout();
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
