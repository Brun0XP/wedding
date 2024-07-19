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
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }"
              ></div>
              <div class="flex flex-col sm:flex-row gap-4">
                <div class="flex-grow flex flex-col max-w-[20rem]">
                  <h2 class="text-lg hidden sm:block">{{ item.name }}</h2>
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
        </template>
        <template #empty>
          <div class="py-4">Teste</div>
        </template>
      </DataView>
    </div>
    <!-- <div class="gift-list mt-3">
      <Panel header="Meu carrinho">
        <template #header>
          <h2 class="m-0">Meu carrinho</h2>
        </template>
        <DataView :value="items" dataKey="cart">
          <template #list="slotProps">
            <div class="grid grid-nogutter">
              <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                <div
                  class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3"
                  :class="{ 'border-top-1 surface-border': index !== 0 }"
                >
                  <div class="w-10rem mx-auto md:mx-0 relative">
                    <img class="block xl:block mx-auto border-round w-full" :src="item.image" :alt="item.name" />
                    <Tag
                      :value="item.category.name"
                      severity="success"
                      class="absolute"
                      style="left: 4px; top: 4px"
                    ></Tag>
                  </div>
                  <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                    <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                      <div>
                        <span class="font-medium text-secondary text-sm">{{ item.categories.name }}</span>
                        <div class="text-lg font-medium text-900 mt-2">{{ item.description }}</div>
                      </div>
                      <div class="surface-100 p-1" style="border-radius: 30px">
                        <div
                          class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2"
                          style="
                            border-radius: 30px;
                            box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                          "
                        >
                          <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
                          <i class="pi pi-star-fill text-yellow-500"></i>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-column md:align-items-end gap-5">
                      <span class="text-xl font-semibold text-900">{{ formatCurrency(item.price) }}</span>
                      <div class="flex flex-row-reverse md:flex-row gap-2">
                        <Button icon="pi pi-trash" outlined severity="danger" @click="removeItem(item.id)"></Button>
                        <Button
                          icon="pi pi-shopping-cart"
                          label="Buy Now"
                          :disabled="item.inventoryStatus === 'OUTOFSTOCK'"
                          class="flex-auto md:flex-initial white-space-nowrap"
                        ></Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-top-1 surface-border p-3 w-full">
                <p class="text-right text-xl"><b>Total:</b> {{ formatCurrency(totalPrice) }}</p>
              </div>
            </div>
          </template>
        </DataView>

        <div class="flex flex-column sm:flex-row gap-3 mt-5 justify-content-center">
          <RouterLink to="/lista-presentes">
            <Button rounded severity="secondary" label="Adicionar mais items"></Button>
          </RouterLink>
          <Button rounded label="Realizar pagamento"></Button>
        </div>
      </Panel>
    </div> -->
  </ContentSection>
</template>

<script lang="ts" setup>
import { useFormatter } from '@/composables'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

import ContentSection from '@/components/ContentSection.vue'

const { formatCurrency } = useFormatter()
const { items, totalPrice } = storeToRefs(useCartStore())
const { removeItem } = useCartStore()
</script>

<style soped lang="scss">
.p-dataview-header {
  //   background: transparent;
  //   border: none;
  padding: 0 0 0.75rem 0;
}
// .p-dataview-content {
//   background: transparent;
// }

.p-dataview-footer {
  //   background: transparent;
  //   border: none;
  padding: 0.75rem 0;
}
</style>
