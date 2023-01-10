<template>
  <div
    v-if="!loading"
    ref="target"
    class="w-full h-screen bg-purple-800 relative flex flex-col"
  >
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <!-- [x] work on navbar links... -->
  </div>
  <Loading v-else class="absolute inset-0" />
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import { useAppStore } from './store/appStore'
import { storeToRefs } from 'pinia'

const { loading } = storeToRefs(useAppStore())
const target = ref<HTMLDivElement | null>(null)

function runLoading(time: number) {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, time)
}

watchEffect(() => {
  if (loading.value === true) runLoading(5000)
})

onMounted(() => {
  runLoading(5000)
  useAppStore().setElement(target.value!, 't')
})
</script>

<!-- Notes and Comments -->
