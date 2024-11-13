<script setup>
import { ref, onMounted } from 'vue';

const loading = ref(true);
const showDelayedComponents = ref(false);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
    setTimeout(() => {
      showDelayedComponents.value = true;
    }, 0);
  }, 2000);
});
</script>

<template>
  <div>
    <Loading :show="loading" />
    <MainHeader v-if="showDelayedComponents" />
    <div class="container">
      <div class="min-h-[870px]">
        <Introduction v-if="showDelayedComponents" />
      </div>
      <MainFooter v-if="showDelayedComponents" />
    </div>
    <div v-if="!loading" class="container">
      <About />
      <Experience />
      <!-- Add in the future -->
      <!-- <Featured /> -->
      <Projects />
      <Contact />
    </div>
  </div>
</template>

<style scoped>
</style>
