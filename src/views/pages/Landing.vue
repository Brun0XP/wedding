<template>
  <div class="relative overflow-hidden flex flex-column justify-content-center">
    <div class="bg-circle opacity-50" :style="{ top: '-200px', left: '-700px' }"></div>
    <div class="bg-circle hidden lg:flex" :style="{ top: '50px', right: '-800px', transform: 'rotate(60deg)' }"></div>
    <div class="landing-wrapper">
      <NavigationBar />
      <div class="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 z-2">
        <Home />
        <Inviting />
        <!-- <Location /> -->
        <!-- <Gallery /> -->
        <Footer></Footer>
      </div>
    </div>
  </div>
  <AppConfig simple />
</template>

<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue';
import Home from '@/components/landing/Home.vue';
import Inviting from '@/components/landing/Inviting.vue';
// import Location from '@/components/landing/Location.vue';
// import Gallery from '@/components/landing/Gallery.vue';
import Footer from '@/components/landing/Footer.vue';

import AppConfig from '@/layout/AppConfig.vue';
</script>
