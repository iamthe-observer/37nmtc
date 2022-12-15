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
            <SideMenu @title="changeContent" :model="students_items">
              <template #head>
                <i class="pi pi-users font-bold"></i> Students</template
              >
            </SideMenu>
          </div>

          <!-- content -->
          <ComponentSwitcher
            :content="students_content!"
            :items="students_items"
            :components="students_components"
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

import SRC from './SRC.vue'
import CampusLife from './CampusLife.vue'
import Rules from './Rules.vue'

onMounted(() => {
  useTitle('37NMTC | Students')
})

const { students_content } = storeToRefs(useAppStore())

function changeContent(num: number) {
  students_content.value = num
}

const students_components = markRaw([SRC, CampusLife, Rules])

const students_items = ref<MenuItem[]>([
  {
    title: "Students' Representative Council",
  },
  {
    title: 'Campus Life',
  },
  {
    title: 'Disciplinary Rules',
  },
])
</script>
`
