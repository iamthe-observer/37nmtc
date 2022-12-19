<template>
  <div class="flex w-full justify-between">
    <div
      ref="linker"
      :class="
        isVisible
          ? 'group hover:outline hover:outline-[3px] hover:striped-bg transition-all duration-200 ease-out py-3 px-3'
          : 'transition-all duration-200 ease-out py-3 px-3'
      "
      :key="i"
      v-for="(link, i) in props.links"
    >
      <router-link :to="link.route! ? link.route! : ''">
        <label
          tabindex="0"
          @click="link.route! ? (loading = true) : (loading = false)"
          :class="
            isVisible
              ? 'text-black group-hover:text-white font-Outfit font-bold cursor-pointer px-4 py-2'
              : 'text-white hover:text-gray-100 font-Outfit font-bold cursor-pointer px-4 py-2'
          "
          >{{ link.name }}</label
        >
      </router-link>
      <!-- <ul
        v-if="link.hasDropdown"
        tabindex="0"
        class="dropdown-content menu p-1 bg-gray-50 text-black text-left font-bold text-sm rounded-md cursor-pointer w-fit mt-3"
      >
        <li
          :key="k"
          v-for="(data, k) in props.links[i].dropNames"
          class="w-full whitespace-nowrap"
          @click="handleCLick(link, k)"
        >
          <router-link :to="data.to">{{ data.text }}</router-link>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { LinkData } from '@/interfaces'
import { onMounted, ref } from 'vue'
import { useAppStore } from '@/store/appStore'
import { storeToRefs } from 'pinia'

const { loading } = storeToRefs(useAppStore())
// [ ] add library to the links and in the menus there should be e-learning
// [x] fix navbar overlaying the scrollbar
// [x] sroll back to top after clicking on a side link or nav link
// [x] add loading screen animation
const props = defineProps<{ links: LinkData[]; isVisible?: boolean }>()

const emit = defineEmits(['isHovered'])
const linker = ref<HTMLDivElement[]>()

onMounted(() => {
  linker.value!.forEach(link => {
    link.addEventListener('mouseover', () => {
      let whatLink = props.links.filter(propLink => {
        if (link.innerText.includes(propLink.name)) {
          return propLink.name
        }
      })
      emit('isHovered', whatLink[0])
    })
  })
})
</script>

<style scoped></style>
