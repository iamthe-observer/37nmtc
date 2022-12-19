import {
  useElementSize,
  useIntersectionObserver,
  useWindowSize,
} from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

export const useAppStore = defineStore('app', () => {
  const nav_ref = ref<HTMLDivElement>()
  const target_ref = ref<HTMLDivElement>()
  const about_content = ref<number>(0)
  const academics_content = ref<number>(0)
  const admission_content = ref<number>(0)
  const students_content = ref<number>(0)
  const loading = ref(true)

  const targetIsVisible = ref(false)
  useIntersectionObserver(target_ref, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      setTimeout(() => {
        targetIsVisible.value = isIntersecting
      }, 200)
    } else {
      targetIsVisible.value = isIntersecting
    }
  })

  watchEffect(() => {
    console.log()
  })

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

  return {
    target_ref,
    targetIsVisible,
    nav_ref,
    current_route,
    about_content,
    academics_content,
    admission_content,
    setElement,
    diff_content_nav,
    students_content,
    loading,
  }
})
