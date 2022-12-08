`
<template>
  <div :class="`z-20 w-full h-[100%] absolute overflow-hidden`">
    <div class="relative w-full h-full flex flex-col">
      <div
        class="overflow-y-scroll absolute inset-0 text-xl text-black w-full h-screen overflow-x-hidden"
      >
        <div class="mt-nav-h min-h-full w-full p-3 pb-12 bg-backgrdclr flex">
          <!-- sidebar -->
          <div class="text-sm">
            <SideMenu @title="changeContent" :model="about_items">
              <template #head>About 37NMTC</template>
            </SideMenu>
          </div>

          <!-- content -->
          <ComponentSwitcher
            :content="content!"
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
import { PrimeIcons } from 'primevue/api'
import SideMenu from '@/components/SideMenu.vue'
import { MenuItem } from '@/interfaces'
import HistoryAndFacts from './HistoryAndFacts.vue'
import PhilosophyGoalsObj from './PhilosophyGoalsObj.vue'
import ManagementCommittee from './ManagementCommittees/Layout.vue'
import OrganizationGovernance from './Organization&Governance.vue'
import OurStaff from './OurStaff.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/appStore'

const { content } = storeToRefs(useAppStore())

function changeContent(num: number) {
  content.value = num
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
    icon: PrimeIcons.BOOK,
  },
  {
    title: 'Philosophy, Goals & Objectives',
    icon: PrimeIcons.BOOK,
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
`
