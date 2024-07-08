<template>
  <div class="py-6 flex flex-column" :class="`background-${variant}`">
    <img class="mx-auto" src="/imgs/floral-rose.svg" alt="" />
    <h2 v-if="title" class="title uppercase text-xl mx-auto mt-0 my-6">{{ title }}</h2>
    <div class="content" :class="{ 'mt-6': !title }">
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
  background-color: #fff3f4;
}

.title {
  color: #5d758d;
}

.content {
  max-width: 940px;
  margin: 0 auto;
  text-align: justify;
}
</style>
