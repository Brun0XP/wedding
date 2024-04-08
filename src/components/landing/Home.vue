<template>
  <div id="home" class="grid grid-nogutter justify-content-between align-items-center mb-6 py-6 md:mb-8 md:py-8">
    <div class="col-12 md:col-6 flex flex-column gap-4 flex-order-1 md:flex-order-0 align-items-center md:align-items-start text-center md:text-left">
      <img :src="`images/flowers-top.svg`" class="w-25rem max-w-25rem" />
      <span class="block text-900 font-bold text-6xl dancing-script-title">Ana Carolina e Bruno</span>
      <span class="block text-700 text-lg">NOSSO CASAMENTO SE APROXIMA EM dia DE mes, 2024</span>

      <ul class="flex flex-wrap gap-5 list-none p-0">
        <li class="flex flex-column">
          <span class="text-900 text-6xl font-semibold">00</span>
          <span class="-mt-3">dias</span>
        </li>
        <li class="flex flex-column">
          <span class="text-900 text-6xl font-semibold">00</span>
          <span class="-mt-3">horas</span>
        </li>
        <li class="flex flex-column">
          <span class="text-900 text-6xl font-semibold">00</span>
          <span class="-mt-3">minutos</span>
        </li>
        <li class="flex flex-column">
          <span class="text-900 text-6xl font-semibold">00</span>
          <span class="-mt-3">segundos</span>
        </li>
      </ul>
      <img :src="`images/flowers-bottom.svg`" class="w-25rem max-w-25rem" />
    </div>

    <div class="col-12 md:col-5 flex-order-0 md:flex-order-1 mb-6 md:mb-0 border-round">
      <img :src="`images/placeholder.svg`" class="w-full border-round shadow-2 animation-duration-1000 fadeinright" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.dancing-script-title {
  font-family: 'Dancing Script', cursive;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  text-wrap: nowrap;
}
</style>
