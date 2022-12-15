<template>
  <div
    class="collapse collapse-open w-full text-left border-[3px] border-black boxer"
  >
    <input type="checkbox" class="peer" />
    <div
      class="collapse-title bg-black striped-bg text-white border-b-[3px] border-black text-left"
    >
      <span :class="'text-3xl font-Cyberion' + ' ' + legend_class">
        <slot name="legend">Header</slot></span
      >
    </div>
    <div class="pt-5 collapse-content bg-white text-black">
      <slot name="content"
        ><div :class="'font-Outfit font-bold' + ' ' + content_class">
          hello
        </div></slot
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  legend_class?: string
  content_class?: string
}>()
</script>

<style scoped>
.boxer {
  box-shadow: 6px 6px 0px 0px #000;
  -webkit-box-shadow: 6px 6px 0px 0px #000;
  -moz-box-shadow: 6px 6px 0px 0px #000;
}
</style>
