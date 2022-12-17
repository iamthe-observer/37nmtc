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
          :model="students_items"
          :parent-node="parent"
        >
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

const { students_content } = storeToRefs(useAppStore())
const parent = ref()

onMounted(() => {
  useTitle('37NMTC | Students')
})
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
