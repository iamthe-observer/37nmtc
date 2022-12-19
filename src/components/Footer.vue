<template>
  <div
    class="bg-primaryclr w-full min-h-fit border-t-[10px] border-black px-5 py-4 flex gap-8"
  >
    <div
      class="bg-white w-[30%] text-black p-8 border-[3px] border-black m-3 box-box flex items-center flex-col font-Outfit"
    >
      <!-- newsletters -->
      <h2 class="font-Cyberion font-black uppercase text-2xl mb-3">
        Subscribe to our newsletters
      </h2>
      <input
        class="bg-black text-white text-center mb-3 hover:outline-none transition-all py-1 duration-500 ease-out hover:bg-[#363636] outline outline-2 outline-white font-Aero"
        type="email"
        name="email"
        placeholder="Enter email"
      />

      <!-- <button
          class="btn bg-black rounded-lg text-xl tracking-wide font-Outfit gap-2 border-white border-2"
        >
          Subscribe
          <i class="pi pi-send"></i>
        </button> -->

      <neo-button :label="'Subscribe'" />

      <n-divider dashed />

      <!-- feedback -->
      <h2 class="font-Cyberion font-black uppercase text-2xl mb-3">Feedback</h2>
      <textarea
        class="bg-black text-white text-center mb-3 hover:outline-none transition-all py-1 duration-500 ease-out hover:bg-[#363636] outline outline-2 outline-white"
        type="text"
        name="feedback"
        placeholder="Give us your feedback"
      ></textarea>

      <neo-button
        :label="'Send'"
        :icon="'pi pi-send text-bold pr-2'"
      ></neo-button>
    </div>

    <!-- other info -->
    <div
      class="flex-1 bg-white text-black p-8 border-[3px] border-black m-3 box-box flex items-start justify-between gap-3 font-Outfit"
    >
      <!-- links -->
      <div ref="links1" class="flex flex-col w-[40%]">
        <h2 class="w-fit font-Cyberion font-black text-[1.em] text-primaryclr">
          The University
        </h2>
        <div class="flex flex-col items-start text-xl font-Bebas_Neue">
          <router-link to="" class="hover-underline-animation"
            >About Us</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >Management & Staff</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >Faculty Members</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >Programmes & Courses</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >Academic Policies</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >Admission Processes</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >Admission Requirements</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >Campus Life</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >Staff Portal</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >Student Information Portal</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >Contact Us</router-link
          >
        </div>
      </div>

      <!-- affiliations and Business Relationships -->
      <div
        ref="links2"
        class="flex flex-col w-[40%] flex-1 text-xl font-Bebas_Neue"
      >
        <h2
          class="w-fit text-[1.em] text-left font-Cyberion font-black text-primaryclr"
        >
          Affiliations and Business Relationships
        </h2>
        <div class="flex flex-col items-start text-xl">
          <router-link to="" class="hover-underline-animation"
            >University of Cape Coast</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >Kwame Nkrumah University [KNUST]</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >Health Training Institutions</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >37 Military Hospital</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >Ghana Armed Forces Medical Service</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >Ministry of Health
          </router-link>
          <router-link to="" class="hover-underline-animation"
            >Nursing & Midwifery Council of Ghana</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >School of Nursing ( University of Ghana)</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >Korle-Bu Teaching Hospital</router-link
          >
          <router-link to="" class="hover-underline-animation"
            >JHPIEGO Ghana</router-link
          >
        </div>
      </div>
    </div>
  </div>

  <!-- end footer -->
  <div
    class="w-full font-Bebas_Neue bg-black text-white px-1 py-2 whitespace-nowrap overflow-hidden"
  >
    <span>
      2022 &copy; 37 Nursing & Midwifery Training College, 37 Military Hospital,
      Neghelli Barracks. All Rights Reserved | +233 302 769 369 |
      info@37nmtc.com
    </span>
  </div>
</template>

<script setup lang="ts">
import { NDivider } from 'naive-ui'
import { onMounted, ref } from 'vue'
import NeoButton from '@/components/NeoButton.vue'

const links1 = ref<HTMLDivElement>()
const links2 = ref<HTMLDivElement>()

onMounted(() => {
  let lk1 = links1.value?.children[1].children
  let lk2 = links2.value?.children[1].children

  for (let ii = 0; ii < lk1!.length; ii++) {
    const lk = lk1![ii]
    lk.classList.add('hover:text-secondaryclr')
  }
  for (let jj = 0; jj < lk2!.length; jj++) {
    const lk = lk2![jj]
    lk.classList.add('hover:text-secondaryclr')
  }

  // console.log(lk1, lk2)
})
</script>
