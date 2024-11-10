<template>
  <Dialog
    :header="header"
    :visible="visible"
    modal
    @update:visible="$emit('update:visible', false)"
    :closable="false"
    class="mx-3 max-w-[24rem]"
  >
    <div class="w-full flex flex-col items-center gap-4 text-green-700">
      <i class="pi pi-check-circle text-6xl"></i>
      <p class="">
        {{ message }}
      </p>
      <Button icon="pi pi-home" label="Voltar para tela inicial" @click="$emit('update:visible', false)"></Button>
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
</script>
