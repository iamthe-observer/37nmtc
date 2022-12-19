<template>
  <div
    ref="parent"
    class="overflow-y-scroll text-xl text-black overflow-x-hidden w-full h-full"
  >
    <NavBar />

    <!-- content -->
    <div class="w-full p-3 pb-12 bg-backgrdclr flex gap-8">
      <Content />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.stickyer {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>

<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { onMounted } from 'vue'
import Content from './Content.vue'

onMounted(() => {
  useTitle('37NMTC | News')
})
</script>
