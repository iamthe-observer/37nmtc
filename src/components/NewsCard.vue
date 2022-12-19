<template>
  <div class="news-card shadow-lg p-4 flex items-center gap-8 w-full">
    <!-- image -->
    <div
      class="min-w-[300px] outline outline-[3px] outline-[rgba(0,0,0,.2)] shadow-lg"
    >
      <img
        class="w-[300px] aspect-square object-cover"
        src="../assets/images/oduro-ann.png"
        alt=""
      />
    </div>
    <!-- news info -->
    <div
      class="flex self-start gap-3 mt-3 flex-col justify-evenly text-left min-h-full"
    >
      <header class="font-Bebas_Neue text-[1.5em] text-primaryclr">
        Injections Are Suspected To Be Really Painful Expect Says...
      </header>
      <p class="truncate overflow-hidden max-h-min">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nam
        libero non, et tempora sunt illo atque debitis temporibus veritatis
        tempore neque, in perferendis beatae pariatur quo facilis deleniti.
        Consectetur qui assumenda ipsa architecto eveniet accusantium accusamus
        ullam aliquid, dolorum reiciendis distinctio. Corrupti rem quasi, nobis
        sapiente excepturi odio in.
      </p>
    </div>
  </div>
</template>

<style scoped>
.news-card {
  --height: 340px;
  position: relative;
  min-height: var(--height);
  background: rgb(197, 197, 197);
  border-bottom-left-radius: 10px;
}

.news-card::after {
  content: '';
  position: absolute;
  bottom: 0px;
  right: -20px;
  height: 20px;
  width: 20px;
  border-bottom-left-radius: 10px;
  background: transparent;
  box-shadow: -10px 0px 0 0 rgb(197, 197, 197);
}
.news-card::before {
  content: '';
  position: absolute;
  bottom: 0px;
  right: -20px;
  height: calc(var(--height) - 20%);
  width: 20px;
  border-bottom-right-radius: 10px;
  background: rgb(170, 170, 170);
}
</style>
