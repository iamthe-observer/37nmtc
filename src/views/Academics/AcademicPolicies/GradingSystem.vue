<template>
  <div class="">
    <h1>Grading System</h1>
    <p>The grading of examination results shall be as follows:</p>
    <n-table :single-line="false">
      <thead class="font-Bebas_Neue">
        <tr>
          <th>Grade</th>
          <th>Mark Range</th>
          <th>Grade Point</th>
          <th>Interpretation</th>
        </tr>
      </thead>
      <tbody class="font-Outfit">
        <tr>
          <td>A</td>
          <td>80 - 100</td>
          <td>4.0</td>
          <td>Excellent</td>
        </tr>
        <tr>
          <td>A-</td>
          <td>75 - 79</td>
          <td>3.75</td>
          <td>Very Good</td>
        </tr>
        <tr>
          <td>B+</td>
          <td>70 - 74</td>
          <td>3.50</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>B</td>
          <td>65 - 69</td>
          <td>3.00</td>
          <td>Above Average</td>
        </tr>
        <tr>
          <td>B-</td>
          <td>60 - 64</td>
          <td>2.50</td>
          <td>Average</td>
        </tr>
        <tr>
          <td>C+</td>
          <td>55 - 59</td>
          <td>2.00</td>
          <td>Pass</td>
        </tr>
        <tr>
          <td>C</td>
          <td>50 - 54</td>
          <td>1.50</td>
          <td>Pass</td>
        </tr>
        <tr>
          <td>D</td>
          <td>0 - 49</td>
          <td>0.00</td>
          <td>Fail</td>
        </tr>
      </tbody>
    </n-table>

    <Panel class="mt-10">
      <template #header> Explantory Notes </template>
      <div class="text-left">
        <ol class="list-disc pl-10">
          <li>
            The Minimum Grade Point Average (MGPA) required to secure
            continuation in a programme is 1.5.
          </li>
          <li>
            A student whose grade falls below 1.5 will be repeated until she
            achieves the MGPA of 20.
          </li>
          <li>
            A student is awarded X by the academic committee as unsatisfactory
            if unable to complete a course.
          </li>
          <li>
            Grade Z is awarded on account of exam malpractice and the student
            may be prevented from taking exams for a period or expelled
            indefinitely.
          </li>
        </ol>
      </div>
    </Panel>
  </div>
</template>

<script setup lang="ts">
import { NTable } from 'naive-ui'
import Panel from 'primevue/panel'
</script>
