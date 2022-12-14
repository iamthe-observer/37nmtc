<template>
  <div class="p-4 w-full relative text-center">
    <h1 class="text-[3em] font-Bebas_Neue mt-16 mb-20">Disciplinary Rules</h1>

    <div class="flex-col flex gap-8">
      <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="false"
        ><template #legend>Personal Appearance</template>
        <div class="text-left">
          <ol class="list-decimal pl-10">
            <li>Students must appear in prescribed uniform for duty/class.</li>
            <li>Student snould be neat and clean at all times.</li>
            <li>
              Hairdo must be simple and not touch tne collar of the dress. Hair
              bands should match the colour of tne nair.
            </li>
            <li>
              There snould be no colouring of nair apan from its original
              colour.
            </li>
            <li>
              Shoes and sandals must be of tne prescribed styles and colour
              according to the scnool's code of dressing.
            </li>
            <li>Only knob or button shaped earrings can be worn.</li>
            <li>
              Long nails, polisn, neck chain, anificjal nails, bracelets and
              extra ornaments are prohibited.
            </li>
            <li>
              Male students are not to wear beard and moustacne, botn should be
              clean shaved.
            </li>
            <li>
              Students must not wear apron and cap outside the hospital
              premises.
            </li>
            <li>Belt must be properly worn.</li>
          </ol>
        </div></Fieldset
      >

      <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="true"
        ><template #legend>The Uniform Requirements</template>
        <div class="text-left">
          <p>Both Females and Males</p>
          <ol class="list-decimal pl-10">
            <li>
              Name tags for easy identification in the classroom and on tne
              field.
            </li>
            <li>
              All students are to purcnase tne college's printed Cloth and wear
              it on Fridays and during occasions as would be informed.
            </li>
            <li>Shoes should be cleaned and polished always</li>
            <li>
              All students need a watcn witn second nand, stethoscope, scissors,
              thermometers and sphygmomanometer
            </li>
            <li>Students must appear in prescribed uniform for duty/class</li>
            <li>Uniforms snould be neat and clean at all times</li>
            <li>Hairdo must be simple and not touch tne collar of the dress</li>
            <li>Students may use small black,'brown ribbon</li>
            <li>Hair ribbon snould matcn tne colour of tne hair</li>
            <li>
              There snould be no colouring of nair apart from its original
              colour
            </li>
            <li>
              shoes and sandals must be of tne prescribed style and colour
              according to the school'S code of dressing
            </li>
            <li>
              Only stud snaped earrings can be worn Witn only one on eacn ear
              lobe
            </li>
            <li>
              Long nails, nail polish, neck cnain, artificial nails, bracelets,
              are prohibited
            </li>
            <li>
              Students must not wear apron and cap outside tne nospital premises
            </li>
            <li>Belts must be properly worn</li>
          </ol>

          <p class="mt-3 mb-1">Female Students</p>
          <ol class="list-disc pl-10">
            <li>
              Tailored nurses green dress (2 inches below knee-length) with
              white round baby collar
            </li>
            <li>Black/brown full low soft heeled shoe</li>
            <li>
              White apron 2 inches below the green uniform and a white cap for
              clinical work.
            </li>
          </ol>

          <p class="mt-3 mb-1">Male Students</p>
          <ol class="list-disc pl-10">
            <li>Blue-black flying tie</li>
            <li>Short-sleeve white shirt</li>
            <li>
              A pair of brown khaki material trouser (no jeans khaki trouser)
            </li>
            <li>Short-sleeve white clinical coat</li>
            <li>
              Black/brown tull low heal shoes (no colour marking on shoes)
            </li>
          </ol>

          <!-- make here an alert or note component -->
          <p>
            <span class="font-bold text-red-600">NB: </span>
            Military students are to wear their Military uniform unless othemise
            ordered by the Principal to wear civil uniform.
          </p>
        </div>
      </Fieldset>

      <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="true"
        ><template #legend>Additional Requirements</template>
        <div class="text-left">
          <p>Both Females and Males</p>
          <ol class="list-disc pl-10">
            <li>
              Hair: must be off the face and above the collar of dress or pulled
              back, natural colour tones only.
            </li>
            <li>
              Male students are NOT to WEAR BEARD and MOUSTACHE. Beards and
              moustache must be shave neat with hair on head kept clean and
              short always.
            </li>
            <li>
              Jewellery: only wedding ring on one finger, no other accessories
              are acceptable
            </li>
            <li>
              Scrub: wearing of scrub may be required in some practical areas
            </li>
          </ol>
          <p>
            <span class="font-bold text-red-600">NB: </span>
            Students should follow uniform requirement in clinical areas.
          </p>
        </div></Fieldset
      >

      <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="true"
        ><template #legend>Lines/Hostel Environment</template>
        <div class="text-left">
          <ol class="list-disc pl-10">
            <li>Students should not litter the environment.</li>
            <li>Surroundings should be kept clean and tidy at all times</li>
            <li>
              Students are responsible for cleaning ot the
              dormitories/hostels/compound and classrooms.
            </li>
            <li>
              There should be scrubbing of
              dormitories/classrooms/hostels/drains/bathrooms and toilets every
              Saturday.
            </li>
            <li>Cooking in the dormitories is strictly prohibited.</li>
            <li>
              No wet or stale food should be taken to the hostel as this
              attracts vermins.
            </li>
            <li>
              No male student is allowed to visit the female dormitories and
              vice versa.
            </li>
            <li>
              Only toilet tissues are to be thrown into the water closet (WC)
            </li>
            <li>
              Due to lack of space students are not allowed to bring Desktop
              computers. However, they can bring laptops
            </li>
            <li>
              All water taps are to be turned off when not in use. Water should
              be used economically.
            </li>
            <li>
              Students must do their laundry at the prescribed areas and waste
              water must be properly disposed off.
            </li>
            <li>
              Moving or packing trom one dormitory to another without the
              consent of the housekeeper is forbidden.
            </li>
            <li>
              Moving furniture from classrooms to the dormitories is strictly
              prohibited.
            </li>
            <li>
              Room keys as well as other keys allocated to each student during
              the semester must be handed over to the hostel tutor at the end of
              the semester.
            </li>
            <li>
              Students must report all breakages, damages and defects promptly
              to the hostel tutor for the necessary action to be taken.
            </li>
            <li>Pictures and posters should not be pasted on walls.</li>
          </ol>
        </div></Fieldset
      >

      <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="true"
        ><template #legend>Light</template>
        <div class="text-left">
          <ol class="list-disc pl-10">
            <li>
              All lights in the lines/hostels must be put off at time prescribed
              by the school authorities.
            </li>
            <li>
              Only rechargeable lamps and or dry cell flashlights are to be used
              when the main power goes off
            </li>
            <li>
              The use of candles and other open flame lamps are strictly
              prohibited.
            </li>
            <li>
              All prescribed electrical appliances/gadgets such as rechargeable
              lamps, irons, flashlights and radios must be disconnected from the
              main when not in use so as to cut down consumption and/or prevent
              fire outbreak.
            </li>
            <li>
              Extra electrical connections in the dormitories are not allowed.
            </li>
            <li>
              All electrical faults must be reported to the hostel tutor
              promptly for the necessary action.
            </li>
            <li>
              No unauthorized electrical repairs are allowed. Only approved
              electricians are allowed to carry out electrical repair works.
            </li>
          </ol>
        </div></Fieldset
      >

      <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="true"
        ><template #legend>Noise</template>
        <div class="text-left">
          <ol class="list-disc pl-10">
            <li>
              Students should not make noise at the dormitories. The hostel
              should be kept quiet at all times.
            </li>
            <li>
              The sound volume of radio sets and other electrical gadgets must
              be turned to reasonable level.
            </li>
            <li>
              The door in the dormitories must be closed gently at all times.
            </li>
            <li>
              Group prayer sessions are to be held in the classroom when not in
              use at the time prescribed by the school.
            </li>
          </ol>
        </div></Fieldset
      >

      <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="true"
        ><template #legend>Late Pass</template>
        <div class="text-left">
          <ol class="list-disc pl-10">
            <li>
              Students must inform the CSM and write their names in a pass book
              before leaving the campus to town and must return to the campus
              not later than 3:00pm.
            </li>
            <li>
              All students who wish to travel outside town must apply tor and
              obtain a pass trom the CSM before leaving campus
            </li>
            <li>
              Each student is entitled to three (3) exeats in a semester except
              in emergency situations.
            </li>
          </ol>
        </div></Fieldset
      >

      <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="true"
        ><template #legend>Immunizations</template>
        <div class="text-left">
          <p>
            Students must avail themselves to take prescribed immunization when
            necessary.
          </p>
        </div>
      </Fieldset>

      <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="true"
        ><template #legend>Prayers</template>
        <div class="text-left">
          <p>
            All students are expected to join in the daily prayers prior to duty
            and classes as specified by the college chaplaincy.
          </p>
        </div>
      </Fieldset>

      <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="true"
        ><template #legend>Special Medical Condition</template>
        <div class="text-left">
          <p>
            Students with special medical conditions which need special
            attention should present a medical report to the school on the said
            conditions.
          </p>
        </div>
      </Fieldset>

      <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="true"
        ><template #legend>Church Service/Morning Devotion</template>
        <div class="text-left">
          <ol class="list-disc pl-10">
            <li>Students are to attend morning devotion at 7:00 am.</li>
            <li>
              Every Wednesday morning (0700hrs — 0800hrs) is school padre hour
              and all students must be present.
            </li>
          </ol>
        </div></Fieldset
      >

      <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="true"
        ><template #legend>Regulation of Students off Campus</template>
        <div class="text-left">
          <p>
            The college, snall not permit any behaviour on or off campus by any
            student that contravenes its rules and regulations.
          </p>
          <ol class="list-disc pl-10">
            <li>
              The school's rules and regulations are applicable to every student
              irrespective of his/her residential status.
            </li>
            <li>
              Non — residential students and students who are off campus are to
              observe decorum, decency and snow hign degree of respect to all
              people outside their homes or schools.
            </li>
            <li>
              Maintaining clean environment in botn the scnool and the various
              homes or residence iS the paramount duty of the non-resident
              student as well.
            </li>
            <li>
              Non — resident students shall be at all school gatherings on time
              except on permission by the Principal or ner delegate.
            </li>
            <li>
              Drinking and sale ot cigarette and/or alcohol by all categories of
              students are strictly prohibited.
            </li>
            <li>
              Non — resident students just as the resident students are expected
              to dress decently while on campus and/or outside campus.
            </li>
          </ol>
        </div></Fieldset
      >

      <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="true"
        ><template #legend>Travelling</template>
        <div class="text-left">
          <p>
            Any student, who wishes to travel, should obtain permission from the
            appropriate authorities stating reasons, departure and returning
            dates. However, they must remember to enter their names in the
            outing book. Permission must be sought at least 3 days before letter
            is written Note: Students' movement register must be signed by each
            student before he/she leaves the school compound and also on their
            return. The register should be kept by the CSM. Students should
            equally report themselves to the CSM upon return.
          </p>
        </div></Fieldset
      >

      <Fieldset class="pb-8 shadow-lg" :toggleable="true" :collapsed="true"
        ><template #legend>Pregnancy during Training</template>
        <div class="text-left">
          <p>
            Any student who becomes pregnant during training will have to write
            officially to the Principal for counselling and deferment of
            training. She would be re-admitted to join the appropriate group
            only upon a receipt of a written re-application when the baby is Six
            (6) months or after her maternity leave.
          </p>
        </div></Fieldset
      >
    </div>
  </div>
</template>
