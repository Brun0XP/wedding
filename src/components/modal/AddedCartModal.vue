<template>
  <Dialog
    header="Item adicionado ao carrinho."
    :visible="visible"
    modal
    @update:visible="$emit('update:visible', false)"
    :closable="false"
    class="mx-3 max-w-[24rem]"
  >
    <div
      class="aspect-square w-[12rem] mx-auto"
      :style="{
        backgroundImage: `url(${lastItem.image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }"
    ></div>
    <div class="pt-6 flex-grow">
      <span class="font-medium text-surface-500 text-sm">{{ lastItem.name }}</span>
      <div class="text-lg font-medium mt-1">{{ lastItem.description }}</div>
    </div>
    <div class="flex flex-col gap-6 mt-6">
      <span class="text-2xl font-semibold">{{ formatCurrency(lastItem.price) }}</span>
      <div class="flex flex-col gap-2">
        <Button
          icon="pi pi-plus"
          severity="secondary"
          label="Adicionar mais items"
          @click="$emit('update:visible', false)"
        ></Button>
        <RouterLink to="/carrinho">
          <Button icon="pi pi-shopping-cart" class="w-full" label="Visualizar carrinho"></Button>
        </RouterLink>
        <!-- <Button icon="pi pi-heart" outlined></Button> -->
      </div>
    </div>
  </Dialog>
</template>

<script lang="ts" setup>
import { useCartStore } from '@/stores/cart'
import { useFormatter } from '@/composables'
import { storeToRefs } from 'pinia'

const { lastItem } = storeToRefs(useCartStore())
const { formatCurrency } = useFormatter()

interface Props {
  visible: boolean
}
defineProps<Props>()
</script>
