<template>
  <div class="relative w-screen h-screen overflow-x-hidden">
    <div
      class="inset-0 absolute bg-green-700 flex items-center justify-center"
      v-if="tick"
    >
      <LoadingScreen />
    </div>
    <div class="w-full h-full bg-[rgb(240,240,240)]" v-else>
      <NavBar />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from './views/NavBar.vue'
import { onMounted, ref } from 'vue'
import LoadingScreen from './views/LoadingScreen.vue'

const tick = ref<boolean>(false)

// onMounted(() => {
//   setTimeout(() => {
//     tick.value = true
//   }, 1000)
// })
</script>
