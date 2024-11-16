<template>
  <ContentSection variant="secondary" class="flex-grow">
    <div class="max-w-[30rem] mx-auto">
      <div>
        <div>
          <h1 class="text-surface-500 uppercase text-md">PRESENTEAR <br />ANA CAROLINA & BRUNO</h1>
          <h2 class="uppercase text-3xl font-semibold">{{ formatCurrency(totalPrice) }}</h2>
        </div>
        <div class="flex flex-col my-6">
          <div
            v-for="item in items"
            class="flex items-center gap-4 hover:cursor-pointer hover:bg-surface-100 p-2 rounded-lg"
            @click="openProductDetail(item)"
          >
            <div class="bg-white p-1 rounded-lg">
              <div
                class="aspect-square min-w-[3rem] sm:min-w-[4rem]"
                :style="{
                  backgroundImage: `url(${item.image ? item.image : 'imgs/placeholder.svg'})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }"
              ></div>
            </div>
            <div class="flex flex-col flex-grow sm:flex-row gap-4">
              <div class="flex-grow flex flex-col">
                <div class="flex justify-between">
                  <h2 class="text-md sm:text-lg font-semibold">{{ item.name }}</h2>
                  <span class="text-md sm:text-lg font-semibold">{{ formatCurrency(item.price) }}</span>
                </div>
                <p class="text-xs sm:text-sm text-surface-500">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="separator flex items-center text-center text-sm my-4 text-surface-500">Pagar com Mercado Pago</div>

      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-1 col-span-2 sm:col-span-1">
          <label for="username" class="text-xs sm:text-sm text-surface-700">Nome</label>
          <InputText
            id="username"
            class="text-sm"
            v-model="form.firstname"
            aria-describedby="username-help"
            placeholder="Digite seu nome"
          />
        </div>

        <div class="flex flex-col gap-1 col-span-2 sm:col-span-1">
          <label for="username" class="text-xs sm:text-sm text-surface-700">Sobrenome</label>
          <InputText
            id="username"
            class="text-sm"
            v-model="form.lastname"
            aria-describedby="username-help"
            placeholder="Digite seu sobrenome"
          />
        </div>
        <Button
          :icon="loading ? 'pi pi-spin pi-spinner' : 'pi pi-credit-card'"
          class="mt-6 col-span-2"
          label="Realizar pagamento"
          @click="createCheckout"
          :disabled="loading || !form.firstname || !form.lastname"
        ></Button>
      </div>
    </div>
  </ContentSection>
  <ProductDetailModal v-model:visible="modalProductDetailVisible" :product="selectedProduct"></ProductDetailModal>
  <ModalError v-model:visible="modalErrorVisible" :message="errorMessage" @close="clearCart" />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useFormatter, useMercadopago } from '@/composables'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import axios from '@/plugins/axios'

import ContentSection from '@/components/ContentSection.vue'
import ProductDetailModal from '@/components/modal/ProductDetailModal.vue'

const { formatCurrency } = useFormatter()
const { items, totalPrice } = storeToRefs(useCartStore())
const { clearCart } = useCartStore()
const { openCheckout } = useMercadopago()
const selectedProduct = ref()
const loading = ref(false)
const router = useRouter()
const errorMessage = ref()

const modalProductDetailVisible = ref(false)
const modalErrorVisible = ref(false)

const form = ref({
  firstname: '',
  lastname: ''
})

const createCheckout = () => {
  loading.value = true
  axios
    .post('checkout/create', { products_id: items.value.map((item) => item.id), ...form.value })
    .then((response) => {
      openCheckout(response.data.mercadopago_preference_id)
    })
    .catch((error) => {
      modalErrorVisible.value = true
      errorMessage.value = error.response.data.message
    })
    .finally(() => {
      loading.value = false
    })
}

const openProductDetail = (product: any) => {
  modalProductDetailVisible.value = true
  selectedProduct.value = product
}

watch(
  items,
  (newValue) => {
    if (newValue.length === 0) {
      router.push('/lista-presentes') // Volta para a página anterior
    }
  },
  { immediate: true } // Executa imediatamente para verificar o estado inicial
)
</script>

<style soped lang="scss">
.p-dataview-header {
  padding: 0 0 0.75rem 0;
}

.p-dataview-footer {
  padding: 0.75rem 0 0 0;
}
</style>

<style lang="scss" scoped>
.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--p-surface-300);
}

.separator:not(:empty)::before {
  margin-right: 0.5em;
}

.separator:not(:empty)::after {
  margin-left: 0.5em;
}
</style>
