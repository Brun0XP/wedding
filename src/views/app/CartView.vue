<template>
  <ContentSection variant="secondary" title="Lista de presentes">
    <div class="p-4 border border-surface-200 bg-surface-0 rounded-lg" v-if="items.length > 0">
      <DataView :value="items" data-key="cart" class="">
        <template #header>
          <h1 class="text-xl font-semibold">Carrinho de compras</h1>
        </template>
        <template #list="slotProps">
          <div class="grid grid-cols-1">
            <div
              v-for="(item, index) in slotProps.items"
              class="py-4 flex gap-4"
              :class="{ 'border-t border-surface-200': index !== 0 }"
            >
              <div
                class="aspect-square min-w-[6rem] sm:min-w-[8rem] border border-surface-200 rounded-md"
                :style="{
                  backgroundImage: `url(${item.image ? item.image : 'imgs/placeholder.svg'})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }"
              ></div>
              <div class="flex flex-col flex-grow sm:flex-row gap-4">
                <div class="flex-grow flex flex-col max-w-[20rem]">
                  <h2 class="text-lg">{{ item.name }}</h2>
                  <p class="text-xs sm:text-sm flex-grow">{{ item.description }}</p>
                  <div class="hidden sm:block">
                    <Button
                      icon="pi pi-trash"
                      severity="secondary"
                      text
                      label="Remover"
                      size="small"
                      @click="removeItem(item.id)"
                    ></Button>
                  </div>
                </div>
                <div class="flex items-center sm:items-start">
                  <div class="flex-grow block sm:hidden">
                    <Button
                      icon="pi pi-trash"
                      severity="danger"
                      text
                      size="small"
                      @click="removeItem(item.id)"
                    ></Button>
                  </div>
                  <span class="font-semibold">
                    {{ formatCurrency(item.price) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="flex justify-between text-gray-400 mb-1">
            <p>Subtotal</p>
            <p>{{ formatCurrency(totalPrice) }}</p>
          </div>
          <div class="flex justify-between text-gray-400 mb-3">
            <p>Frete</p>
            <p>{{ formatCurrency(0) }}</p>
          </div>
          <div class="border-t border-t-gray-200 pt-3">
            <div class="font-semibold text-lg flex justify-between">
              <p>Total</p>
              <p>{{ formatCurrency(totalPrice) }}</p>
            </div>
          </div>
          <div class="w-full flex justify-end mt-3">
            <Button class="w-full sm:w-auto" label="Realizar pagamento" @click="createCheckout"></Button>
          </div>
        </template>
      </DataView>
    </div>
  </ContentSection>
</template>

<script lang="ts" setup>
import { useFormatter, useMercadopago, useFetch } from '@/composables'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

import ContentSection from '@/components/ContentSection.vue'

const { formatCurrency } = useFormatter()
const { items, totalPrice } = storeToRefs(useCartStore())
const { removeItem } = useCartStore()
const { openCheckout } = useMercadopago()

const createCheckout = () => {
  useFetch('checkout/create')
    .post({ products_id: items.value.map((item) => item.id) })
    .json()
    .then(({ data }) => {
      openCheckout(data.value.mercadopago_preference_id)
    })
}
</script>

<style soped lang="scss">
.p-dataview-header {
  padding: 0 0 0.75rem 0;
}

.p-dataview-footer {
  padding: 0.75rem 0 0 0;
}
</style>
