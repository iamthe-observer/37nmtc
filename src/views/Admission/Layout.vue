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
            <SideMenu @title="changeContent" :model="admission_items">
              <template #head>
                <i class="pi pi-user-plus font-bold"></i> Admission</template
              >
            </SideMenu>
          </div>

          <!-- content -->
          <ComponentSwitcher
            :content="admission_content!"
            :items="admission_items"
            :components="admission_components"
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

import Admitted from './AdmittedStds.vue'
import AplProceed from './ApplicationProcedure.vue'
import EntryReq from './EntryReq.vue'
import FinancialPolicy from './FinancialPolicy.vue'

onMounted(() => {
  useTitle('37NMTC | Admission')
})

const { admission_content } = storeToRefs(useAppStore())

function changeContent(num: number) {
  admission_content.value = num
}

const admission_components = markRaw([
  Admitted,
  EntryReq,
  AplProceed,
  FinancialPolicy,
])

const admission_items = ref<MenuItem[]>([
  {
    title: 'Admitted Students',
  },
  {
    title: 'Entry Requirements',
  },
  {
    title: 'Application Procedures',
  },
  {
    title: 'Financial Policy',
  },
])
</script>
`
