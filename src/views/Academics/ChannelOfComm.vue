<style scoped></style>
<template>
  <div class="p-4 w-full relative text-center">
    <h1 class="text-[3em] font-Cheorcy leading-[1em] mt-16 mb-20">
      Offical Channel of Communication
    </h1>

    <div class="flex-col flex gap-16">
      <p
        :style="classer"
        ref="container"
        class="paragraph hover:conta box-box hover:-translate-y-1 hover:dotted-bg hover:text-white transition-all duration-300 ease-out px-8 py-5 border-[3px] border-black bg-white"
      >
        All students are expected to use the official channels of communication
        available in the college. Each year group has 2 senior prefects. They
        are the first line of information and grievance resolution. They should
        be given due respect. The second line is the SRC executives and then the
        CSM or class tutor.
      </p>

      <NeoFieldsetOpen
        ><template #legend>Class Tutor</template>
        <template #content
          ><div class="text-left">
            <ol class="list-disc pl-10">
              <li>Each class is assigned a tutor</li>
              <li>
                Students are to refer all unresolved concerns to their class
                tutor.
              </li>
              <li>
                Class tutors are to meet their group on frequent basis to
                socialize with them and listen to their concerns.
              </li>
              <li>
                They are to confer with the principal on behalf of their groups
                wherever necessary.
              </li>
            </ol>
          </div></template
        >
      </NeoFieldsetOpen>

      <NeoFieldsetOpen
        ><template #legend>The College Sergeant Major (CSM)</template>
        <template #content
          ><p>
            He is responsible for all students' affairs in the college. He works
            in collaboration with the group and resident tutors to ensure peace
            among students, finds solutions to student concerns, supervise the
            activities of the SRC and liaises between the management and
            students.
          </p></template
        >
      </NeoFieldsetOpen>

      <NeoFieldsetOpen
        ><template #legend>Hostel Tutor</template>
        <template #content
          ><p>
            Monitors the students in the hostels to ensure their safety and
            peaceful co-existence and to attend to emergencies. He/She is also
            to ensure that the hostel prefects are carrying out their
            responsibilities effectively.
          </p></template
        >
      </NeoFieldsetOpen>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue'
import { useParallax, useElementHover } from '@vueuse/core'

const container = ref<HTMLParagraphElement>()
const classer = ref<{}>('')
const { tilt, roll, source } = useParallax(container)
const isHovered = useElementHover(container)

const cardParallax = computed(() => ({
  transform: `rotateX(${roll.value * 20}deg) rotateY(${tilt.value * 20}deg)`,
}))

watchEffect(() => {
  if (isHovered.value) {
    classer.value = cardParallax.value
  } else {
    classer.value = {
      transform: `rotateX(${0 * 20}deg) rotateY(${0 * 20}deg)`,
    }
  }
})
</script>

<!-- <style scoped>
.paragraph {
  transform: v-bind(cardParallax.transform)
}
</style> -->
