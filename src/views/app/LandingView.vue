<template>
  <HeaderSection />
  <LiveCountdown />
  <ContentSection id="casal" variant="primary" title="O casal">
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
  <ContentSection id="cerimonia" variant="secondary" title="Cerimônia">
    <p class="mb-5">
      Gostaríamos muito de contar com a presença de todos vocês no momento em que nossa união será abençoada diante de
      Deus! Contamos com vocês! Dia 21 de dezembro de 2024, às 16:30h. Paróquia Santo Antônio - R. José Epaminondas,
      Guarabira - PB, 58200-000
    </p>
    <iframe
      class="w-full max-w-[40rem] mx-auto aspect-video"
      style="border: 0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3625747447813!2d-35.492349624212096!3d-6.847065966985297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7adb79ca8328511%3A0x42cacae75d4383e4!2sPar%C3%B3quia%20Santo%20Ant%C3%B4nio%2C%20Guarabira%20PB!5e0!3m2!1spt-BR!2sbr!4v1727920161124!5m2!1spt-BR!2sbr"
    >
    </iframe>
  </ContentSection>
  <ContentSection id="recepcao" variant="primary" title="Recepção">
    <p class="mb-5">
      Os noivos convidam para recepção na mesma data, após a cerimônia no Espaço Glamour - R. Dom Marcelo Pinto
      Carvalheira, 1239 - Bairro Novo - Guarabira - PB - 58200-000
    </p>
    <iframe
      class="w-full max-w-[40rem] mx-auto aspect-video"
      style="border: 0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.4192148067027!2d-35.50087941579452!3d-6.840240049254797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7adb6bc62e72bfd%3A0x1ab24802165fedca!2sEspa%C3%A7o%20Glamour!5e0!3m2!1spt-BR!2sbr!4v1727920307914!5m2!1spt-BR!2sbr"
    ></iframe>
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
