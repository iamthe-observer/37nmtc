<template>
  <transition name="fade" mode="out-in">
    <component :is="current_content" />
  </transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { MenuItem } from '../interfaces'

const props = defineProps<{
  content: number
  items: MenuItem[]
  components: object[]
}>()

const current_content = computed(() => {
  for (let ii = 0; ii < props.items.length; ii++) {
    const item = props.items[ii]

    if (props.content === ii) {
      return props.components[ii]
    }
  }
})
</script>
