<template>
  <div
    class="overflow-y-scroll text-xl text-black overflow-x-hidden w-full h-full"
  >
    <NavBar />
    <div class="min-h-fit w-full p-3 pb-12 bg-backgrdclr flex gap-8">
      <Content />
    </div>
    <Footer />
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
