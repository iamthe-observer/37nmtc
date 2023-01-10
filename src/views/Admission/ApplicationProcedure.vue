<template>
  <div class="p-4 w-full relative text-center">
    <h1 class="text-[3em] font-Cheorcy mt-16 mb-20">Application Procedures</h1>

    <div class="flex-col flex gap-16">
      <NeoFieldsetOpen
        ><template #legend>Guide to completion of Application Forms.</template>
        <template #content>
          <div class="text-left">
            <p class="mb-3">
              The instructions must be read through carefully before completing
              tne application form. The information required in completing tne
              application form includes:
            </p>
            <ol class="list-disc pl-10">
              <li>
                personal information of candidate as appearing on birth
                certificate
              </li>
              <li>academic profile of candidate.</li>
              <li>professional background.</li>
              <li>
                list of both basic and Post schools, programmes and their
                locations.
              </li>
              <li>entry requirements for all programmes</li>
              <li>
                West African Examination Council equivalents of grades
                (WASSCE/SSCE)
              </li>
              <li>Declaration</li>
            </ol>
          </div>
        </template>
      </NeoFieldsetOpen>

      <NeoFieldsetOpen
        ><template #legend>Submission of Completed Application Form.</template>
        <template #content>
          <div class="text-left">
            <ol class="list-disc pl-10">
              <li>Photocopies of results slip/certificates uploaded online</li>
              <li>Letter of sponsorship (if any)</li>
              <li>Letter or release (if any) military, police and prison</li>
              <li>Photocopies of birth certificates uploaded online</li>
              <li>
                Gazette if name on birth certificate does not correspond with
                name of WAEC result slip
              </li>
              <li>
                Provide a passport picture with a red background scanned for
                submitting.
              </li>
              <li>
                Students must submit their forms not later than the specified
                closing date; forms once purchased are not refundable.
              </li>
            </ol>
          </div>
        </template>
      </NeoFieldsetOpen>
    </div>
  </div>
</template>
