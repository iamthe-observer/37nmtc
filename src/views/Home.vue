<template>
  <div
    class="my-0 mx-auto flex flex-col justify-between items-center gap-3 bg-[rgb(240,240,240)]"
  >
    <header><Carousel /></header>

    <section class="grid grid-cols-3">
      <h1 class="col-span-3">Recent News</h1>

      <Card
        :title="`Hello`"
        :badge_text="`26/04/1997`"
        :body="`hello go home`"
        :src="`https://placeimg.com/400/225/arch`"
        :tags="['oogabooga', 'goodday']"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { CarouselData } from '@/interfaces'
import { ref } from 'vue'
import Carousel from '@/components/Carousel-v2.vue'
import Card from '@/components/Card.vue'

// const imgs = ref<CarouselData[]>([
//   { src: 'https://placeimg.com/800/200/arch' },
//   { src: 'https://placeimg.com/800/200/arch' },
//   { src: 'https://placeimg.com/800/200/arch' },
//   { src: 'https://placeimg.com/800/200/arch' },
//   { src: 'https://placeimg.com/800/200/arch' },
//   { src: 'https://placeimg.com/800/200/arch' },
//   { src: 'https://placeimg.com/800/200/arch' },
// ])
</script>
