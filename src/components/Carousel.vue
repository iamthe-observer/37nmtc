<template>
  <n-carousel class="flex-1" autoplay draggable :effect="`fade`">
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    />
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    />
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    />
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    />
  </n-carousel>
</template>

<script setup lang="ts">
import { NCarousel } from 'naive-ui'
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
