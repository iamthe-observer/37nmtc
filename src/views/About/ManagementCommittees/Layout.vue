<template>
  <div class="p-3 w-full relative text-center">
    <h1 class="text-[3em] font-Bebas_Neue mt-16 mb-20">
      Management Committees
    </h1>

    <!-- content components -->
    <div class="flex-col flex gap-8">
      <AcademicCommitee />
      <QualityAssurance />
      <DisciplinaryCommittee />
    </div>
  </div>
</template>

<script setup lang="ts">
import AcademicCommitee from './AcademicCommitee.vue'
import QualityAssurance from './QualityAssuranceTeam.vue'
import DisciplinaryCommittee from './DisciplinaryCommittee.vue'
</script>

<style scoped></style>
