<template>
  <div class="p-3 w-full">
    <h1 class="text-[3em] font-Bebas_Neue mt-8 mb-10">Philosophy</h1>

    <div class="relative">
      <div
        class="parent absolute translate-x-14 from-[rgba(0,0,0,.5)] to-transparent"
      >
        <img class="child" src="@/assets/socrates.jpeg" alt="" />
      </div>
    </div>

    <div class="flex flex-col"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.parent {
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 50%, transparent 100%);
}
.child {
  background-image: url('../../assets/socrates.jpeg');
}
</style>
