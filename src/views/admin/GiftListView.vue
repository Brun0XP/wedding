<template>
  <Toolbar>
    <template #start>
      <Button icon="pi pi-plus" class="mr-2" severity="secondary"></Button>
      <Button icon="pi pi-upload" severity="secondary"></Button>
    </template>

    <template #end>
      <IconField iconPosition="left">
        <InputIcon>
          <i class="pi pi-search" />
        </InputIcon>
        <InputText placeholder="Pesquisar" />
      </IconField>
    </template>
  </Toolbar>
  <Card class="mt-3">
    <template #content>
      <DataTable :value="gifts" scrollable striped-rows>
        <Column field="image">
          <template #body="{ data }">
            <img :src="data.image" alt="" height="30px" />
          </template>
        </Column>
        <Column field="name" header="Nome"></Column>
        <Column field="price" header="Preço">
          <template #body="{ data }">
            {{ formatCurrency(data.price) }}
          </template>
        </Column>
        <Column style="width: 1rem">
          <template #body="{ data }">
            <Button icon="pi pi-pencil" severity="secondary" @click="selectGift(data)"></Button>
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useFormatter } from '@/composables'

const { formatCurrency } = useFormatter()

const gifts = ref()
const formVisible = ref(false)

interface Gift {
  id?: string
  category?: string
  name: string
  price: number
  image: string
}
const selectedGift = ref<Gift | null>(null)

onMounted(async () => {})

const selectGift = (gift: Gift) => {
  selectedGift.value = gift
  formVisible.value = true
}
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

.sidebar-form {
  width: 25rem;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;

    .button-edit {
      background-color: #e2799b;
      border: 1px solid #e2799b;
    }
  }
  .footer {
    margin-top: auto;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
    .button-save {
      background-color: #e2799b;
      border: 1px solid #e2799b;
      width: 100%;
    }
  }
}
</style>
