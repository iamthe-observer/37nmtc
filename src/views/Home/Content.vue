<template>
  <div
    class="overflow-y-scroll absolute inset-0 text-xl text-black w-full h-screen"
  >
    <div class="" ref="target">
      <div
        class="[margin-top:100vh] rounded-tr-3xl rounded-tl-3xl px-6 py-3 bg-backgrdclr flex flex-col items-center"
      >
        <!-- home welcome heading -->
        <h1
          v-motion-slide-visible-once-bottom
          class="text-[3em] mt-14 mb-28 font-Bebas_Neue"
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
        <div class="flex flex-col gap-8 w-full mb-8">
          <div v-motion-slide-visible-once-left class="w-full flex p-4">
            <div
              v-motion-fade-visible-once
              class="w-2/5 flex gap-2 text-3xl items-center justify-center font-Yeseva_One"
            >
              {{ init_info[0].title }}
            </div>
            <div
              class="relative flex-1 p-[2rem] bg-gradient-to-l from-transP to-transsP rounded-md shadow-2xl"
            >
              {{ init_info[0].body }}
              <button
                data-tip="Read More"
                class="tooltip tooltip-right font-Outfit btn absolute -bottom-5 -left-5 bg-primaryclr border-none"
              >
                <i class="pi pi-arrow-right text-white"></i>
              </button>
            </div>
          </div>

          <div v-motion-slide-visible-once-left class="w-full flex p-4">
            <div
              class="flex-1 card-body bg-gradient-to-r from-transS to-transsS rounded-md shadow-2xl"
            >
              {{ init_info[1].body }}
            </div>
            <div
              v-motion-fade-visible-once
              class="w-2/5 flex gap-2 text-3xl items-center justify-center font-Yeseva_One"
            >
              {{ init_info[1].title }}
            </div>
          </div>

          <div v-motion-slide-visible-once-left class="w-full flex p-4">
            <div
              v-motion-fade-visible-once
              class="w-2/5 flex gap-2 text-3xl items-center justify-center font-Yeseva_One"
            >
              {{ init_info[2].title }}
            </div>
            <div
              class="flex-1 card-body bg-gradient-to-l from-transT to-transsT rounded-md shadow-2xl"
            >
              {{ init_info[2].body }}
            </div>
          </div>
        </div>

        <!-- divider -->
        <div class="divider"></div>

        <!-- Our Programmes -->
        <h3
          v-motion-slide-visible-once-bottom
          class="font-Bebas_Neue mt-8 mb-6 text-[2em]"
        >
          Our Programmes
        </h3>
        <div
          v-motion-slide-visible-once-bottom
          class="flex justify-center gap-5 w-full mb-8"
        >
          <div
            v-for="(data, i) in program_info"
            class="card w-96 bg-base-100 shadow-xl rounded-lg"
          >
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title mx-auto font-Yeseva_One">
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
          :class="cardClass + 'flex gap-5 my-16'"
        >
          <CardWithImage>
            <template #head>
              <span>Organization</span><span>&</span><span>Governance</span>
            </template>
            <template #text>
              The school is the ownership of the Ministry of Defence and managed
              by Ghana Armed Forces Medical Services (GAFMS). The Ghana Armed
              Forces Medical Service (GAFMS) is responsible for the Health
              Training institutions, Military Hospitals and the Medical
              Reception Stations (MRS). The Medical Directorate of the GAFMS
              meets with the health training institutions to discuss and
              disseminate policies and plans for future developments.
            </template>
          </CardWithImage>

          <CardWithImage>
            <template #head>
              <span>Accreditation</span><span>&</span><span>Afliliation</span>
            </template>
            <template #text>
              Accreditation: The college has a renewable accreditation with the
              National Accreditation Board (NAB) to provide three-year diploma
              courses in Registered General Nursing and Midwifery. Affiliation:
              The college has had affiliation with the University of Science and
              Technology. The college is also a member of the Health Training
              Institutions secretariat.
            </template>
          </CardWithImage>

          <CardWithImage>
            <template #head>
              <span>Admission</span><span>Policy</span>
            </template>
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
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAppStore } from '@/store/appStore'
import CardWithImage from '@/components/CardWithImage.vue'

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
