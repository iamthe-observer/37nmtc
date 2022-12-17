<template>
  <!-- MAIN CONTENT -->
  <div>
    <div
      ref="main_content"
      class="z-10 font-extrabold w-full h-[100%] absolute overflow-hidden inset-0"
    >
      <div class="relative w-full h-full overflow-hidden flex flex-col">
        <Carousel />
        <div
          class="w-full h-12 text-center bg-primaryclr py-2 text-white flex gap-4 justify-center items-center text-lg font-Outfit border-t-[3px] border-b-[3px] border-black"
        >
          Explore More <i class="pi pi-angle-double-down"></i>
        </div>

        <span
          class="absolute text-[6.5em] text-white font-bold top-1/2 left-1/2 translate-x-[-50%] translate-y-[-35%] font-Cyberion text-shadow font-outline-2"
          ><span class="text-primaryclr">37</span>NMTC</span
        >

        <div :class="`z-20 w-full h-[100%] absolute overflow-hidden`">
          <div class="relative w-full h-full flex flex-col">
            <Content />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
import { useTitle } from '@vueuse/core'
import Content from './Content.vue'
import { onMounted } from 'vue'

onMounted(() => {
  useTitle('37NMTC | Home')
})
</script>

<style scoped>
.title {
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
</style>
