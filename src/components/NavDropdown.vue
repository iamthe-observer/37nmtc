<template>
  <div ref="drop_down" class="relative">
    <span
      class="bg-blue-600 text-white hover:bg-blue-800 px-3 py-2 rounded-md cursor-pointer"
    >
      LOREM
    </span>

    <ul
      v-if="isHovered"
      class="absolute bg-black text-white rounded-md px-4 py-2"
    >
      <li>hello</li>
      <li>hello</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useElementHover } from '@vueuse/core'
// interface DropData {
//   name: string
//   class: string
//   dropList?: boolean
//   dropdata: {
//     name: string
//     action: Function
//   }
// }
// const props = defineProps<{ item: DropData }>()

const drop_down = ref()
const isHovered = useElementHover(drop_down)
</script>
