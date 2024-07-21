<template>
  <div class="overflow-y-auto">
    <ul class="list-none p-3 m-0">
      <li v-for="item in sidebarItems">
        <RouterLink
          :to="item.to"
          class="no-underline flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
        >
          <i class="mr-2" :class="item.icon"></i>
          <span class="font-medium">{{ item.label }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import sidebarItems from '@/data/sidebar-menu.json'
</script>
