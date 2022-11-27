<template>
  <div class="bg-backgrdclr">
    <div
      class="bg-secondaryclr w-full min-h-full rounded-tr-3xl px-5 py-4 flex gap-8 rounded-tl-3xl"
    >
      <div
        class="bg-black w-[30%] text-white p-8 rounded-lg m-3 subscribe-box flex items-center flex-col font-Outfit"
      >
        <!-- newsletters -->
        <h2 class="font-Bebas_Neue text-3xl mb-3">
          Subscribe to our newsletters
        </h2>
        <input
          class="bg-black text-white text-center rounded-lg mb-3 hover:outline-none transition-all py-1 duration-500 ease-out hover:bg-[#363636] outline outline-2 outline-white"
          type="email"
          name="email"
          placeholder="Enter email"
        />

        <button
          class="btn bg-black rounded-lg text-xl tracking-wide font-Outfit gap-2 border-white border-2"
        >
          Subscribe
          <i class="pi pi-send"></i>
        </button>

        <n-divider dashed />

        <!-- feedback -->
        <h2 class="font-Bebas_Neue text-3xl mb-3">Feedback</h2>
        <textarea
          class="bg-black text-white text-center rounded-lg mb-3 hover:outline-none transition-all py-1 duration-500 ease-out hover:bg-[#363636] outline outline-2 outline-white"
          type="text"
          name="feedback"
          placeholder="Give us your feedback"
        ></textarea>

        <button
          class="btn bg-black rounded-lg text-xl tracking-wide font-Outfit gap-2 border-white border-2"
        >
          Send
          <i class="pi pi-send"></i>
        </button>
      </div>

      <!-- other info -->
      <div
        class="flex-1 bg-black text-white p-8 rounded-lg m-3 subscribe-box flex items-start justify-between gap-3 font-Outfit"
      >
        <!-- links -->
        <div ref="links1" class="flex flex-col w-[40%]">
          <h2
            class="w-fit font-Big_Shoulders_Display text-[1.2em] font-bold text-primaryclr"
          >
            The University
          </h2>
          <div class="flex flex-col items-start text-lg">
            <router-link to="" class="">About Us</router-link>
            <router-link to="" class="">Management & Staff</router-link>
            <router-link to="" class="">Faculty Members</router-link>
            <router-link to="" class="">Programmes & Courses</router-link>
            <router-link to="" class="">Academic Policies</router-link>
            <router-link to="" class="">Admission Processes</router-link>
            <router-link to="" class="">Admission Requirements</router-link>
            <router-link to="" class="">Campus Life</router-link>
            <router-link to="" class="">Staff Portal</router-link>
            <router-link to="" class="">Student Information Portal</router-link>
            <router-link to="" class="">Contact Us</router-link>
          </div>
        </div>

        <!-- affiliations and Business Relationships -->
        <div ref="links2" class="flex flex-col w-[40%] flex-1">
          <h2
            class="w-fit font-Big_Shoulders_Display text-[1.2em] font-bold text-primaryclr"
          >
            Affiliations and Business Relationships
          </h2>
          <div class="flex flex-col items-start text-lg">
            <router-link to="" class="">University of Cape Coast</router-link>
            <router-link to="" class=""
              >Kwame Nkrumah University of Science and Technology</router-link
            >
            <router-link to="" class=""
              >Health Training Institutions</router-link
            >
            <router-link to="" class="">37 Military Hospital</router-link>
            <router-link to="" class=""
              >Ghana Armed Forces Medical Service</router-link
            >
            <router-link to="" class="">Ministry of Health </router-link>
            <router-link to="" class=""
              >Nursing & Midwifery Council of Ghana</router-link
            >
            <router-link to="" class=""
              >School of Nursing ( University of Ghana)</router-link
            >
            <router-link to="" class="">Korle-Bu Teaching Hospital</router-link>
            <router-link to="" class="">JHPIEGO Ghana</router-link>
          </div>
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

const links1 = ref<HTMLDivElement>()
const links2 = ref<HTMLDivElement>()

onMounted(() => {
  let lk1 = links1.value?.children[1].children
  let lk2 = links2.value?.children[1].children

  for (let ii = 0; ii < lk1!.length; ii++) {
    const lk = lk1![ii]
    lk.classList.add('hover:text-trebleclr')
  }
  for (let jj = 0; jj < lk2!.length; jj++) {
    const lk = lk2![jj]
    lk.classList.add('hover:text-trebleclr')
  }

  // console.log(lk1, lk2)
})
</script>

<style scoped>
.subscribe-box {
  box-shadow: -12px 12px 0px 0px #85081d;
  -webkit-box-shadow: -12px 12px 0px 0px #85081d;
  -moz-box-shadow: -12px 12px 0px 0px #85081d;
}
</style>
