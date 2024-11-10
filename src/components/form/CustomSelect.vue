<template>
  <div class="flex flex-col gap-1">
    <label :for="name" class="text-surface-700">{{ label }}</label>
    <Select :id="name" v-model="value" :invalid="!!errorMessage" v-bind="$attrs" />
    <Message v-if="errorMessage" severity="error" variant="simple" size="small">{{ errorMessage }}</Message>
  </div>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate'

interface Props {
  name: string
  label?: string
}
const props = defineProps<Props>()

const { value, errorMessage } = useField<string>(() => props.name)
</script>
