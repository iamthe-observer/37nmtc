<template>
  <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="true">
    <template #legend
      ><div class="font-bold font-Outfit">
        Duration of End of Semester Examination
      </div></template
    >

    <div class="text-left">
      <p>
        The duration of the End-of-Semester Examination will be determined by
        the credit weighting of courses as follows:
      </p>
      <ol class="list-disc pl-10">
        <li></li>
        <li>
          The Policy of the Programme Recommends that:
          <ol class="list-inside pl-10">
            <li>
              There shall be 2-3 class assignments for each course in a semester
              to be scored over 100 and rated as 15%.
            </li>
            <li>
              There shall be mid-semester examination for each course scored
              over 100 and rated 15%.
            </li>
            <li>
              There shall be an end of semester examination for each course
              scored over 100 and rated as 70%.
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </Fieldset>
</template>
