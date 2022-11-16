<template>
  <div
    class="absolute inset-0 my-0 mx-auto bg-purple-400 flex justify-center items-center"
  >
    <LoadingScreen class="" v-if="!tick"></LoadingScreen>

    <input v-else type="text" value="Hello" name="" id="" />

    <ButtonLoading></ButtonLoading>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ButtonLoading from './ButtonLoading.vue'
import LoadingScreen from './LoadingScreen.vue'

const tick = ref<boolean>(false)

onMounted(() => {
  setTimeout(() => {
    tick.value = true
  }, 5000)
})
</script>
