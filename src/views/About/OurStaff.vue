<template>
  <div class="p-4 w-full relative">
    <n-tabs
      type="bar"
      :animated="true"
      size="large"
      class="font-Bebas_Neue font-bold text-3xl"
    >
      <n-tab-pane name="teaching staff" tab="Teaching Staff">
        <div class="grid grid-cols-3 gap-8 h-full">
          <div
            v-for="(src, index) in srcList"
            :key="index"
            class="card card-compact w-72 bg-base-100 hover:-translate-y-3 rounded-none hover:striped-bg hover:text-white transition-all duration-300 ease-out hover:box-box border-me font-Outfit"
          >
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Major Captain</h2>
            </div>
          </div>
        </div>
      </n-tab-pane>
      <n-tab-pane name="non-teaching staff" tab="Non-Teaching Staff">
        <div class="grid grid-cols-3 gap-8 h-full">
          <div
            v-for="(src, index) in SRCList"
            :key="index"
            class="card card-compact w-72 bg-base-100 hover:-translate-y-3 rounded-none hover:striped-bg hover:text-white transition-all duration-300 ease-out hover:box-box border-me font-Outfit"
          >
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Major Captain</h2>
            </div>
          </div>
        </div>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui'
import { ref } from 'vue'

const srcList = ref([
  'https://picsum.photos/id/1/100/100',
  'https://picsum.photos/id/2/100/100',
  'https://picsum.photos/id/3/100/100',
  'https://picsum.photos/id/4/100/100',
  'https://picsum.photos/id/5/100/100',
  'https://picsum.photos/id/6/100/100',
  'https://picsum.photos/id/7/100/100',
  'https://picsum.photos/id/8/100/100',
  'https://picsum.photos/id/9/100/100',
  'https://picsum.photos/id/10/100/100',
])
const SRCList = ref([
  'https://picsum.photos/id/11/100/100',
  'https://picsum.photos/id/12/100/100',
  'https://picsum.photos/id/13/100/100',
  'https://picsum.photos/id/14/100/100',
  'https://picsum.photos/id/15/100/100',
  'https://picsum.photos/id/16/100/100',
  'https://picsum.photos/id/17/100/100',
  'https://picsum.photos/id/18/100/100',
  'https://picsum.photos/id/19/100/100',
  'https://picsum.photos/id/21/100/100',
  'https://picsum.photos/id/22/100/100',
  'https://picsum.photos/id/23/100/100',
  'https://picsum.photos/id/24/100/100',
  'https://picsum.photos/id/25/100/100',
  'https://picsum.photos/id/26/100/100',
  'https://picsum.photos/id/27/100/100',
  'https://picsum.photos/id/28/100/100',
])
</script>
