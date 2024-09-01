<template>
  <Dialog
    header="Detalhes do produto"
    :visible="visible"
    modal
    @update:visible="$emit('update:visible', false)"
    :closable="false"
    class="mx-3 max-w-[24rem]"
  >
    <div
      class="aspect-square w-[12rem] mx-auto"
      :style="{
        backgroundImage: `url(${product.image ? product.image : 'imgs/placeholder.svg'})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }"
    ></div>
    <div class="pt-6 flex-grow">
      <span class="font-medium text-surface-500 text-sm">{{ product.name }}</span>
      <div class="text-lg font-medium mt-1">{{ product.description }}</div>
    </div>
    <div class="flex flex-col gap-6 mt-6">
      <span class="text-2xl font-semibold">{{ formatCurrency(product.price) }}</span>
      <div class="flex gap-2">
        <Button
          class="w-full"
          icon="pi pi-trash"
          severity="danger"
          outlined
          label="Remover"
          @click="removeItemAndUpdateVisible"
        ></Button>
        <Button class="w-full" icon="pi pi-times" label="Fechar" @click="$emit('update:visible', false)"></Button>
      </div>
    </div>
  </Dialog>
</template>

<script lang="ts" setup>
import { useCartStore } from '@/stores/cart'
import { useFormatter } from '@/composables'

const { removeItem } = useCartStore()
const { formatCurrency } = useFormatter()

interface Props {
  visible: boolean
  product: any
}
const props = defineProps<Props>()
const emits = defineEmits(['update:visible'])

const removeItemAndUpdateVisible = () => {
  removeItem(props.product.id)
  emits('update:visible', false)
}
</script>
