<template>
  <div class="background-countdown flex flex-column py-8">
    <ConfettiExplosion
      v-if="explodeVisible"
      class="mx-auto"
      :stageHeight="1500"
      :duration="5000"
      :colors="['#FFD700', '#DAA520', '#FFB6C1', '#C71585']"
    />
    <h2 class="text-xl text-white mx-auto mt-0 mb-5">CONTAGEM REGRESSIVA</h2>
    <div class="countdown">
      <div class="countdown-item">
        <div class="value">{{ countdown.days }}</div>
        <div class="label">dias</div>
      </div>
      <div class="countdown-item">
        <div class="value">{{ countdown.hours }}</div>
        <div class="label">horas</div>
      </div>
      <div class="countdown-item">
        <div class="value">{{ countdown.minutes }}</div>
        <div class="label">minutos</div>
      </div>
      <div class="countdown-item">
        <div class="value">{{ countdown.seconds }}</div>
        <div class="label">segundos</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

import ConfettiExplosion from 'vue-confetti-explosion';

const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});
const eventDate = new Date('Decembre 21, 2024 16:00:00').getTime();
// const eventDate = new Date('June 05, 2024 19:22:20').getTime();
const intervalId = ref();
const explodeVisible = ref(false);

onMounted(async () => {
  if (await updateCountdown())
    intervalId.value = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId.value);
});

const updateCountdown = async (): Promise<boolean> => {
  const now = new Date().getTime();
  const timeRemaining = eventDate - now;
  if (timeRemaining <= 0) {
    await explode();
    clearInterval(intervalId.value);
    return false;
  }

  countdown.value = {
    days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ),
    minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000)
  };
  return true;
};

const explode = async () => {
  explodeVisible.value = false;
  await nextTick();
  explodeVisible.value = true;
};
</script>

<style lang="scss" scoped>
.background-countdown {
  background-color: #e4afaf;
}

.countdown {
  margin: 0 auto;
  display: flex;
  column-gap: 1rem;
  &-item {
    background-color: #d4a1a1;
    width: 100px;
    height: 100px;
    border-radius: 16px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    .value {
      font-size: 2rem;
    }
    .label {
      text-transform: uppercase;
      font-size: 14px;
    }
  }
}
</style>
