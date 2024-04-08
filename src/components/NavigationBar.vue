<template>
  <div class="flex align-items-center justify-content-between relative lg:static py-6 px-4 mx-0 md:px-7 lg:px-8 lg:py-6 lg:mx-8">
    <div class="align-items-center flex-grow-1 flex static w-full z-3 fadein" :style="{ top: '80px', right: '0%' }">
      <ul class="list-none p-0 m-0 ml-auto flex align-items-center select-none flex-row cursor-pointer">
        <li>
          <a @click="navigateAndToggle('#home')" v-ripple class="hidden md:flex p-ripple m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
            <span>Home</span>
          </a>
        </li>
        <li>
          <a @click="navigateAndToggle('#inviting')" v-ripple class="hidden md:flex p-ripple m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
            <span>Convite</span>
          </a>
        </li>
        <li>
          <a @click="navigateAndToggle('#location')" v-ripple class="hidden md:flex p-ripple m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
            <span>Localização</span>
          </a>
        </li>
        <li>
          <a @click="navigateAndToggle('#gallery')" v-ripple class="hidden md:flex p-ripple m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
            <span>Galeria</span>
          </a>
        </li>
        <li>
          <Button type="button" label="Presentear" class="m-0 md:mt-0 md:ml-5"></Button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const navigateAndToggle = (id: string) => {
  smoothScroll(id);
};

const smoothScroll = (id: string) => {
  (document.querySelector(id) as HTMLElement).scrollIntoView({
    behavior: 'smooth'
  });
};
</script>
