<template>
  <Dialog
    :header="header"
    :visible="visible"
    modal
    @update:visible="$emit('update:visible', false)"
    :closable="false"
    class="mx-3 max-w-[24rem]"
  >
    <div class="w-full flex flex-col items-center gap-4 text-red-700">
      <i class="pi pi-info-circle text-6xl"></i>
      <p class="">
        {{ message }}
      </p>
      <Button icon="pi pi-home" label="Voltar para tela inicial" @click="onSubmit"></Button>
    </div>
  </Dialog>
</template>

<script lang="ts" setup>
interface Props {
  visible: boolean
  header: string
  message: string
}
defineProps<Props>()

const emits = defineEmits(['update:visible', 'close'])

const onSubmit = () => {
  emits('update:visible', false)
  emits('close')
}
</script>
