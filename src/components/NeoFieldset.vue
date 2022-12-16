<template>
  <div
    ref="neo_fieldset"
    class="collapse collapse-arrow w-full text-left border-[3px] border-black boxer"
  >
    <input type="checkbox" class="peer" :checked="onHovered" />
    <div
      class="collapse-title bg-secondaryclr text-white peer-checked:bg-black peer-checked:striped-bg peer-checked:text-white peer-checked:border-b-[3px] peer-checked:border-black text-left"
    >
      <span
        :class="
          'text-3xl font-Cyberion peer-checked:text-shadow' + ' ' + legend_class
        "
      >
        <slot name="legend">Header {{ onHovered }}</slot></span
      >
    </div>
    <div
      class="peer-checked:pt-5 pt-0 collapse-content bg-black text-primary-content peer-checked:bg-white peer-checked:text-black"
    >
      <slot name="content"
        ><div :class="'font-Outfit font-bold' + ' ' + content_class">
          hello
        </div></slot
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementHover } from '@vueuse/core'
import { ref, watchEffect } from 'vue'

const neo_fieldset = ref()
const isHovered = useElementHover(neo_fieldset)
const onHovered = ref(false)

watchEffect(() => {
  if (isHovered.value == true) {
    onHovered.value = true
  }
})

const props = defineProps<{
  legend_class?: string
  content_class?: string
}>()
</script>

<style scoped>
.boxer {
  box-shadow: 6px 6px 0px 0px #000;
  -webkit-box-shadow: 6px 6px 0px 0px #000;
  -moz-box-shadow: 6px 6px 0px 0px #000;
}
</style>
