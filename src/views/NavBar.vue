<template>
  <div
    ref="nav"
    class="h-36 w-full absolute top-0 flex flex-col items-center bg-gradient-to-b from-black to-transparent z-30"
  >
    <div class="py-2 text-white w-full flex justify-between">
      <h1 class="pl-6 font-bold text-2xl flex gap-2 items-center">
        <img
          src=""
          alt=""
          class="w-8 h-8 rounded-md border-2 border-white"
        /><span>37NMTC</span>
      </h1>

      <div class=""><RouterLinks class="text-sm" :links="top_links" /></div>
    </div>
    <div class="flex items-center">
      <RouterLinks class="text-2xl" :links="bottom_links" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RouterLinks from '@/components/RouterLinks.vue'
import { onMounted, ref } from 'vue'
import { LinkData } from '@/interfaces'
import { useAppStore } from '@/store/appStore'
import { useElementSize } from '@vueuse/core'

const nav = ref<HTMLDivElement | null>(null)
const { width, height } = useElementSize(nav)

onMounted(() => {
  useAppStore().setNavDimensions({ width: width.value, height: height.value })
})
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
