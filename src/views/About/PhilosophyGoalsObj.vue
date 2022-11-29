<template>
  <div class="p-3 w-full">
    <h1 class="text-[3em] font-Bebas_Neue mt-8 mb-10">Philosophy</h1>

    <div
      class="parent relative translate-x-14 from-[rgba(0,0,0,.5)] to-transparent"
    >
      <img class="child" src="@/assets/socrates.jpeg" alt="" />

      <div class="absolute top-0 right-20 glass h-full max-w-[30%] text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        iusto quia ad magnam rem molestiae, eos tenetur ea ex quisquam?
      </div>
    </div>

    <div class="flex flex-col"></div>
  </div>

  The purpose of education iS to train the individual and the community to
  develop their learning domains- cognitive, psychomotor and affective — The
  Head, Hands and Hean (the 3 H's) for a meaningful lite. These beliefs serve as
  a crucible and pivot tor an effective curriculum and selection ot holistic
  instructional methodologies and practices.
</template>

<script setup lang="ts">
import { ref } from 'vue'

const philosophy_data = ref([
  {
    title: 'Person',
    body: '',
  },
  {
    title: 'Health',
    body: '',
  },
  {
    title: 'Nursing',
    body: '',
  },
  {
    title: 'Education',
    body: '',
  },
])
</script>

<style scoped>
.parent {
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 50%, transparent 100%);
}
.child {
  background-image: url('../../assets/socrates.jpeg');
}
</style>
