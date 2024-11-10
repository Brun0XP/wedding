<template>
  <div class="flex items-center gap-2">
    <RadioButton
      v-model="value"
      :inputId="`${name}-${inputValue}`"
      :name="`${name}-${inputValue}`"
      :value="inputValue"
      v-bind="$attrs"
    />
    <label v-if="label" :for="name">{{ label }}</label>
  </div>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate'

interface Props {
  name: string
  inputValue: string
  label?: string
}
const props = defineProps<Props>()

const { value, errorMessage } = useField<string>(() => props.name)
</script>
