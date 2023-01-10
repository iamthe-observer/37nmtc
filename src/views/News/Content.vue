<template>
  <div class="w-full mt-8 mb-5 px-10 relative">
    <!-- heading -->
    <h1 class="text-[3em] font-Cheorcy leading-[1em] mt-16 mb-20">
      News and Reports
    </h1>

    <h3 class="text-[1em] font-Cheorcy leading-[1em] mb-10">Latest Reports</h3>

    <!-- news Info -->
    <!-- <div class="grid grid-cols-2 gap-4">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div> -->

    <threeD />
  </div>
</template>

<script setup lang="ts">
import NewsCard from '@/components/NewsCard.vue'
import threeD from '../../components/3d.vue'
</script>
