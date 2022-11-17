<template>
  <div class="carousel w-full">
    <div
      v-for="(img, i) in props.imgs"
      id="slide0"
      class="carousel-item w-full"
    >
      <img :src="img.src" class="w-full" />
    </div>
  </div>
  <div
    v-for="(img, i) in props.imgs"
    class="flex flex-row justify-center w-full py-2 gap-2"
  >
    <a :href="`#slide${i}`" class="btn btn-xs">{{ i + 1 }}</a>
  </div>
</template>

<script setup lang="ts">
import { CarouselData } from '@/interfaces'

const init_index = (idx: number) => {
  return `slide${idx}`
}
const next_index = (idx: number) => {
  if (idx === props.imgs.length - 1) {
    return `#slide1`
  } else {
    return `#slide${idx + 1}`
  }
}
const prev_index = (idx: number) => {
  if (idx === 0) {
    return `#slide${props.imgs.length - 1}`
  } else {
    return `#slide${idx - 1}`
  }
}

const img = 'https://placeimg.com/800/200/arch'

const props = defineProps<{
  imgs: CarouselData[]
}>()
</script>
