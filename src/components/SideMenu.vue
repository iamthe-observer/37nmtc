<template>
  <div class="w-[300px]">
    <div class="font-Bebas_Neue font-bold text-2xl my-3 text-center">
      <slot name="head" />
    </div>

    <div
      class="flex flex-col gap-3 sticky top-0 items-start text-left bg-white shadow-lg rounded-xl p-3"
    >
      <a
        :key="i"
        v-for="(item, i) in model"
        :class="
          'link link-hover h-auto w-full rounded-md px-2 py-1 hover:text-white  hover:bg-primaryclr transition-all stickyer duration-700 ease-out font-Big_Shoulders_Display text-xl flex gap-3 items-center ' +
          item.class
        "
        @click="handleClick(i)"
        :href="item.to"
      >
        <div
          v-if="selected_link === i"
          class="bg-primaryclr border-black border-1 aspect-square w-[20px] rounded-md"
        ></div>
        {{ item.title }}</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { MenuItem } from '@/interfaces'
import { ref } from 'vue'

const selected_link = ref()
const emit = defineEmits(['title'])
const props = defineProps<{
  model: MenuItem[]
}>()

const handleClick = (i: number) => {
  emit('title', i)
  selected_link.value = i
}
</script>

<style scoped>
.stickyer {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>
