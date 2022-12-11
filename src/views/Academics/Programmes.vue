<template>
  <div class="p-4 w-full relative">
    <n-tabs type="bar">
      <n-tab-pane name="RGN" tab="Registered General Nursing">
        <div class="grid grid-cols-2 gap-4">
          <Panel v-for="(lvl, i) in RGNlvls" :key="i" class=""
            ><template #header
              ><span class="">Level {{ lvl.name }} Semester</span></template
            >
            <ul class="text-left pl-5">
              <li v-for="(course, k) in lvl.courses" :key="k">{{ course }}</li>
            </ul>
          </Panel>
        </div>
      </n-tab-pane>

      <n-tab-pane name="RM" tab="Registered Midwifery">
        <div class="grid grid-cols-2 gap-4">
          <Panel v-for="(lvl, i) in RMlvls" :key="i" class=""
            ><template #header
              ><span class="">Level {{ lvl.name }} Semester</span></template
            >
            <ul class="text-left pl-5">
              <li v-for="(course, k) in lvl.courses" :key="k">{{ course }}</li>
            </ul>
          </Panel>
        </div>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui'
import Panel from 'primevue/panel'
import { ref } from 'vue'

interface Level_ {
  name: string
  courses: string[]
}

const RGNlvls = ref<Level_[]>([
  {
    name: '100 1st',
    courses: [
      'Anatomy & Physiology I',
      'Basic Nursing',
      'Microbiology & Infection Prevention/Control',
      'Therapeutic Communication',
      'Professional Adjustment in Nursing',
      'Introductory Sociology',
      'Nursing & Midwifery Informatics',
      'Introductory French Language',
    ],
  },
  {
    name: '100 2nd',
    courses: [
      'Anatomy & Physiology II',
      'Advanced Nursing I',
      'Personal & Environmental Health',
      'First Aid, Emergency & Disaster Management',
      'Health Promotion',
      'Introductory Psychology',
      'Statistics',
    ],
  },
  {
    name: '200 1st',
    courses: [
      'Anatomy & Physiology III',
      'Advanced Nursing II',
      'Medical Nursing I',
      'Surgical Nursing I',
      'Nutrition & Dietetics',
      'Pharmacology, Therapeutics & Pharmacovigilance I',
      'Introductory Sign Language',
    ],
  },
  {
    name: '200 2nd',
    courses: [
      'Introduction to Sign Language',
      'Surgical Nursing II',
      'Traditional Medicine, Gerontology & Home Nursing',
      'Pharmacology, Therapeutics & Pharmacovigilance II',
      'Psychiatric Nursing',
      'Research Methods',
      'Medical Nursing II',
      'Management & Administration in Nursing',
      'Field Practical',
    ],
  },
  {
    name: '300 1st',
    courses: [
      'Patient/Family Centered Care Study',
      'Paediatric Nursing I',
      'Medical Nursing Ill',
      'Surgical Nursing Ill',
      'Obstetric Nursing',
      'Public Health Nursing',
    ],
  },
  {
    name: '300 2nd',
    courses: [
      'Management & Administration in Midwifery',
      'Information & Communications Technology',
      'Advanced Midwifery & Theatre Nursing',
      'Relationship Marketing Strategy & Entrepreneurship',
      'Supply Chain Management',
      'Gynecological COnditions & STIS',
      'Field Practical',
      'Paediatric Nursing II',
      'Community-Based Rehabilitation',
      'Introductory Sign Language',
    ],
  },
])

const RMlvls = ref<Level_[]>([
  {
    name: '100 1st',
    courses: [
      'Anatomy & Physiology I',
      'Basic Nursing',
      'Microbiology & Infection Prevention/Control',
      'Therapeutic Communication',
      'Professional Adjustment in Nursing',
      'Introductory Sociology',
      'Nursing & Midwifery Informatics',
      'Introductory French Language',
      'Professional Adjustment in Midwifery',
    ],
  },
  {
    name: '100 2nd',
    courses: [
      'First Aid, Emergency & Disaster Management',
      'Statistics',
      'Introductory Psychology',
      'Anatomy & Physiology II',
      'Health Promotion',
      'Personal & Environmental Health',
      'Nutrition & Dietetics',
    ],
  },
  {
    name: '200 1st',
    courses: [
      'Anatomy & Physiology of Human Reproductive System & Foetus I',
      'Pharmacology, Therapeutics & Pharmacovigilance',
      'Advanced Nursing',
      'Medical Nursing',
      'Surgical Nursing',
      'Physiology & Management of Normal Pregnancy',
      'Public Health Nursing',
    ],
  },
  {
    name: '200 2nd',
    courses: [
      'Research Methods',
      'Physiology & Management of Normal Labour',
      'Physiology & Management of Normal Puerperium & Neonate',
      'Physiology & Management ot the High Risk Neonate',
      'Anatomy & Physiology of Human Reproductive System & the Foetus II',
      'Community Midwifery',
      'Psychiatric Nursing',
    ],
  },
  {
    name: '300 1st',
    courses: [
      'Supply Chain Management',
      'Physiology & Management of Abnormal Pregnancy',
      'Physiology & Management ot Abnormal Labour',
      'Management of Abnormal Peurperium',
      'Family Planning',
      'Family Centered Maternity Care Study',
      'Public Health Nursing',
    ],
  },
  {
    name: '300 2nd',
    courses: [
      'Relationship Marketing Strategy and Entrepreneurship',
      'Psychiatric Nursing',
      'Public Health Nursing',
      'Management & Administration in Midwifery',
      'Gynecological Conditions & STIS',
      'Advanced Midwifery & Theatre Nursing',
      'Information & Communications Technology',
      'Field Practical',
      'Supply Chain Management',
    ],
  },
])
</script>
