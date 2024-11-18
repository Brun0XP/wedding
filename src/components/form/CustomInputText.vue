<template>
  <div class="flex flex-col gap-1">
    <DefineInput>
      <InputText :id="name" v-model="value" :invalid="!!errorMessage" v-bind="$attrs" />
    </DefineInput>
    <DefineIconInput>
      <IconField v-if="icon" iconPosition="left">
        <InputIcon :class="icon"></InputIcon>
        <ReuseInput />
      </IconField>
      <ReuseInput v-else />
    </DefineIconInput>

    <label v-if="label" :for="name" class="text-surface-700">{{ label }}</label>
    <ReuseIconInput />
    <Message v-if="errorMessage" severity="error" variant="simple" size="small">{{ errorMessage }}</Message>
  </div>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate'
import { createReusableTemplate } from '@vueuse/core'

interface Props {
  name: string
  label?: string
  icon?: string
}
const props = defineProps<Props>()

const [DefineInput, ReuseInput] = createReusableTemplate()
const [DefineIconInput, ReuseIconInput] = createReusableTemplate()

const { value, errorMessage } = useField<string>(() => props.name)
</script>
