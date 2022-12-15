<template>
  <!-- <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="true">
    <template #legend
      ><div class="font-bold">Food/Welfare Committee</div></template
    >

    <div class="text-left">
      <ol class="list-disc pl-10">
        <li>Senior Accountant</li>
        <li>Store — Keeper</li>
        <li>Programme head</li>
        <li>Tutor</li>
      </ol>

      <h3 class="font-bold pt-5 pb-2">Responsibilities</h3>
      <ol class="list-disc pl-10">
        <li>Planning, budgeting and purchasing of food.</li>
        <li>Feeding of students</li>
        <li>Sees to the welfare of students</li>
        <li>Periodic inspection of hostels</li>
        <li>Convenes food committee meetings</li>
      </ol>
    </div>
  </Fieldset> -->
  <neo-fieldset>
    <template #legend>Food/Welfare Committee</template>
    <template #content>
      <div class="text-left">
        <ol class="list-disc pl-10">
          <li>Senior Accountant</li>
          <li>Store — Keeper</li>
          <li>Programme head</li>
          <li>Tutor</li>
        </ol>

        <h3 class="font-bold pt-5 pb-1 font-Bebas_Neue text-2xl">
          Responsibilities
        </h3>
        <ol class="list-disc pl-10">
          <li>Planning, budgeting and purchasing of food.</li>
          <li>Feeding of students</li>
          <li>Sees to the welfare of students</li>
          <li>Periodic inspection of hostels</li>
          <li>Convenes food committee meetings</li>
        </ol>
      </div>
    </template>
  </neo-fieldset>
</template>
