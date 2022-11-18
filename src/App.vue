<template>
  <div class="relative flex flex-col items-center w-full">
    <NavBar />
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script setup lang="ts">
import NavBar from './views/NavBar.vue'
</script>
