<template>
  <div class="flex w-full justify-between">
    <div
      class="dropdown dropdown-end dropdown-hover transition-all duration-200 ease-out py-3 px-3"
      :key="i"
      v-for="(link, i) in props.links"
    >
      <router-link :to="link.route! ? link.route! : ''">
        <label
          tabindex="0"
          :class="
            isVisible
              ? 'text-black font-bold cursor-pointer px-4 py-2 hover:text-accentclr'
              : 'text-white font-bold cursor-pointer px-4 py-2 hover:text-accentclr'
          "
          >{{ link.name }}</label
        >
      </router-link>
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
          <router-link :to="data.to">{{ data.text }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LinkData } from '@/interfaces'
import { useRouter } from 'vue-router'

// [ ] add library to the links and in the menus there should be e-learning
// [ ] add

const props = defineProps<{ links: LinkData[]; isVisible?: boolean }>()
const router = useRouter()

function goTo(route: string) {
  if (route) {
    router.push(route)
  } else {
    return
  }
}
</script>

<style scoped></style>
