<template>
  <div class="flex w-full justify-between">
    <div
      class="dropdown dropdown-end dropdown-hover transition-all duration-200 ease-out py-3 px-3"
      :key="i"
      v-for="(link, i) in props.links"
    >
      <label
        tabindex="0"
        :class="
          isVisible
            ? 'text-black font-bold cursor-pointer px-4 py-2 hover:text-accentclr'
            : 'text-white font-bold cursor-pointer hover:text-accentclr'
        "
        >{{ link.name }}</label
      >
      <ul
        v-if="link.hasDropdown"
        tabindex="0"
        class="dropdown-content menu p-1 bg-gray-50 text-black text-left font-bold text-sm rounded-md cursor-pointer w-fit mt-2"
      >
        <li
          :key="k"
          v-for="(data, k) in props.links[i].dropNames"
          class="w-full whitespace-nowrap"
        >
          <a>{{ data }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LinkData } from '@/interfaces'

//[ ] add library to the links and in the menus there should be e-learning

const props = defineProps<{ links: LinkData[]; isVisible?: boolean }>()
</script>

<style scoped></style>
