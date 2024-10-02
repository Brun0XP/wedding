<template>
  <HeaderSection />
  <LiveCountdown />
  <ContentSection variant="primary" title="O casal">
    <div class="flex flex-col items-center">
      <p class="mb-5">
        “Deus mudou o teu caminho até juntares com o meu e guardou a tua vida separando-a para mim. Para onde fores,
        irei. Onde tu repousares, repousarei. Teu Deus será o meu Deus. Teu caminho o meu será.” – Rute 1:16-17
      </p>
      <div class="card flex justify-center">
        <!-- <Galleria
          v-model:activeIndex="activeIndex"
          v-model:visible="displayCustom"
          :value="images"
          :responsiveOptions="responsiveOptions"
          :numVisible="7"
          containerStyle="max-width: 500px"
          :circular="true"
          :fullScreen="true"
          :showItemNavigators="true"
          :showThumbnails="false"
        >
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
          </template>
          <template #thumbnail="slotProps">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
          </template>
        </Galleria> -->

        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
            :showItemNavigators="true" :showThumbnails="false"
            :autoPlay="true" :transitionInterval="3000">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
            </template>
            
        </Galleria>

        <!-- <div v-if="images" class="grid grid-cols-12 gap-4" style="max-width: 400px">
          <div v-for="(image, index) of images" :key="index" class="col-span-6 sm:col-span-4">
            <img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer" @click="imageClick(index)" />
        </div> -->
      </div>
    </div>
  </ContentSection>
  <ContentSection variant="secondary" title="NOVAS INFORMAÇÕES EM BREVE!" />
  <!-- <ContentSection variant="primary" title="Cerimônia" />
  <ContentSection variant="secondary" title="Recepção" /> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import HeaderSection from '@/components/HeaderSection.vue'
import LiveCountdown from '@/components/LiveCountdown.vue'
import ContentSection from '@/components/ContentSection.vue'

const images = ref([
  {
    itemImageSrc: 'imgs/photo_2.jpg',
    thumbnailImageSrc: 'imgs/photo_2.jpg',
    alt: 'Foto 2'
  },
  {
    itemImageSrc: 'imgs/photo_3.jpg',
    thumbnailImageSrc: 'imgs/photo_3.jpg',
    alt: 'Foto 3'
  },
  {
    itemImageSrc: 'imgs/photo_4.jpg',
    thumbnailImageSrc: 'imgs/photo_4.jpg',
    alt: 'Foto 4'
  },
  {
    itemImageSrc: 'imgs/photo_5.jpeg',
    thumbnailImageSrc: 'imgs/photo_5.jpeg',
    alt: 'Foto 5'
  },
  {
    itemImageSrc: 'imgs/photo_6.jpeg',
    thumbnailImageSrc: 'imgs/photo_6.jpeg',
    alt: 'Foto 6'
  },
  {
    itemImageSrc: 'imgs/photo_7.jpeg',
    thumbnailImageSrc: 'imgs/photo_7.jpeg',
    alt: 'Foto 7'
  },
  {
    itemImageSrc: 'imgs/ensaio/ensaio_01.jpg',
    thumbnailImageSrc: 'imgs/ensaio/ensaio_01.jpg',
    alt: 'Ensaio 1'
  },
  {
    itemImageSrc: 'imgs/ensaio/ensaio_02.jpg',
    thumbnailImageSrc: 'imgs/ensaio/ensaio_02.jpg',
    alt: 'Ensaio 2'
  },
  {
    itemImageSrc: 'imgs/ensaio/ensaio_03.jpg',
    thumbnailImageSrc: 'imgs/ensaio/ensaio_03.jpg',
    alt: 'Ensaio 3'
  },
  {
    itemImageSrc: 'imgs/ensaio/ensaio_04.jpg',
    thumbnailImageSrc: 'imgs/ensaio/ensaio_04.jpg',
    alt: 'Ensaio 4'
  },
  {
    itemImageSrc: 'imgs/ensaio/ensaio_05.jpg',
    thumbnailImageSrc: 'imgs/ensaio/ensaio_05.jpg',
    alt: 'Ensaio 5'
  },
  {
    itemImageSrc: 'imgs/ensaio/ensaio_06.jpg',
    thumbnailImageSrc: 'imgs/ensaio/ensaio_06.jpg',
    alt: 'Ensaio 6'
  },
  {
    itemImageSrc: 'imgs/ensaio/ensaio_07.jpg',
    thumbnailImageSrc: 'imgs/ensaio/ensaio_07.jpg',
    alt: 'Ensaio 7'
  },
  {
    itemImageSrc: 'imgs/ensaio/ensaio_08.jpg',
    thumbnailImageSrc: 'imgs/ensaio/ensaio_08.jpg',
    alt: 'Ensaio 8'
  },
  {
    itemImageSrc: 'imgs/ensaio/ensaio_09.jpg',
    thumbnailImageSrc: 'imgs/ensaio/ensaio_09.jpg',
    alt: 'Ensaio 9'
  }
])
const activeIndex = ref(0)
const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 5
  },
  {
    breakpoint: '768px',
    numVisible: 3
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
])
const displayCustom = ref(false)

const imageClick = (index: number) => {
  activeIndex.value = index
  displayCustom.value = true
}
</script>

<style soped lang="scss"></style>
