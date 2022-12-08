<template>
  <div class="p-4 w-full relative">
    <h1 class="text-[3em] font-Bebas_Neue mt-8 mb-10">Philosophy</h1>

    <div
      class="parent relative translate-x-14 from-[rgba(0,0,0,.5)] to-transparent mb-16"
    >
      <img class="child" src="@/assets/socrates.jpeg" alt="" />

      <div
        class="absolute top-0 right-20 h-full max-w-[30%] backdrop-blur-md font-Big_Shoulders_Display px-3 flex flex-col items-center justify-around text-white text-2xl border-x-2 border-x-[#b9b9b94d] bg-animate"
      >
        <div v-motion-fade-visible-once v-if="content === 'Person'" class="">
          <div class="text-3xl font-Bebas_Neue underline">Person</div>
          <span>
            Each person is a unique being of worth and dignity, capable of
            developing and actualizing his fullest potentials, capabilities, and
            talents to promote positive personality development.
          </span>
        </div>

        <div v-motion-fade-visible-once v-if="content === 'Health'" class="">
          <div class="text-3xl font-Bebas_Neue underline">Health</div>
          <span>
            We lay premium on total quality ot health, not merely tne absence of
            illness or infirmity, but a complete state of physical, social,
            spiritual and psychological well- being ot individuals and society
            (WHO 1947).
          </span>
        </div>

        <div v-motion-fade-visible-once v-if="content === 'Nursing'" class="">
          <div class="text-3xl font-Bebas_Neue underline">Nursing</div>
          <span>
            We are committed to training and equipping soldiers and Civilians
            witn the requisite knowledge, SkillS and attitudes for the
            attainment of quality care delivery to promote and maintain health,
            conserve lite and reduce disability and mortality at all levels.
          </span>
        </div>

        <div v-motion-fade-visible-once v-if="content === 'Education'" class="">
          <div class="text-3xl font-Bebas_Neue underline">Education</div>
          <span>
            The purpose of education is to train the individual and the
            community to develop their learning domains- cognitive, psychomotor
            and affective — The Head, Hands and Hean (the 3 H's) for a
            meaningful lite. These beliefs serve as a crucible and pivot tor an
            effective curriculum and selection ot holistic instructional
            methodologies and practices.
          </span>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <Fieldset class="my-10 shadow-lg"
      ><template #legend><h1>Our Aim</h1></template
      ><span
        >IS to produce an efficient, effective and disciplined polyvalent
        nurse.</span
      ></Fieldset
    >

    <div class="divider"></div>

    <Fieldset class="my-10 shadow-lg"
      ><template #legend>
        <h1>Goals and Objectives of Our Programmes</h1></template
      >
      <div class="text-left mx-5">
        <p>The knowledge, skills and attitudes would be used to:</p>
        <ol class="list-decimal">
          <li>
            Perform professional functions efficiently and effectively as
            members of the health team to:
            <ol class="list-disc ml-4">
              <li>
                Meet the needs of the patients, health needs of soldiers, their
                families, other individuals and the entire community.
              </li>
              <li>
                Recognize, manage and where necessary, refer clients or patients
                to appropriate quarters.
              </li>
              <li>
                Contribute to and promote primary healthcare services in the
                areas of Peacekeeping Operations.
              </li>
              <li>
                Carry out community diagnosis, plan, implement and evaluate
                community programmes towards morbidity prevention, health
                promotion and rehabilitation services.
              </li>
              <li>
                Plan and carry out health education that will be based on health
                needs of troops and the community in general.
              </li>
            </ol>
          </li>
          <li>
            Exhibit administrative and leadership capabilities in managing
            healthcare facilities in the various units (Medical Reception
            Stations (MRS) and the other healthcare units within the various
            barracks of the Ghana Armed Forces.
          </li>
          <li>
            Demonstrate critical thinking and problem solving activities in the
            provision of nursing/midwifery interventions.
          </li>
          <li>
            Demonstrate responsibility and accountability for their professional
            actions.
          </li>
          <li>
            Demonstrate commitment to the nursing profession, show interest and
            enthusiasm in the nursing/midwifery profession.
          </li>
          <li>
            Show an understanding of national health policy and its relevance to
            nursing/midwifery.
          </li>
          <li>
            Demonstrate the ability of lifelong learning within a changing
            society.
          </li>
        </ol>
      </div>
    </Fieldset>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const index = ref(0)
const philo_content = ref(['Person', 'Health', 'Nursing', 'Education'])
const content = computed(() => philo_content.value[index.value])

onMounted(() => {
  setInterval(() => {
    if (index.value + 1 === philo_content.value.length) {
      index.value = 0
    } else {
      index.value++
    }
  }, 10000)
})
</script>

<style scoped>
.parent {
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 50%, transparent 100%);
}
.child {
  background-image: url('../../assets/socrates.jpeg');
}

@keyframes animateTHISbg {
  0% {
    background: rgba(0, 0, 0, 0);
  }
  50% {
    background: rgba(0, 0, 0, 1);
  }
  100% {
    background: rgba(0, 0, 0, 0);
  }
}
.bg-animate {
  animation: animateTHISbg 10s linear infinite;
}
</style>
