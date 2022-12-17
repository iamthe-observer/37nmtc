<template>
  <div
    ref="parent"
    class="overflow-y-scroll text-xl text-black overflow-x-hidden w-full h-full"
  >
    <nav-bar />
    <div class="min-h-fit w-full p-3 pb-12 bg-backgrdclr flex gap-8">
      <!-- sidebar -->
      <div class="text-sm">
        <SideMenu
          @title="changeContent"
          :model="academics_items"
          :parent-node="parent"
        >
          <template #head>
            <i class="pi pi-book font-bold"></i> Academics</template
          >
        </SideMenu>
      </div>

      <!-- content -->
      <ComponentSwitcher
        :content="academics_content!"
        :items="academics_items"
        :components="academics_components"
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
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/appStore'
import { onMounted } from 'vue'
import { useTitle } from '@vueuse/core'
import AcademicPolicies from './AcademicPolicies/Layout.vue'
import ChannelOfComm from './ChannelOfComm.vue'
import Programmes from './Programmes.vue'
import Facilities from './Facilities.vue'

onMounted(() => {
  useTitle('37NMTC | Academics')
})

const { academics_content } = storeToRefs(useAppStore())
const parent = ref()

function changeContent(num: number) {
  academics_content.value = num
}

const academics_components = markRaw([
  AcademicPolicies,
  ChannelOfComm,
  Programmes,
  Facilities,
])

const academics_items = ref<MenuItem[]>([
  {
    title: 'Academic Policies',
  },
  {
    title: 'Channel of Communications',
  },
  {
    title: 'Programmes and Courses',
  },
  // {
  //   title: 'Teaching Staff',
  // },
  // {
  //   title: 'Academic Calendar',
  // },
  {
    title: 'Academic Facilities',
  },
])
</script>
