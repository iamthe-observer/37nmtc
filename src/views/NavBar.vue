<template>
  <div
    ref="nav"
    :class="
      ifOnHome_validate
        ? 'h-fit w-full absolute transition-all duration-200 ease-out top-0 flex flex-col bg-primaryclr  border-y-[3px] border-black items-center z-30'
        : 'h-fit w-full absolute top-0 flex flex-col items-center transition-all duration-200 ease-out bg-gradient-to-b from-black to-transparent z-30'
    "
  >
    <div class="relative min-w-full">
      <div
        :class="
          ifOnHome_validate
            ? 'text-white w-full border-b-[3px] border-black flex justify-between py-1'
            : 'text-white w-full border-none flex justify-between py-1'
        "
      >
        <h1
          class="pl-6 py-4 font-bold text-2xl flex gap-3 items-center justify-center"
        >
          <img
            src="@/assets/NTC_Logo.jpg"
            alt=""
            class="w-10 h-10 rounded-sm border-2 border-black"
          /><span class="font-Cyberion text-shadow">37NMTC</span>
        </h1>

        <!-- <div class=""></div> -->
      </div>
      <div
        :class="
          ifOnHome_validate
            ? 'flex items-center justify-center shadow bg-white w-full'
            : 'flex items-center justify-center w-full '
        "
      >
        <RouterLinks
          @isHovered="handleEmit"
          class="text-xl text-black w-4/5 whitespace-nowrap"
          :links="bottom_links"
          :isVisible="ifOnHome_validate"
        />
      </div>

      <!-- dropdown -->
      <div
        v-motion-fade-once
        v-if="ifDropDown && isHovered"
        :class="
          ifOnHome_validate
            ? 'w-full h-60 bg-trebleclr text-black absolute -bottom-[243px] flex flex-col items-center justify-center gap-1 border-b-[3px] border-black group'
            : 'w-full h-60 text-white absolute -bottom-[243px] flex flex-col items-center justify-center gap-1 border-b-[3px] border-t-[3px] border-b-[rgb(24,24,24)] border-t-[rgb(13,13,13)] backdrop-blur-lg bg-[rgba(0,0,0,.3)] group'
        "
      >
        <div
          class="font-Cyberion text-4xl hover-underline-animation cursor-pointer hover:scale-110 transition-all duration-300 ease-out"
          v-for="(link, i) in current_links?.dropNames"
          :key="i"
          @click="handleCLick(current_links!, i)"
        >
          <router-link
            :class="
              ifOnHome_validate
                ? 'text-black hover:text-white hover:font-outline-2'
                : 'text-white hover:text-trebleclr'
            "
            :to="link.to"
            >{{ link.text }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script setup lang="ts">
import RouterLinks from '@/components/RouterLinks.vue'
import { computed, onMounted, ref, watchEffect } from 'vue'
import { LinkData } from '@/interfaces'
import { useAppStore } from '@/store/appStore'
import { storeToRefs } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'
import { useElementHover } from '@vueuse/core'

const nav = ref<HTMLDivElement | null>(null)
const { target_ref } = storeToRefs(useAppStore())
const { current_route } = storeToRefs(useAppStore())
const current_links = ref<LinkData>()
const ifDropDown = ref(false)

const isHovered = useElementHover(nav)

onMounted(() => {
  useAppStore().setElement(nav.value!, 'n')
})

watchEffect(() => {
  console.log({ h: isHovered.value })
})

const handleEmit = (e: LinkData) => {
  console.log(e)

  ifDropDown.value = e.hasDropdown!
  current_links.value = e!
}

const targetIsVisible = ref(false)

const ifOnHome_validate = computed(() => {
  if (targetIsVisible.value && current_route.value === 'home') {
    return true
  } else if (current_route.value !== 'home') {
    return true
  } else {
    return false
  }
})

useIntersectionObserver(target_ref, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    setTimeout(() => {
      targetIsVisible.value = isIntersecting
    }, 500)
  } else {
    targetIsVisible.value = isIntersecting
  }
})

const {
  about_content,
  academics_content,
  admission_content,
  students_content,
} = storeToRefs(useAppStore())

function handleCLick(link: LinkData, i: number) {
  if (link.name === 'About Us') {
    about_content.value = i
  } else if (link.name === 'Academics') {
    academics_content.value = i
  } else if (link.name === 'Admission') {
    admission_content.value = i
  } else if (link.name === 'Students') {
    students_content.value = i
  }
}

const bottom_links = ref<LinkData[]>([
  {
    name: 'Home',
    route: '/',
    hasDropdown: false,
  },
  {
    name: 'About Us',
    hasDropdown: true,
    dropNames: [
      { to: '/about', text: 'About 37 NMTC' },
      { to: '/about', text: 'Philosophy, Goals & Objectives' },
      { to: '/about', text: 'Organization & Governance' },
      { to: '/about', text: 'Management Committees' },
      { to: '/about', text: 'Our Staff' },
    ],
  },
  {
    name: 'Academics',
    hasDropdown: true,
    dropNames: [
      { to: '/academics', text: 'Academic Regulations' },
      { to: '/academics', text: 'Channel of Communications' },
      { to: '/academics', text: 'Programmes & Courses' },
      { to: '/academics', text: 'Academic Facilities' },
      // { to: '/academics', text: 'Academic Calendar' },
      // { to: '/academics', text: 'Teaching Staff' },
    ],
  },
  {
    name: 'Admission',
    hasDropdown: true,
    dropNames: [
      { to: '/admission', text: 'Admitted Students' },
      { to: '/admission', text: 'Entry Requirements' },
      { to: '/admission', text: 'Application Procedures' },
      { to: '/admission', text: 'Financial Policy' },
    ],
  },
  {
    name: 'Students',
    hasDropdown: true,
    dropNames: [
      { to: '/students', text: "Students' Representative Council" },
      { to: '/students', text: 'Campus Life' },
      { to: '/students', text: 'Disciplinary Rules' },
    ],
  },
  {
    name: 'News',
    route: '/news',
    hasDropdown: false,
  },
  {
    name: 'Contact Us',
    route: '/',
    hasDropdown: false,
  },
])
</script>
