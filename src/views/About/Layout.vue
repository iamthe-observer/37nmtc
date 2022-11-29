<template>
  <div :class="`z-20 w-full h-[100%] absolute overflow-hidden`">
    <div class="relative w-full h-full flex flex-col">
      <div
        class="overflow-y-scroll absolute inset-0 text-xl text-black w-full h-screen"
      >
        <div class="mt-nav-h min-h-full w-full p-3 pb-12 bg-backgrdclr flex">
          <!-- sidebar -->
          <div class="text-sm">
            <SideMenu @title="logger" :model="history_items">
              <template #head>About 37NMTC</template>
            </SideMenu>
          </div>

          <!-- content -->
          <transition name="fade" mode="out-in">
            <keep-alive>
              <component :is="current_content" />
            </keep-alive>
          </transition>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watchEffect } from 'vue'
import HistoryAndFacts from './HistoryAndFacts.vue'
import PhilosophyGoalsObj from './PhilosophyGoalsObj.vue'
import { PrimeIcons } from 'primevue/api'
import SideMenu from '@/components/SideMenu.vue'
import { MenuItem } from '@/interfaces'

const content = ref('20413190')

function logger(e: any) {
  console.log(e)

  content.value = e
}

const current_content = computed(() => {
  for (let ii = 0; ii < history_items.value.length; ii++) {
    const item = history_items.value[ii]
    if (item.id == content.value) {
      return item.component
    }
  }
})

onMounted(() => {
  console.log(HistoryAndFacts)
  watchEffect(() => {
    console.log(current_content.value)
  })
})

const history_items = ref<MenuItem[]>([
  {
    title: 'History & Facts',
    icon: PrimeIcons.BOOK,
    component: HistoryAndFacts,
    id: HistoryAndFacts.__hmrId,
  },
  {
    title: 'Philosophy, Goals & Objectives',
    icon: PrimeIcons.BOOK,
    component: PhilosophyGoalsObj,
    id: PhilosophyGoalsObj.__hmrId,
  },
  {
    title: 'Organization & Governance',
    icon: PrimeIcons.BOOK,
  },
  {
    title: 'Management Committees',
    icon: PrimeIcons.BOOK,
  },
  {
    title: 'Our Staff',
    icon: PrimeIcons.BOOK,
  },
  {
    title: 'Partner & Affiliates',
    icon: PrimeIcons.BOOK,
  },
])

const academic_items = ref<MenuItem[]>([
  {
    title: 'Academic Policies',
    icon: PrimeIcons.BOOK,
  },
  {
    title: 'Channel of Communication',
    icon: 'pi pi-fw pi-video',
  },
  {
    title: 'Programmes & Courses',
    icon: 'pi pi-fw pi-video',
  },
  {
    title: 'Teaching Staff',
    icon: 'pi pi-fw pi-video',
  },
  {
    title: 'Academic Calendar',
    icon: 'pi pi-fw pi-video',
  },
  {
    title: 'Academic Facilities',
    icon: 'pi pi-fw pi-video',
  },
])
</script>
