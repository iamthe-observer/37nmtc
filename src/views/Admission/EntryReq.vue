<template>
  <div class="p-4 w-full relative text-center">
    <h1 class="text-[3em] font-Cheorcy mt-16 mb-20">Admission Policy</h1>

    <div class="flex-col flex gap-16">

      <p
        class="hover:conta box-box hover:-translate-y-1 hover:dotted-bg hover:text-white transition-all duration-300 ease-out px-8 py-5 border-[3px] border-black bg-white text-left"
      >
The school is opened to all Ghanaians who meet the entry requirements. There are two (2) programmes run in the College:
    <ol class="list-disc pl-10">
      <li>Registered General Nursing</li>
      <li>Registered Midwifery</li>

    </ol>      </p>

      <NeoFieldsetOpen><template #legend>General Entry Requirements</template>
<template #content>        <div class="text-left">
          <p>
Eligible applicant must:          </p>

          <ol class="list-disc pl-10">
            <li>
be a Ghanaian citizen by birth
            </li>
            <li>
be of good character
            </li>
            <li>
be not less than 18 years of age and not more than 35 years.
            </li>
            <li>have served for minimum of five years (if an Ministry of Defence staff)
            </li>
            <li>
            have applied tor higher education(if a Ministry of Defence staff)

            </li>
          </ol>
        </div>
</template>
      </NeoFieldsetOpen>

      <NeoFieldset
        ><template #legend>Admission Process</template>
        <template #content><div class="text-left">
          <p>Prospective candidates must:</p>
          <ol class="list-disc pl-10">
            <li>meet tne basic programme requirement as specified by the Nursing and Midwifery Council of Ghana and Ministry of Health entry requirements.</li>
            <li>purcnase the NMTC, 37 Military Hospital online application form.</li>
            <li>be shortlisted With the name appearing on tne notice board.</li>
            <li>have passed an entrance examination conducted by the College.</li>
            <li>have gone througn a selection interview.</li>
            <li>be offered acmjssion after having passed tne selection interview.</li>
          </ol>
<p>Note: Waiting list shall not be transferred to next admission period. The admission requirement is in line with the GAFMS/Ministry of Health policy.
        </p>
</div></template>
      </NeoFieldset>

      <NeoFieldset>
      <template #legend>Entry Requirements</template>
      <template #content><div class="text-left">
      <ol class="list-decimal pl-10">
      <li>The programme has been designed for SSS/SHS graduates with credits in WASSCE/SSSCE with a requisite aggregate 24/36 or better.</li>

      <li>A Credit in three core subjects, A1 — C6 / A — D in English Language, Integrated Science and Mathematics and credits in any three elective
subjects from the following:
      <ol class="list-[square] pl-10">
        <li v-for="(entreq,i) in entry_req_arr" :key="i">
        <p class="font-bold text-primaryclr">{{entreq.title}}</p>
          <ol class="list-disc pl-10">
            <li v-for="(item,k) in entreq.list" :key="k">{{item}}</li>
          </ol>
        </li>
      </ol>
      </li>
      <li>Age limit — 18years to 35years</li>
      <li>He She should not have any criminal record</li>
      <li>He She be of good health</li>
      <li>He She must pass a selection interview</li>
      </ol>
      </div></template>
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Orientation</template>
        <template #content><div class="text-left">
          <p>Students must avail themselves to orientation when necessary</p>
</div></template>
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Medical Examination</template>
        <template #content><div class="text-left">
          <p>Students must avail themselves to take prescribed medical examinations when necessary.</p>
</div></template>
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Indexing</template>
        <template #content><div class="text-left">
          <p>All fresh students will have to be indexed with the Nursing and Midwifery Council of Ghana before the first Semester ends. Students who do
not qualify for indexing will be withdrawn from the school.</p>
</div></template>
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Matriculation</template>
        <template #content><div class="text-left">
          <p>A matriculation ceremony is held in the first semester for the purpose of formally admitting into the institution all new students entering for the
Diploma programme. Attendance at the ceremony is compulsory and no new student shall be allowed to take tne end of semester
examinations unless he/she has been duly matriculated.</p>
        </div></template>
      </NeoFieldset>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const entry_req_arr = ref<{
  title: string
  list: string[]
}[]>([
  {
    title: 'Science Programme',
    list: [
      'Mathematics (Elective)',
      'Physics',
      'Chemistry',
      'Biology'
    ]
  },
  {
    title: 'General Arts',
    list: [
'Literature in English',
'French',
'The Ghanaian Languages',
'Economics',
'History',
'Government',
'General Knowledge in Arts',
'Christian Religious Studies.',

    ]
  },
  {
    title:'Home Economics',
    list: [
'Management in Living',
'Food and Nutrition',
'Biology',
'Chemistry',
'French',
'General Knowledge in Arts',

    ]
  },
  {
    title: 'Agricultural Science',
    list: [
'physics',
'Chemistry',
'General Agriculture',
'Mathematics (Elective)',
'French',
    ]
  }
])
</script>