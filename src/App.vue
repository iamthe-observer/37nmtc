<template>
  <div
    ref="target"
    class="w-full h-full bg-purple-800 relative overflow-hidden"
  >
    <NavBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAppStore } from './store/appStore'

const target = ref<HTMLDivElement | null>(null)
onMounted(() => {
  useAppStore().setElement(target.value!, 't')
})
</script>
