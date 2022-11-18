<template>
  <div class="card w-96 bg-base-100 shadow-xl rounded-lg image-full">
    <figure><img :src="props.src" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ props.title }}
      </h2>
      <p>{{ props.body }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">View</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  src: string
  body: string
}>()
</script>
