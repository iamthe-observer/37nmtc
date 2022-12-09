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
            <SideMenu @title="changeContent" :model="academics_items">
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
    </div>
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

onMounted(() => {
  useTitle('37NMTC | Academics')
})

const { academics_content } = storeToRefs(useAppStore())

function changeContent(num: number) {
  academics_content.value = num
}

const academics_components = markRaw([AcademicPolicies])

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
  {
    title: 'Teaching Staff',
  },
  {
    title: 'Academic Calendar',
  },
  {
    title: 'Academic Facilities',
  },
])
</script>
`
