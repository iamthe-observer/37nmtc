<template>
  <div>
    <h1 class="text-3xl font-Yeseva_One mt-8 mb-10">
      History & Facts about 37NMTC
    </h1>

    <div class="flex flex-col">
      <Fieldset legend="Where we are coming from" class="w-full">
        The 37 Military Hospital Nursing and Midwifery Training College
        (37NMTC), a training wing of the 37 Military Hospital, was established
        as a department in July 1941, the same year the main hospital was built.
        It was established during the Second World War to train soldiers to
        augment the expatriate staff strength in the general hospital and the
        Medical Reception Stations (MRS). The college was then known as Nursing
        Orderlies' Training Wing (NOTW). The college has gone through series of
        transformation. The programmes offered has transitioned from Nursing
        Orderlies to Qualified Registered Nursing to State Registered Nursing
        and Post Basic Midwifery. Currently, the programmes offered are
        Registered General Nursing and Registered Midwifery.
      </Fieldset>

      <div class="divider"></div>

      <div class="w-full min-h-[500px] justify-end flex relative">
        <!-- content -->
        <div
          class="w-[55%] min-h-full bg-white py-4 px-10 flex flex-col justify-center"
        >
          <h2 class="text-3xl font-Yeseva_One mt-2 mb-4">Courses Offered</h2>
          <p class="text-lg">
            The school offered basic nursing course for soldiers who possessed
            the Middle School Leaver's Certificate in the Ghana Armed Forces.
            Students therefore went through these various stages in the
            training:
          </p>
          <n-timeline class="text-left text-2xl my-3">
            <n-timeline-item
              type="warning"
              content="BIV-BIII which is a one year course with subjects such as fundamentals of nursing, first aid and bandaging including stretcher drill, hygiene,
nursing practical, pharmacology
"
            />
            <n-timeline-item
              type="error"
              content="BIII-BII which is a second year course whose subjects included anatomy and physiology, surgical nursing practicals
"
            />
            <n-timeline-item
              type="success"
              content="And a final year course of BII-BI.
"
            />
          </n-timeline>

          <h2 class="text-xl font-Yeseva_One mt-1 mb-2">
            Preliminary Examinations
          </h2>
          <p class="text-lg">
            Students wno successfully passed tneir BII exams were then
            registered for the Qualified Registered Nursing (QRN) exams. After
            the qualification the nurses were mustered and given A1 Nurses.
          </p>
        </div>
        <!-- image	 -->
        <div
          class="bg-random-image bg-cover box-box absolute w-[47%] h-[300px] top-[50%] translate-y-[-50%] left-0"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Fieldset from 'primevue/fieldset'
import { NTimeline, NTimelineItem } from 'naive-ui'
</script>

<style scoped></style>
