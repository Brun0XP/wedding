<template>
  <HeaderSection />
  <LiveCountdown />
  <ContentSection variant="primary" title="O casal">
    <div class="flex flex-col items-center">
      <p class="mb-5">
        “Deus mudou o teu caminho até juntares com o meu e guardou a tua vida separando-a para mim. Para onde fores,
        irei. Onde tu repousares, repousarei. Teu Deus será o meu Deus. Teu caminho o meu será.” – Rute 1:16-17
      </p>
      <Galleria
        :value="images"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        :circular="true"
        containerStyle="max-width: 640px"
        :showItemNavigators="true"
        :showThumbnails="false"
        :showItemNavigatorsOnHover="true"
        :showIndicators="true"
        :autoPlay="true"
        :transitionInterval="3000"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.imageUrl" :alt="slotProps.item.alt" style="width: 100%; display: block" />
        </template>
      </Galleria>
    </div>
  </ContentSection>
  <ContentSection variant="secondary" title="Cerimônia">
    <p class="mb-5">
      Gostaríamos muito de contar com a presença de todos vocês no momento em que nossa união será abençoada diante de
      Deus! Contamos com vocês! Dia 21 de dezembro de 2024, às 16:30h. Paróquia Santo Antônio - R. José Epaminondas,
      Guarabira - PB, 58200-000
    </p>
  </ContentSection>
  <ContentSection variant="primary" title="Recepção">
    <p class="mb-5">
      Os noivos convidam para recepção na mesma data, após a cerimônia no Espaço Glamour - R. Dom Marcelo Pinto
      Carvalheira, 1239 - Bairro Novo - Guarabira - PB - 58200-000
    </p>
  </ContentSection>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

onMounted(() => {
  images.value = [
    {
      imageUrl: '/imgs/ensaio/ensaio_01.jpg',
      alt: 'Ensaio 01'
    },
    {
      imageUrl: '/imgs/ensaio/ensaio_02.jpg',
      alt: 'Ensaio 02'
    },
    {
      imageUrl: '/imgs/ensaio/ensaio_03.jpg',
      alt: 'Ensaio 03'
    },
    {
      imageUrl: '/imgs/ensaio/ensaio_04.jpg',
      alt: 'Ensaio 04'
    },
    {
      imageUrl: '/imgs/ensaio/ensaio_05.jpg',
      alt: 'Ensaio 05'
    },
    {
      imageUrl: '/imgs/ensaio/ensaio_06.jpg',
      alt: 'Ensaio 06'
    },
    {
      imageUrl: '/imgs/ensaio/ensaio_07.jpg',
      alt: 'Ensaio 07'
    },
    {
      imageUrl: '/imgs/ensaio/ensaio_08.jpg',
      alt: 'Ensaio 08'
    },
    {
      imageUrl: '/imgs/ensaio/ensaio_09.jpg',
      alt: 'Ensaio 09'
    }
  ]
})
const images = ref()
const responsiveOptions = ref([
  {
    breakpoint: '991px',
    numVisible: 4
  },
  {
    breakpoint: '767px',
    numVisible: 3
  },
  {
    breakpoint: '575px',
    numVisible: 1
  }
])
</script>
