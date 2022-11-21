import { useIntersectionObserver } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const nav_ref = ref<HTMLDivElement>()
  const target_ref = ref<HTMLDivElement>()

  const setElement = (el: HTMLDivElement, ref: 't' | 'n') => {
    if (ref === 'n') {
      nav_ref.value = el
    } else {
      target_ref.value = el
    }
  }

  return { target_ref, nav_ref, setElement }
})
