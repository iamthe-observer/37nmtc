<template>
  <div class="flex w-full justify-between">
    <div
      class="dropdown dropdown-hover transition-all duration-200 ease-out py-3 px-3 hover:bg-black cursor-pointer"
      :key="i"
      v-for="(link, i) in props.links"
    >
      <label tabindex="0" class="rounded-2xl text-white font-bold">{{
        link.name
      }}</label>
      <ul
        v-if="link.hasDropdown"
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-gray-50 text-black font-bold text-sm rounded-md w-52"
      >
        <li>
          <a>Item {{ i }}</a>
        </li>
        <li>
          <a>Item {{ i }}</a>
        </li>
        <li>
          <a>Item {{ i }}</a>
        </li>
        <li>
          <a>Item {{ i }}</a>
        </li>
        <li>
          <a>Item {{ i }}</a>
        </li>
        <li>
          <a>Item {{ i }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LinkData } from '@/interfaces'

const props = defineProps<{ links: LinkData[] }>()
</script>

<style scoped></style>
