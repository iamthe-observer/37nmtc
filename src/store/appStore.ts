import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

type Dimensions = {
  width?: number
  height?: number
}

export const useAppStore = defineStore('app', () => {
  const win_width = ref<number>(0)
  const win_height = ref<number>(0)
  const nav_width = ref<number>(0)
  const nav_height = ref<number>(0)

  const setWinDimensions = (dimensions: Dimensions) => {
    win_height.value = dimensions.height!
    win_width.value = dimensions.width!
  }
  const setNavDimensions = (dimensions: Dimensions) => {
    nav_width.value = dimensions.width!
    nav_height.value = dimensions.height!
  }

  const main_content_gap = computed(() => {
    return win_height.value - 144
  })

  return {
    win_height,
    win_width,
    nav_height,
    nav_width,
    main_content_gap,
    setWinDimensions,
    setNavDimensions,
  }
})
