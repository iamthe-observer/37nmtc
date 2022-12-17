<template>
  <div class="overflow-y-scroll text-xl relative text-black w-full h-full">
    <NavBar />
    <div
      ref="target"
      class="mt-[100vh] border-t-[3px] border-black pt-3 bg-backgrdclr flex flex-col items-center"
    >
      <!-- home welcome heading -->
      <h1
        v-motion-slide-visible-once-bottom
        class="text-[3em] mt-14 mb-28 font-Cyberion leading-[1em] text-shadow text-primaryclr"
      >
        Welcome to 37 Nursing and Training College
      </h1>

      <!-- about school; init information -->
      <!-- <div v-motion-slide-visible-once-bottom class="flex gap-5 w-full mb-8">
        <n-card
          :bordered="false"
          v-for="(data, i) in init_info"
          :title="data.title"
          :key="i"
          >{{ data.body }}</n-card
        >
      </div> -->
      <div class="flex flex-col gap-8 w-full mb-8 px-8">
        <div v-motion-slide-visible-once-left class="w-full flex p-4">
          <div
            v-motion-fade-visible-once
            class="w-2/5 flex gap-2 text-3xl items-center justify-center font-Cheorcy"
          >
            {{ init_info[0].title }}
          </div>
          <div
            ref="history"
            :style="hclass"
            class="relative flex-1 p-[2rem] bg-gradient-to-l from-transP to-transsP border-me box-box"
          >
            {{ init_info[0].body }}
            <button
              data-tip="Read More"
              class="tooltip tooltip-right font-Outfit absolute bottom-1 left-1 bg-primaryclr border-me p-2"
            >
              <i class="pi pi-arrow-right text-white"></i>
            </button>
          </div>
        </div>

        <div v-motion-slide-visible-once-left class="w-full flex p-4">
          <div
            ref="vision"
            :style="vclass"
            class="flex-1 card-body bg-gradient-to-r from-transS to-transsS border-me box-box"
          >
            {{ init_info[1].body }}
          </div>
          <div
            v-motion-fade-visible-once
            class="w-2/5 flex gap-2 text-3xl items-center justify-center font-Cheorcy"
          >
            {{ init_info[1].title }}
          </div>
        </div>

        <div v-motion-slide-visible-once-left class="w-full flex p-4">
          <div
            v-motion-fade-visible-once
            class="w-2/5 flex gap-2 text-3xl items-center justify-center font-Cheorcy"
          >
            {{ init_info[2].title }}
          </div>
          <div
            ref="mission"
            :style="mclass"
            class="flex-1 card-body bg-gradient-to-l from-transT to-transsT border-me box-box"
          >
            {{ init_info[2].body }}
          </div>
        </div>
      </div>

      <!-- divider -->
      <div class="divider px-8"></div>

      <!-- Our Programmes -->
      <h3
        v-motion-slide-visible-once-bottom
        class="font-Cheorcy mt-20 text-[2em] mb-16"
      >
        Our Programmes
      </h3>
      <div
        v-motion-slide-visible-once-bottom
        class="flex justify-center gap-5 w-full mb-8 px-8"
      >
        <div
          v-for="(data, i) in program_info"
          :key="i"
          class="card w-96 bg- shadow-xl rounded-none hover:box-box hover:translate-y-[-10px] hover:bg-secondaryclr transition-all duration-300 ease-out hover:text-white"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title mx-auto font-Bebas_Neue text-2xl">
              {{ data.title }}
            </h2>
            <p>{{ data.body }}</p>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- more info -->
      <div
        v-motion-slide-visible-once-bottom
        :class="cardClass + 'flex gap-5 my-16 px-8'"
      >
        <CardWithImage>
          <template #head>
            <span>Organization</span><span>&</span><span>Governance</span>
          </template>
          <template #text>
            The school is the ownership of the Ministry of Defence and managed
            by Ghana Armed Forces Medical Services (GAFMS). The Ghana Armed
            Forces Medical Service (GAFMS) is responsible for the Health
            Training institutions, Military Hospitals and the Medical Reception
            Stations (MRS). The Medical Directorate of the GAFMS meets with the
            health training institutions to discuss and disseminate policies and
            plans for future developments.
          </template>
        </CardWithImage>

        <CardWithImage>
          <template #head>
            <span>Accreditation</span><span>&</span><span>Afliliation</span>
          </template>
          <template #text>
            <span class="text-yellow-500">Accreditation</span>: The college has
            a renewable accreditation with the National Accreditation Board
            (NAB) to provide three-year diploma courses in Registered General
            Nursing and Midwifery.
            <span class="text-yellow-500">Affiliation</span>: The college has
            had affiliation with the University of Science and Technology. The
            college is also a member of the Health Training Institutions
            secretariat.
          </template>
        </CardWithImage>

        <CardWithImage>
          <template #head> <span>Admission</span><span>Policy</span> </template>
          <template #text>
            The school is opened to all Ghanaians who meet the entry
            requirements. There are two (2) programmes run in the College:
            Registered General Nursing and Registered Midwifery. Eligible
            applicant must; 1. be a Ghanaian citizen by birth
          </template>
        </CardWithImage>

        <!-- student testimonials apprently held off
        <div class="flex flex-col items-center">
          <h1 class="w-full mb-3 inline-block">Student testimonials</h1>
          <div class="flex">
            <n-card
              :key="i"
              v-for="(data, i) in program_info"
              :title="data.title"
              >{{ data.body }}</n-card
            >
          </div>
        </div> -->
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementHover, useParallax } from '@vueuse/core'
import { onMounted, ref, reactive, watchEffect, computed } from 'vue'
import { useAppStore } from '@/store/appStore'
import CardWithImage from '@/components/CardWithImage.vue'

// [ ] make a composable for this
const history = ref<HTMLDivElement>()
const vision = ref<HTMLDivElement>()
const mission = ref<HTMLDivElement>()
const Phist = useParallax(history)
const Pvisi = useParallax(vision)
const Pmiss = useParallax(mission)
const Hhist = useElementHover(history)
const Hvisi = useElementHover(vision)
const Hmiss = useElementHover(mission)
const hclass = ref()
const vclass = ref()
const mclass = ref()

// const HistoryCardParallax = computed(() => ({
//   transform: `rotateX(${Phist.roll.value * 15}deg) rotateY(${
//     Phist.tilt.value * 15
//   }deg)`,
// }))
// const VisionCardParallax = computed(() => ({
//   transform: `rotateX(${Pvisi.roll.value * 15}deg) rotateY(${
//     Pvisi.tilt.value * 15
//   }deg)`,
// }))
// const MissionCardParallax = computed(() => ({
//   transform: `rotateX(${Pmiss.roll.value * 15}deg) rotateY(${
//     Pmiss.tilt.value * 15
//   }deg)`,
// }))

// watchEffect(() => {
//   if (Hhist.value) {
//     hclass.value = HistoryCardParallax.value
//   } else {
//     hclass.value = {
//       transform: `rotateX(${0 * 20}deg) rotateY(${0 * 20}deg)`,
//     }
//   }
// })
// watchEffect(() => {
//   if (Hvisi.value) {
//     vclass.value = VisionCardParallax.value
//   } else {
//     vclass.value = {
//       transform: `rotateX(${0 * 20}deg) rotateY(${0 * 20}deg)`,
//     }
//   }
// })
// watchEffect(() => {
//   if (Hmiss.value) {
//     mclass.value = MissionCardParallax.value
//   } else {
//     mclass.value = {
//       transform: `rotateX(${0 * 20}deg) rotateY(${0 * 20}deg)`,
//     }
//   }
// })

const target = ref<HTMLDivElement>()
const cardClass = ref<string>()

onMounted(async () => {
  await useAppStore().setElement(target.value!, 't')
  cardClass.value = 'min-h-[' + useAppStore().diff_content_nav() + 'px] '
})

const program_info = [
  {
    title: 'Registered Gen. Nursing',
    body: 'The programme is to enable 37 NMTC to produce qualified professional nurses who will contribute creditably to the health care delivery in Ghana.',
  },
  {
    title: 'Registered Midwifery',
    body: 'The RM has courses of study leading to a Diploma certification. It has a six (6) semester course structure.',
  },
  {
    title: 'Accreditation',
    body: 'TThe college has a renewable accreditation with the National Accreditation Board (NAB) to provide three-year diploma courses in Registered General Nursing and Midwifery.',
  },
]

const init_info = [
  {
    title: 'History',
    body: "The 37 Nursing and Midwifery Training College, a training wing ot the 37 Military Hospital, was established as a department in July 1941, the same year the main hospital was built. The college was then known as Nursing Orderlies' Training Wing (NOTW).",
  },
  {
    title: 'Vision Statement',
    body: 'To be the best Military Health Training Institution in West Africa, relying on efficient and effective workforce, using appropriate tecnnology witn tne aim of providing competent nealtn professionals.',
  },
  {
    title: 'Mission Statement',
    body: 'To promote high quality nursing and midwifery training of soldiers and civilians, to make them competent, operational-ready and skilful healthcare service providers through technology based learning and teaching serving on land, sea and air.',
  },
]
</script>

<style scoped>
.n-card {
  max-width: 100%;
}
</style>
