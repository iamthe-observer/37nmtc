<template>
  <div class="p-4 w-full relative text-center">
    <h1 class="text-[3em] font-Bebas_Neue mt-16 mb-20">
      Management Committees
    </h1>

    <!-- content components -->
    <div class="flex-col flex gap-8">
      <Academic />
      <QualityAssurance />
      <Disciplinary />
      <Procurement />
      <StockTaking />
      <Welfare />
      <Protocol />
      <TME />
    </div>
  </div>
</template>

<script setup lang="ts">
import Academic from './AcademicCommitee.vue'
import QualityAssurance from './QualityAssuranceTeam.vue'
import Disciplinary from './DisciplinaryCommittee.vue'
import Procurement from './ProcurementCommittee.vue'
import StockTaking from './StockTakingCommittee.vue'
import Welfare from './WelfareCommittee.vue'
import Protocol from './ProtocolCommittee.vue'
import TME from './TransportMaintenanceEnvironment.vue'
</script>

<style scoped></style>
