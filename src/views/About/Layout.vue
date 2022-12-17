<template>
  <div
    ref="parent"
    class="overflow-y-scroll text-xl text-black overflow-x-hidden w-full h-full"
  >
    <NavBar />
    <div class="min-h-fit w-full p-3 pb-12 bg-backgrdclr flex gap-8">
      <!-- sidebar -->
      <div class="text-sm">
        <SideMenu
          @title="changeContent"
          :model="about_items"
          :parent-node="parent"
        >
          <template #head> <i class="pi pi-compass"></i> About 37NMTC</template>
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
const parent = ref()

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
