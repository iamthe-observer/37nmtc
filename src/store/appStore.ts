import { useElementSize, useIntersectionObserver } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useRoute } from 'vue-router'

export const useAppStore = defineStore('app', () => {
  const nav_ref = ref<HTMLDivElement>()
  const target_ref = ref<HTMLDivElement>()

  const route = useRoute()
  const current_route = computed(() => {
    return route.name
  })

  const setElement = (el: HTMLDivElement, ref: 't' | 'n') => {
    if (ref === 'n') {
      nav_ref.value = el
    } else {
      target_ref.value = el
    }
  }

  const diff_content_nav = () => {
    const window = useWindowSize()
    const content = useElementSize(nav_ref)

    return window.height.value - content.height.value
  }

  return { target_ref, nav_ref, setElement, diff_content_nav, current_route }
})
