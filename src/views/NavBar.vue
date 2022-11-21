<template>
  <div
    ref="nav"
    :class="
      targetIsVisible
        ? 'h-fit w-full absolute transition-all duration-200 ease-out top-0 flex flex-col bg-mauve items-center z-30'
        : 'h-fit w-full absolute top-0 flex flex-col items-center transition-all duration-200 ease-out bg-gradient-to-b from-black to-transparent z-30'
    "
  >
    <div class="text-white w-full flex justify-between">
      <h1 class="pl-6 font-bold text-2xl flex gap-2 items-center">
        <img
          src=""
          alt=""
          class="w-8 h-8 rounded-md border-2 border-white"
        /><span>37NMTC</span>
      </h1>

      <div class="">
        <RouterLinks class="text-sm" :links="top_links" />
      </div>
    </div>
    <div
      :class="
        targetIsVisible
          ? 'flex items-center justify-center shadow bg-white w-full'
          : 'flex items-center justify-center w-full'
      "
    >
      <RouterLinks
        class="text-xl text-black w-4/5"
        :links="bottom_links"
        :isVisible="targetIsVisible"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import RouterLinks from '@/components/RouterLinks.vue'
import { onMounted, ref } from 'vue'
import { LinkData } from '@/interfaces'
import { useAppStore } from '@/store/appStore'
import { storeToRefs } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'

const nav = ref<HTMLDivElement | null>(null)
const { nav_ref, target_ref } = storeToRefs(useAppStore())

onMounted(() => {
  useAppStore().setElement(nav.value!, 'n')
})

const targetIsVisible = ref(false)

useIntersectionObserver(target_ref, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    setTimeout(() => {
      targetIsVisible.value = isIntersecting
      console.log(targetIsVisible.value)
    }, 500)
  } else {
    targetIsVisible.value = isIntersecting
    console.log(targetIsVisible.value)
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
    route: '/',
    hasDropdown: true,
    dropNames: [
      'About 37 NMTC',
      'Philosophy, Goals & Objectives',
      'Management',
      'Management Committees',
      'Our Staff',
      'Partner & Affiliates',
    ],
  },
  {
    name: 'Academics',
    route: '/',
    hasDropdown: true,
  },
  {
    name: 'Admission',
    route: '/',
    hasDropdown: true,
  },
  {
    name: 'Students',
    route: '/',
    hasDropdown: true,
  },
  {
    name: 'News',
    route: '/',
    hasDropdown: true,
  },
  {
    name: 'Contact Us',
    route: '/',
    hasDropdown: true,
  },
])
const top_links = ref<LinkData[]>([
  {
    name: 'Home',
    route: '/',
    hasDropdown: false,
  },
  {
    name: 'About Us',
    route: '/',
    hasDropdown: true,
  },
  {
    name: 'Academics',
    route: '/',
    hasDropdown: true,
  },
  {
    name: 'Admission',
    route: '/',
    hasDropdown: true,
  },
  {
    name: 'Students',
    route: '/',
    hasDropdown: true,
  },
  {
    name: 'Latest News',
    route: '/',
    hasDropdown: true,
  },
  {
    name: 'Contact Us',
    route: '/',
    hasDropdown: true,
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
