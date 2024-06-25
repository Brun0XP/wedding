<template>
  <ContentSection variant="secondary" title="Lista de presentes">
    <div class="gift-header">
      <Button
        class="gift-button"
        icon="pi pi-shopping-cart"
        rounded
        label="Carrinho vazio"
        disabled
      ></Button>
    </div>
    <div class="gift-list grid mt-3">
      <div v-for="gift in gifts" class="col-12 sm:col-6 md:col-4">
        <div class="card">
          <img class="card-image" :src="gift.image" />
          <div class="gift-name">
            <h5>{{ gift.name }}</h5>
          </div>
          <div class="content">
            {{ formatCurrency(gift.price) }}
          </div>
          <Button
            class="gift-button w-full"
            label="Presentear"
            rounded
          ></Button>
        </div>
      </div>
    </div>
  </ContentSection>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useSupabase, useFormatter } from '@/composables';

import ContentSection from '@/components/ContentSection.vue';

const { supabase } = useSupabase();
const { formatCurrency } = useFormatter();

const gifts = ref();
onMounted(async () => {
  gifts.value = (await supabase.from('gifts').select('*')).data;
});
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
      height: 3rem;
      align-content: center;
      h5 {
        font-size: 1rem;
        font-weight: normal;
        text-align: center;
        margin: 0;
      }
    }
    .content {
      flex-grow: 1;
      margin-top: 0.5rem;
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
