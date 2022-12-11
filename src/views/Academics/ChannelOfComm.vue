<template>
  <div class="p-4 w-full relative text-center">
    <h1 class="text-[3em] font-Bebas_Neue mt-16 mb-20">
      Offical Channel of Communication
    </h1>

    <div class="flex-col flex gap-8">
      <p>
        All students are expected to use the official channels of communication
        available in the college. Each year group has 2 senior prefects. They
        are the first line of information and grievance resolution. They should
        be given due respect. The second line is the SRC executives and then the
        CSM or class tutor.
      </p>

      <Fieldset class="pb-8 shadow-lg"
        ><template #legend>Class Tutor</template>
        <div class="text-left">
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
        </div>
      </Fieldset>

      <Fieldset class="pb-8 shadow-lg"
        ><template #legend>The College Sergeant Major (CSM)</template>
        <p>
          He is responsible for all students' affairs in the college. He works
          in collaboration with the group and resident tutors to ensure peace
          among students, finds solutions to student concerns, supervise the
          activities of the SRC and liaises between the management and students.
        </p>
      </Fieldset>

      <Fieldset class="pb-8 shadow-lg"
        ><template #legend>Hostel Tutor</template>
        <p>
          Monitors the students in the hostels to ensure their safety and
          peaceful co-existence and to attend to emergencies. He/She is also to
          ensure that the hostel prefects are carrying out their
          responsibilities effectively.
        </p>
      </Fieldset>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
