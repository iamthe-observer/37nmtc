<template>
  <div class="p-4 w-full relative text-center">
    <h1 class="text-[3em] font-Cheorcy mt-16 mb-20">Academic Regulations</h1>

    <div class="flex-col flex gap-16">
      <Assessment />
      <Duration />
      <ExamMulpractices />
      <Conduct />
      <MarkingScripts />
      <div class="divider my-8" />
      <GradingSystem />
      <div class="divider my-8" />

      <NeoFieldset
        ><template #legend>Grade Point (GP)</template>
        <template #content>
          <div class="text-left">
            <p>
              For each grade there is a corresponding grade point as indicated
              above. The grade point earned by a candidate is computed as the
              product of each course registered. A student does not earn the
              credits for failed courses even though the credit units for the
              courses are used in computing the GPA.
            </p>
          </div>
        </template>
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Cummulative Grade Point Average (CGPA)</template>
        <template #content
          ><div class="text-left">
            <p>
              A student's cumulative grade point average is calculated by
              dividing the total number of grade points obtained up to any
              specified time by the total number of credits for all courses for
              which the student has registered up to that time. This is
              calculated at the end of each academic year.
            </p>
          </div></template
        >
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Academic Transcript</template>
        <template #content
          ><div class="text-left">
            <p>
              Students shall receive a student copy of the transcript of their
              academic record on completion of the programme at a fee. Academic
              transcript for the purpose of continuing education will be upon
              request and payment of the prescribed fee. Such transcripts shall
              be sent only to the requesting institutions. Transcripts shall
              reflect the grades of all courses taken including failed and
              re-sits.
            </p>
          </div></template
        >
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Declaration of Results </template>
        <template #content
          ><div class="text-left">
            <p>
              The academic committee will consider external examiner's reports
              and approve all examination results. Results of the semester shall
              normally be published before the commencement of the next
              semester. A result slip indicating the student's performance in
              the examination shall be made available to the students.
            </p>
          </div></template
        >
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Suplementary Exmanination </template>
        <template #content
          ><div class="text-left">
            <p>
              A student who fails in one or two courses shall be allowed to
              rewrite the paper in a supplementary examination conducted within
              the first two weeks of the next semester. The examination is
              conducted at a prescribed fee determined by the academic
              committee.
            </p>
          </div></template
        >
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Referral and Trailing</template>
        <template #content
          ><div class="text-left">
            <ol class="list-disc pl-10">
              <li>
                A student who obtains a 'D or F' in an examination shall be
                referred in those courses. He/she shall rewrite the referred
                paper in a supplementary exam.
              </li>
              <li>
                Such a student must pass all the referred paper(s) to be in good
                standing. However he/she shall be allowed to trail in only one
                course after the supplementary exams.
              </li>
              <li>
                If a student passes referred course, both grades shall appear on
                the student's transcript and shall be used in the computation of
                his/her CGPA.
              </li>
            </ol>
          </div></template
        >
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Student in Good Standing</template>
        <template #content
          ><p>
            A student in good standing is the one whose cumulative grade point
            average (CGPA) is 2.5 or better and has not obtained a 'D' in any
            given semester in the academic year.
          </p></template
        >
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Conditions for Repetition</template>
        <template #content
          ><div class="text-left">
            <ol class="list-disc pl-10">
              <li>A student whose GPA falls below 1 5 will be repeated</li>
              <li>
                At the end of the period of repetition, the student must obtain
                at least a CGPA of 20 or better and may trail in only one course
                in order to move forward to the next academic year.
              </li>
              <li>
                No student shall be repeated twice throughout the period of
                training. A second repetition will mean a dismissal.
              </li>
            </ol>
          </div></template
        >
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Conditions for Withdrawal from the College</template>
        <template #content
          ><p>
            A student whose CGPA is less than 2.0 after repetition shall be
            withdrawn from the school.
          </p></template
        >
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Class Attendance in a Semester</template>
        <template #content
          ><p>
            A student has to gain a specified number of lecture hours in each
            course to be eligible for examination in that course_ A student who
            absents himself/herself from lectures or clinical work for
            cumulative 21 days in a semester will be disqualified to write that
            semester's examinations. He/she shall repeat that semester. If for
            medical reasons, a student cannot meet the above requirement he/she
            shall be advised to withdraw voluntarily from the programme through
            due process. To get approval for voluntary withdrawal, the student
            must submit a medical report certified by a recognized medical
            doctor.
          </p></template
        >
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Licensure Examinations</template>
        <template #content
          ><p>
            The licensing examination comprises written/online and practical
            components. This examination is organised/controlled by the Nursing
            and Midwifery Council (NMC) of Ghana. Your entry for the licensing
            examination depends on your performance at 5th semester while in the
            college. A student shall obtain a minimum CGPA of 2.5 at the end of
            the 5th semester in order to be recommended for licensing
            examinations. Students cannot be permitted to enter for the
            licensing examination if they have referred papers to write.
            Candidates with 3 or more referred papers need ample time to learn
            to pass their examinations and may not be permitted to enter for the
            examination when the academic committee considers it not
            appropriate. They may have to join the regular classes for 2nd year
            or 3rd year depending on the papers affected. Such a candidate will
            be allowed to enter during the next available examination period as
            accepted by the NMC.
          </p></template
        >
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Re-opening Date</template>
        <template #content
          ><p>All students should report on the set date.</p></template
        >
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Semester Course Registration </template>
        <template #content
          ><div class="text-left">
            <ol class="list-disc pl-10">
              <li>
                Registration of course shall begin from the first (1") week of
                the semester and close by the end of the second (2") week.
              </li>
              <li>
                All courses being offered in the college/school are compulsory.
              </li>
              <li>Registration is subject to at least 50% payment of fees.</li>
            </ol>
          </div></template
        >
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Completion of Programme</template>
        <template #content
          ><div class="text-left">
            <ol class="list-disc pl-10">
              <li>
                Written and Practical Examination will be conducted at the end
                of each semester. Students must obtain passes in all course
                offered to qualify for the completion of the diploma programme.
              </li>
              <li>
                A student shall be required to write and pass an examination
                conducted by the affiliated institution (KNUST) to qualify for
                the diploma certificate.
              </li>
              <li>
                A student shall be required to attain the credit hours of all
                required lectures, write all prescribed examinationst submit a
                Research & Care Study and all other assignments in order to
                complete the programmes. This will make the students eligible
                for the NMC Licensure Examination after which he/she undertakes
                one year internship (Rotation).
              </li>
            </ol>
          </div></template
        >
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Non-Completion</template>
        <template #content
          ><p>
            A student is considered not to have completed the diploma programme
            if he/she has an outstanding examination and resits to be done, a
            research or care study not submitted, non-completion of clinical
            attachments and vacation practicum. Such students shall be repeated
            for the semester.
          </p></template
        >
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Deferment of Programme</template>
        <template #content
          ><p>
            Students who due to some reasons wish to defer their programme shall
            apply to the principal who shall refer the application to the
            Academic Committee for advice. Application for deferment would
            normally not be entertained after eight (8) weeks into the semester.
            Deferment shall be a maximum of 4 semesters after which one has to
            reapply as a fresh applicant.
          </p></template
        >
      </NeoFieldset>

      <NeoFieldset
        ><template #legend>Deferment of Examination </template>
        <template #content
          ><div class="text-left">
            <ol class="list-disc pl-10">
              <li>
                <span class="text-primaryclr font-bold"
                  >One Grounds of ill Health</span
                >
                - A student, who is unable to take examination on grounds of ill
                health shall on application to the Principal of the college and
                upon provision of a medical certificate be allowed to take them
                at the examination.
              </li>
              <li>
                <span class="text-primaryclr font-bold"
                  >On Grounds other than ill Health</span
                >
                - In case of deferment on grounds other than ill health, the
                Principal shall invite the academic committee as appropriate. It
                shall be the student's responsibility to satisfy the school
                beyond reasonable doubt why he/she wishes to defer the
                examination. The application must be submitted not later than
                two weeks before the commencement of examination.
              </li>
            </ol>
          </div></template
        >
      </NeoFieldset>
    </div>
  </div>
</template>

<script setup lang="ts">
import Assessment from './Assessment.vue'
import Duration from './Duration.vue'
import ExamMulpractices from './ExamMulpractices.vue'
import Conduct from './ConductofExamination.vue'
import MarkingScripts from './MarkingScripts.vue'
import GradingSystem from './GradingSystem.vue'
</script>

<style scoped></style>
