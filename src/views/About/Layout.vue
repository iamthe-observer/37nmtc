`
<template>
  <div :class="`z-20 w-full h-[100%] absolute overflow-hidden`">
    <div class="relative w-full h-full flex flex-col">
      <div
        class="overflow-y-scroll absolute inset-0 text-xl text-black w-full h-screen overflow-x-hidden"
      >
        <div
          class="mt-nav-h min-h-full w-full p-3 pb-12 bg-backgrdclr flex gap-8"
        >
          <!-- sidebar -->
          <div class="text-sm">
            <SideMenu @title="changeContent" :model="about_items">
              <template #head>
                <i class="pi pi-compass"></i> About 37NMTC</template
              >
            </SideMenu>
          </div>

          <!-- content -->
          <ComponentSwitcher
            :content="about_content!"
            :items="about_items"
            :components="about_components"
          />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { markRaw, ref } from 'vue'
import ComponentSwitcher from '@/components/ComponentSwitcher.vue'
import SideMenu from '@/components/SideMenu.vue'
import { MenuItem } from '@/interfaces'
import HistoryAndFacts from './HistoryAndFacts.vue'
import PhilosophyGoalsObj from './PhilosophyGoalsObj.vue'
import ManagementCommittee from './ManagementCommittees/Layout.vue'
import OrganizationGovernance from './Organization&Governance.vue'
import OurStaff from './OurStaff.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/appStore'
import { onMounted } from 'vue'
import { useTitle } from '@vueuse/core'

onMounted(() => {
  useTitle('37NMTC | About')
})

const { about_content } = storeToRefs(useAppStore())

function changeContent(num: number) {
  about_content.value = num
}

const about_components = markRaw([
  HistoryAndFacts,
  PhilosophyGoalsObj,
  OrganizationGovernance,
  ManagementCommittee,
  OurStaff,
])

const about_items = ref<MenuItem[]>([
  {
    title: 'History & Facts',
  },
  {
    title: 'Philosophy, Goals & Objectives',
  },
  {
    title: 'Organization & Governance',
  },
  {
    title: 'Management Committees',
  },
  {
    title: 'Our Staff',
  },
])
</script>
`
