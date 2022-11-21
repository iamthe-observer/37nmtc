<template>
  <div
    class="overflow-y-scroll absolute inset-0 text-xl text-green-600 w-full h-screen"
  >
    <div
      ref="target"
      class="[margin-top:100vh] py-3 px-2 bg-white flex flex-col items-center"
    >
      <h1 v-motion-slide-visible-once-bottom class="text-4xl mt-6 mb-3">
        Welcome to 37 Nursing and Training College
      </h1>

      <!-- about school; init information -->
      <div v-motion-slide-visible-once-bottom class="flex gap-5 w-full mb-8">
        <n-card
          :bordered="false"
          v-for="(data, i) in init_info"
          :title="data.title"
          :key="i"
          >{{ data.body }}</n-card
        >
      </div>

      <!-- divider -->
      <div class="divider"></div>

      <!-- Our Programmes -->

      <h3>Our Programmes</h3>
      <div v-motion-slide-visible-once-bottom class="flex gap-5 w-full mb-8">
        <n-card
          :key="i"
          :bordered="false"
          v-for="(data, i) in program_info"
          :title="data.title"
          >{{ data.body }}</n-card
        >
      </div>

      <div class="divider"></div>

      <div v-motion-slide-visible-once-bottom class="flex mb-8">
        <TabView>
          <TabPanel header="Organization & Governance">
            The school is the ownership of the Ministry of Defence and managed
            by Ghana Armed Forces Medical Services (GAFMS). The Ghana Armed
            Forces Medical Service (GAFMS) is responsible for the Health
            Training institutions, Military Hospitals and the Medical Reception
            Stations (MRS). The Medical Directorate of the GAFMS meets with the
            health training institutions to discuss and disseminate policies and
            plans for future developments.
          </TabPanel>
          <TabPanel header="Accreditation & afliliation">
            Accreditation: The college has a renewable accreditation with the
            National Accreditation Board (NAB) to provide three-year diploma
            courses in Registered General Nursing and Midwifery. Affiliation:
            The college has had affiliation with the University of Science and
            Technology. The college is also a member of the Health Training
            Institutions secretariat.</TabPanel
          >
          <TabPanel header="Admission Policy">
            The school is opened to all Ghanaians who meet the entry
            requirements. There are two (2) programmes run in the College:
            Registered General Nursing and Registered Midwifery. Eligible
            applicant must; 1. be a Ghanaian citizen by birth
          </TabPanel>
        </TabView>

        <!-- student testimonials -->
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
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { NCard } from 'naive-ui'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import { onMounted, ref } from 'vue'
import { useAppStore } from '@/store/appStore'

const target = ref<HTMLDivElement>()
onMounted(() => {
  useAppStore().setElement(target.value!, 't')
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
