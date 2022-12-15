<template>
  <div class="z-20 w-full h-[100%] absolute overflow-hidden">
    <div class="relative w-full h-full flex flex-col">
      <div
        class="overflow-y-scroll absolute inset-0 text-xl text-black w-full h-screen overflow-x-hidden"
      >
        <div class="mt-nav-h min-h-full w-full p-3 pb-12 bg-backgrdclr flex">
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useTitle } from '@vueuse/core'

import Content from './Content.vue'

onMounted(() => {
  useTitle('37NMTC | News')
})
</script>
`
