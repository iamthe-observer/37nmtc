<template>
  <n-carousel class="flex-1 -z-10" autoplay :effect="`fade`">
    <img class="carousel-img" src="@/assets/images/bg1.jpg" />
    <img class="carousel-img" src="@/assets/images/bsc1.jpg" />
    <img class="carousel-img" src="@/assets/images/rgn1.jpg" />
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
