<template>
  <div
    ref="nav"
    :class="
      ifOnHome_validate
        ? 'h-fit w-full sticky transition-all duration-200 ease-out top-0 flex flex-col bg-primaryclr items-center z-30'
        : 'h-fit w-full sticky top-0 flex flex-col items-center transition-all duration-200 ease-out bg-gradient-to-b from-black to-transparent z-30'
    "
  >
    <div class="relative min-w-full">
      <div class="text-white w-full flex justify-between">
        <router-link to="/">
          <h1
            class="pl-6 py-2 font-bold text-2xl flex gap-3 items-center justify-center"
          >
            <img
              src="@/assets/NTC_Logo.jpg"
              alt=""
              class="w-10 h-10 rounded-sm border-2 border-black"
            /><span class="font-Cyberion text-shadow">37NMTC</span>
          </h1>
        </router-link>

        <!-- <div class=""></div> -->
      </div>

      <div
        :class="
          ifOnHome_validate
            ? 'flex items-center justify-center shadow bg-white w-full relative'
            : 'flex items-center justify-center w-full relative'
        "
      >
        <RouterLinks
          @isHovered="handleEmit"
          class="text-xl text-black w-4/5 whitespace-nowrap"
          :links="bottom_links"
          :isVisible="ifOnHome_validate"
        />

        <!-- dropdown -->
        <div
          v-motion-fade
          v-if="ifDropDown && isHovered"
          :class="
            ifOnHome_validate
              ? 'w-full p-7 h-fit bg-secondaryclr absolute top-[100%] flex flex-col items-center justify-center gap-1 group'
              : 'w-full p-7 h-fit text-white absolute top-[100%] flex flex-col items-center justify-center gap-1 border-b-[3px] border-t-[3px] border-b-[rgb(24,24,24)] border-t-[rgb(13,13,13)] backdrop-blur-lg bg-[rgba(0,0,0,.3)] group'
          "
        >
          <div
            class="font-Poppins text-xl hover-underline-animation_ cursor-pointer hover:scale-110 transition-all duration-300 ease-out"
            v-for="(link, i) in current_links?.dropNames"
            :key="i"
            @click="handleCLick(current_links!, i)"
          >
            <router-link
              @click="loading = true"
              :class="
                ifOnHome_validate
                  ? 'text-white hover:text-[rgb(185,185,185)]'
                  : 'text-white hover:text-[rgb(185,185,185)]'
              "
              :to="link.to"
              >{{ link.text }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-underline-animation_ {
  display: inline-block;
  position: relative;
}

.hover-underline-animation_:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation_:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>

<script setup lang="ts">
import RouterLinks from '@/components/RouterLinks.vue'
import { computed, ref } from 'vue'
import { LinkData } from '@/interfaces'
import { useAppStore } from '@/store/appStore'
import { storeToRefs } from 'pinia'
import { useElementHover } from '@vueuse/core'

const { loading } = storeToRefs(useAppStore())

const nav = ref<HTMLDivElement | null>(null)
const { targetIsVisible } = storeToRefs(useAppStore())
const { current_route } = storeToRefs(useAppStore())
const current_links = ref<LinkData>()
const ifDropDown = ref(false)

const isHovered = useElementHover(nav)

const handleEmit = (e: LinkData) => {
  ifDropDown.value = e.hasDropdown!
  current_links.value = e!
}

const ifOnHome_validate = computed(() => {
  if (targetIsVisible.value && current_route.value === 'home') {
    return true
  } else if (current_route.value !== 'home') {
    return true
  } else {
    return false
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
