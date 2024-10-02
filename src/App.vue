
<template>
  <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
    :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
  </Galleria>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

onMounted(() => {
    images.value = [{
      itemImageSrc: '/imgs/photo_01.jpg',
      thumbnailImageSrc: '/imgs/photo_01.jpg',
      alt: 'img'
    },{
      itemImageSrc: '/imgs/photo_02.jpg',
      thumbnailImageSrc: '/imgs/photo_02.jpg',
      alt: 'img2'
    }]
});

const images = ref();
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
]);
</script>