<template>
  <ContentSection variant="secondary" title="Lista de presentes">
    <div class="gift-header">
      <Button
        class="gift-button"
        icon="pi pi-shopping-cart"
        rounded
        :label="cartItemCount ? `${cartItemCount} item(s) no carrinho` : 'Carrinho vazio'"
        disabled
      ></Button>
    </div>
    <div class="gift-list grid mt-3">
      <div v-for="gift in gifts" class="col-12 sm:col-6 md:col-4">
        <div class="card">
          <img v-if="gift.image" class="card-image w-12rem" :src="gift.image" />
          <img v-else class="card-image w-12rem" src="https://placehold.co/400/fff/d5d5d5" />
          <h2 class="gift-name">{{ gift.name }}</h2>
          <p class="gift-description">{{ gift.description }}</p>
          <div class="content">
            {{ formatCurrency(gift.price) }}
          </div>
          <Button class="gift-button w-full" label="Presentear" rounded @click="addItem(gift)"></Button>
        </div>
      </div>
    </div>
  </ContentSection>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useSupabase, useFormatter } from '@/composables'
import { useCartStore } from '@/stores/cart'

import ContentSection from '@/components/ContentSection.vue'

const { supabase } = useSupabase()
const { formatCurrency } = useFormatter()
const { cartItemCount, addItem } = useCartStore()

const gifts = ref()
onMounted(async () => {
  gifts.value = (await supabase.from('products').select('id, name, description, price, image, categories(id)')).data
})
</script>

<style soped lang="scss">
.gift-header {
  max-width: 940px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: flex-end;
}

.gift-list {
  max-width: 940px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  .card {
    background-color: white;
    border-radius: 20px;
    padding: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .gift-name {
      font-size: 1.2rem;
      font-weight: normal;
      text-align: center;
      margin-bottom: 0;
    }
    .gift-description {
      font-size: 0.8rem;
      text-align: center;
      color: #555555;
    }
    .content {
      flex-grow: 1;
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }
  }
}

.gift-button {
  background-color: #e4afaf;
  border: 1px solid #e4afaf;
}
</style>
