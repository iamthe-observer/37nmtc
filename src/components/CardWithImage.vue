<template>
  <div
    ref="card"
    header="Organization & Governance"
    class="flex-1 bg-primaryclr rounded-lg p-4 flex items-center justify-center transition-all duration-300 ease-out relative"
  >
    <slot name="text" />
  </div>
</template>

<script setup lang="ts">
import { useElementHover } from '@vueuse/core'
import { ref, watchEffect } from 'vue'

const card = ref<HTMLDivElement>()
const isHovered = useElementHover(card)
watchEffect(() => {
  console.log(isHovered.value, card.value?.clientHeight)
})
</script>
