<template>
  <div class="relative top-0 left-0 right-0 z-50">
    <div
      class="bg-white py-3 flex items-center min-h-16 justify-between"
      ref="navbar"
    >
      <!-- NMTC LOGO -->
      <main
        class="rounded-lg w-[18em] px-2 py-1 h-full bg-white text-black flex items-center text-center transition-all duration-200 hover:bg-white hover:shadow-lg hover:scale-105 cursor-pointer"
      >
        <img src="../assets/logo.png" class="w-20 aspect-auto" />
        <span class="text-sm font-bold"
          >37 Nursing and MidWifery Training College</span
        >
      </main>

      <!-- ACTIONS -->
      <div class="flex gap-3 mr-10">
        <button class="btn bg-[#85081d] text-white border-none">Student</button>
        <button class="btn bg-[#85081d] text-white border-none">Staff</button>
      </div>
    </div>
    <!-- ROUTER LINKS -->
    <RouterLinks
      class="px-20 bg-[#85081d] w-full justify-between shadow-xl"
      :links="links"
    />
  </div>
</template>

<script setup lang="ts">
import RouterLinks from '@/components/RouterLinks.vue'
import { ref } from 'vue'
import { LinkData } from '@/interfaces'

const links = ref<LinkData[]>([
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
</script>
