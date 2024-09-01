<template>
  <ContentSection variant="secondary" title="Lista de presentes (novos itens serão adicionados)">
    <DataView :value="gifts" layout="grid" data-key="gifts">
      <template #header>
        <div class="flex justify-end">
          <RouterLink to="/carrinho">
            <Button
              icon="pi pi-shopping-cart"
              :label="cartItemCount ? `${cartItemCount} item(s) no carrinho` : 'Carrinho vazio'"
              :disabled="!cartItemCount"
            ></Button>
          </RouterLink>
        </div>
      </template>
      <template #grid="slotProps">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <template v-for="item in slotProps.items">
            <div
              v-if="!isInCart(item.id) && item.price"
              class="p-6 border border-surface-200 bg-surface-0 rounded-xl flex flex-col h-full"
            >
              <div
                class="aspect-square w-[12rem] mx-auto"
                :style="{
                  backgroundImage: `url(${item.image ? item.image : 'imgs/placeholder.svg'})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }"
              ></div>
              <div class="pt-6 flex-grow">
                <span class="font-medium text-surface-500 text-sm">{{ item.name }}</span>
                <div class="text-lg font-medium mt-1">{{ item.description }}</div>
              </div>
              <div class="flex flex-col gap-6 mt-6">
                <span class="text-2xl font-semibold">{{ formatCurrency(item.price) }}</span>
                <div class="flex gap-2">
                  <Button
                    icon="pi pi-gift"
                    label="Presentear"
                    class="flex-auto whitespace-nowrap"
                    @click="addToCart(item)"
                  ></Button>
                  <Button icon="pi pi-heart" outlined></Button>
                </div>
              </div>
            </div>
          </template>
        </div>
      </template>
      <template #empty>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div
            v-for="i in 3"
            :key="i"
            class="p-6 border border-surface-200 bg-surface-0 rounded-xl flex flex-col h-full"
          >
            <Skeleton width="12rem" height="12rem" class="mx-auto" />

            <div class="pt-6 flex-grow">
              <Skeleton width="8rem" height="19px" />
              <Skeleton width="255px" height="26px" class="mt-1" />
              <Skeleton width="255px" height="26px" class="mt-1" />
            </div>
            <div class="flex flex-col gap-6 mt-6">
              <Skeleton width="255px" height="32px" class="w-full" />
              <div class="flex gap-2">
                <Button icon="pi pi-gift" label="Presentear" class="flex-auto whitespace-nowrap" disabled></Button>
                <Button icon="pi pi-heart" outlined disabled></Button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </ContentSection>
  <AddedCartModal v-model:visible="modalAddedCartVisible"></AddedCartModal>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useFormatter } from '@/composables'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import axios from '@/plugins/axios'

import ContentSection from '@/components/ContentSection.vue'
import AddedCartModal from '@/components/modal/AddedCartModal.vue'

const { formatCurrency } = useFormatter()
const { cartItemCount } = storeToRefs(useCartStore())
const { addItem, isInCart } = useCartStore()
const modalAddedCartVisible = ref(false)

const gifts = ref()
onMounted(async () => {
  axios.get('/product').then((response) => {
    gifts.value = response.data
  })
})

const addToCart = (gift: any) => {
  addItem(gift)
  modalAddedCartVisible.value = true
}
</script>

<style soped lang="scss">
.p-dataview-header {
  background: transparent;
  border: none;
  padding-right: 0;
}
.p-dataview-content {
  background: transparent;
}
</style>
