<template>
  <div
    ref="nav"
    :class="
      ifOnHome_validate
        ? 'h-fit w-full absolute transition-all duration-200 ease-out top-0 flex flex-col bg-primaryclr items-center z-30'
        : 'h-fit w-full absolute top-0 flex flex-col items-center transition-all duration-200 ease-out bg-gradient-to-b from-black to-transparent z-30'
    "
  >
    <div class="text-white w-full flex justify-between py-1">
      <h1
        class="pl-6 font-bold text-2xl flex gap-2 items-center justify-center"
      >
        <img
          src="@/assets/NTC_Logo.jpg"
          alt=""
          class="w-8 h-8 rounded-sm border-2 border-white"
        /><span class="font-Big_Shoulders_Display">37NMTC</span>
      </h1>

      <div class=""></div>
    </div>
    <div
      :class="
        ifOnHome_validate
          ? 'flex items-center justify-center shadow bg-white w-full'
          : 'flex items-center justify-center w-full'
      "
    >
      <RouterLinks
        class="text-xl text-black w-4/5 font-Big_Shoulders_Display whitespace-nowrap"
        :links="bottom_links"
        :isVisible="ifOnHome_validate"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import RouterLinks from '@/components/RouterLinks.vue'
import { computed, onMounted, ref } from 'vue'
import { LinkData } from '@/interfaces'
import { useAppStore } from '@/store/appStore'
import { storeToRefs } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'

const nav = ref<HTMLDivElement | null>(null)
const { target_ref } = storeToRefs(useAppStore())
const { current_route } = storeToRefs(useAppStore())

onMounted(() => {
  useAppStore().setElement(nav.value!, 'n')
})

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

<style scoped>
.nav_bar {
  top: 0;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(226, 226, 226, 0.384);
  backdrop-filter: blur(5px);
  padding: 20px;
  min-width: max-content;
}

.logo {
  width: 50px;
  border-radius: 50px;
}

.my_name {
  font-size: 1.2em;
}

.avatar_img {
  width: 400px;
  object-fit: cover;
  border-radius: 20px;
  aspect-ratio: 1;
  transition: all 0.2s ease-out;
  outline: 1px solid rgb(209, 209, 209);
}

.avatar_img:hover {
  outline: 10px solid rgb(209, 209, 209);
}

.head_name {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav_links {
  /* width: 100%; */
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: space-evenly;
  gap: 15px;
}

.link:hover {
  color: rgb(189, 189, 189);
}

.link {
  transition: all 0.2s linear;
  text-decoration: none;
  color: black;
}

.login_btn,
.register_btn {
  background: black;
  color: white;
  padding: 15px 30px;
  border-radius: 10px;
}
</style>
