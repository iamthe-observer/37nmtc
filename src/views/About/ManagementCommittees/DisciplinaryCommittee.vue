<template>
  <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="true">
    <template #legend>
      <div class="font-bold">Disciplinary Committee</div></template
    >

    <div class="text-left">
      <ol class="list-disc pl-10">
        <li>Parish Priest</li>
        <li>Board Member.</li>
        <li>GES Representative</li>
        <li>Dean of Students</li>
        <li>Tutor</li>
        <li>SRC — President (Observer if it involves a student)</li>
      </ol>

      <h3 class="font-bold pt-5 pb-2">Responsibilities</h3>
      <ol class="list-decimal pl-10">
        <li>Punishes students for misbehaving (Insubordinate)</li>
        <li>Gives suspension to students if necessary.</li>
        <li>
          Deals with disciplinary issues enshrined in the rules and regulations
          for students/staff.
        </li>
      </ol>
    </div>
  </Fieldset>
</template>
