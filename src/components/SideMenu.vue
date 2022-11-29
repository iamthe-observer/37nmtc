<template>
  <div class="w-[300px]">
    <div class="font-Bebas_Neue font-bold text-2xl my-3">
      <slot name="head" />
    </div>

    <div
      class="flex flex-col gap-3 items-start text-left bg-white shadow-lg rounded-xl p-3"
    >
      <a
        v-for="(item, i) in model"
        :class="
          'link link-hover font-Big_Shoulders_Display text-xl flex gap-3 items-center ' +
          item.class
        "
        @click="emit('title', item.id)"
        :href="item.to"
        ><i :class="item.icon"></i>{{ item.title }}</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { MenuItem } from '@/interfaces'

const emit = defineEmits(['title'])
const props = defineProps<{
  model: MenuItem[]
}>()
</script>

<style scoped></style>
