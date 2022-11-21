<template>
  <div class="flex w-full justify-between">
    <div
      class="dropdown dropdown-end dropdown-hover transition-all duration-200 ease-out py-3 px-3 cursor-pointer"
      :key="i"
      v-for="(link, i) in props.links"
    >
      <label
        tabindex="0"
        :class="
          isVisible
            ? 'rounded-2xl text-black font-bold'
            : 'rounded-2xl text-white font-bold'
        "
        >{{ link.name }}</label
      >
      <ul
        v-if="link.hasDropdown"
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-gray-50 text-black font-bold text-sm rounded-md w-52"
      >
        <li :key="k" v-for="(data, k) in props.links[i].dropNames">
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
