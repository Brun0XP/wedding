<template>
  <LiveCountdown />
  <ContentSection variant="primary" title="O casal" />
  <ContentSection variant="secondary" title="Galeria" />
  <ContentSection variant="primary" title="Cerimônia" />
  <ContentSection variant="secondary" title="Recepção" />
</template>

<script lang="ts" setup>
import LiveCountdown from '@/components/LiveCountdown.vue';
import ContentSection from '@/components/ContentSection.vue';
</script>

<style soped lang="scss"></style>
