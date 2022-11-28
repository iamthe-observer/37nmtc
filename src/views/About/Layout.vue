<template>
  <div :class="`z-20 w-full h-[100%] absolute overflow-hidden`">
    <div class="relative w-full h-full flex flex-col">
      <div
        class="overflow-y-scroll absolute inset-0 text-xl text-black w-full h-screen"
      >
        <div class="mt-nav-h min-h-full w-full p-3 pb-12 bg-backgrdclr flex">
          <!-- sidebar -->
          <div class="">
            <MegaMenu :model="items" orientation="vertical" class="flex-1" />
          </div>
          <!-- content -->
          <div class="p-3">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <component :is="HistoryAndFacts" />
              </keep-alive>
            </transition>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MegaMenu from 'primevue/megamenu'
import { ref } from 'vue'
import HistoryAndFacts from './HistoryAndFacts.vue'

const items = ref([
  {
    label: 'History & Facts',
    icon: 'pi pi-fw pi-video',
  },
  {
    label: 'History & Facts',
    icon: 'pi pi-fw pi-video',
  },
  {
    label: 'History & Facts',
    icon: 'pi pi-fw pi-video',
  },
  {
    label: 'History & Facts',
    icon: 'pi pi-fw pi-video',
  },
  {
    label: 'History & Facts',
    icon: 'pi pi-fw pi-video',
  },
  {
    label: 'History & Facts',
    icon: 'pi pi-fw pi-video',
  },
  {
    label: 'History & Facts',
    icon: 'pi pi-fw pi-video',
  },
  {
    label: 'History & Facts',
    icon: 'pi pi-fw pi-video',
  },
])
</script>
