<template>
  <NavigationBar />
  <HeaderSection />
  <RouterView />
</template>

<script lang="ts" setup>
import NavigationBar from '@/components/NavigationBar.vue';
import HeaderSection from '@/components/HeaderSection.vue';
</script>
