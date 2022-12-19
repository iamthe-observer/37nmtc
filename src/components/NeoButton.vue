<template>
  <button
    ref="btn"
    :class="
      isHovered
        ? 'bg-white active:striped-bg active:text-white transition-all duration-300 ease-out btn-box border-[3px] relative border-black text-black px-5 py-1 min-w-[3em] font-black btn-box' +
          ' ' +
          btn_class
        : 'bg-trebleclr transition-all duration-300 ease-out btn-box border-[3px] relative border-black text-black px-5 py-1 min-w-[3em] btn-box font-black' +
          ' ' +
          btn_class
    "
  >
    <span :class="txt_class + 'flex gap-[3px] items-center'">
      <i :class="icon"></i>
      <slot name="label">{{ label }}</slot></span
    >
  </button>
</template>

<script setup lang="ts">
import { useElementHover } from '@vueuse/core'
import { ref } from 'vue'

const btn = ref<HTMLButtonElement>()
const isHovered = useElementHover(btn)

const props = defineProps<{
  btn_class?: string
  txt_class?: string
  label?: string
  icon?: string
}>()
</script>

<style scroped>
.btn-box {
  box-shadow: 6px 6px 0px 0px #000;
  -webkit-box-shadow: 6px 6px 0px 0px #000;
  -moz-box-shadow: 6px 6px 0px 0px #000;
}

.btn-box:hover {
  box-shadow: 0px 0px 0px 0px #000;
  -webkit-box-shadow: 0px 0px 0px 0px #000;
  -moz-box-shadow: 0px 0px 0px 0px #000;
}
</style>
