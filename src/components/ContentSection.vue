<template>
  <div class="py-10 flex flex-col items-center px-4" :class="`background-${variant}`">
    <div
      class="w-[120px] h-[35px]"
      :style="{
        backgroundImage: `url(/imgs/floral-rose.svg)`
      }"
    ></div>
    <h2 v-if="title" class="text-gray-600 uppercase text-xl font-bold my-8">{{ title }}</h2>
    <div class="max-w-[940px] text-justify" :style="{ marginTop: title ? '0' : '2rem' }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  variant: 'primary' | 'secondary'
  title?: string
}
defineProps<Props>()
</script>

<style lang="scss" scoped>
.background-primary {
  background-color: #fff;
}
.background-secondary {
  background-color: var(--p-primary-50);
}
</style>
