<template>
  <div
    ref="card"
    header="Organization & Governance"
    class="flex-1 rounded-lg p-4 flex items-center justify-center transition-all duration-300 ease-out shadow-lg relative"
  >
    <div
      :class="
        !isHovered
          ? 'absolute inset-0 leading-[2em] text-left px-8 py-4 scale-100 flex flex-col items-start justify-center font-Big_Shoulders_Display text-white text-[2.3em] transition-all duration-300 ease-out opacity-100 z-10'
          : 'absolute inset-0 leading-[2em] text-left px-8 py-4 scale-90 flex flex-col items-start justify-center font-Big_Shoulders_Display text-white text-[2.3em] transition-all duration-300 ease-out opacity-0 z-10'
      "
    >
      <slot name="head" />
    </div>

    <div
      :class="
        isHovered
          ? 'opacity-100 transition-all duration-300 ease-out text-white font-Yeseva_One z-10'
          : 'opacity-0 transition-all duration-300 ease-out text-white font-Yeseva_One z-10'
      "
    >
      <slot name="text" />
    </div>

    <div class="">
      <img
        src="https://placeimg.com/400/225/arch"
        :class="
          isHovered
            ? 'bg-cover w-full h-full absolute inset-0 blur-sm brightness-30 rounded-lg  transition-all duration-300 ease-out'
            : 'bg-cover w-full h-full absolute inset-0 brightness-75 rounded-lg transition-all duration-300 ease-out'
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementHover } from '@vueuse/core'
import { ref } from 'vue'

const card = ref<HTMLDivElement>()
const isHovered = useElementHover(card)
</script>
