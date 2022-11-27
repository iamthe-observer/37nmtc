<template>
  <div :class="`z-20 w-full h-[100%] absolute overflow-hidden`">
    <div class="relative w-full h-full flex flex-col">
      <div
        class="overflow-y-scroll absolute inset-0 text-xl text-black w-full h-screen"
      >
        <div class="mt-nav-h min-h-full w-full p-3 pb-12 bg-backgrdclr flex">
          <MegaMenu :model="items" orientation="vertical"></MegaMenu>
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MegaMenu from 'primevue/megamenu'
import { ref } from 'vue'
import Content from './Content.vue'

const items = ref([
  {
    label: 'Videos',
    icon: 'pi pi-fw pi-video',
    items: [
      [
        {
          label: 'Video 1',
          items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }],
        },
        {
          label: 'Video 2',
          items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }],
        },
      ],
      [
        {
          label: 'Video 3',
          items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }],
        },
        {
          label: 'Video 4',
          items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }],
        },
      ],
    ],
  },
])
</script>

<style scoped></style>
