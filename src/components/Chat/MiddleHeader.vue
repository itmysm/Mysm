<template>
  <div class="th w-full max-w-[670px] h-[60px] bg-light-main flex justify-between absolute left-[50%] translate-x-[-50%] top-0 py-2 px-3 md:px-5">
    <div class="flex items-center">
      <p class="w-[43px] h-[43px] bg-light-primary rounded-full overflow-hidden">
        <img src="../../assets/media/profiles/x6x32gfrIO.JPG" class="max-w-[150%] left-[-13px] bottom-[9px] relative" alt="">
      </p>
      <div class="ml-3">
        <h2 class="font-bold">{{ name }}</h2>
        <p class="mb-0 text-sm font-semibold text-light-gray">{{status}}</p>
      </div>
    </div>
    <div class="flex items-center">
      <button class="flex items-center justify-center w-[35px] h-[35px] hover:bg-light-gray/[10%] rounded-full transition-all md:mr-1">
        <Icon name="ri:search-line" class="text-[24px] text-light-gray" />
      </button>
      <button class="flex items-center justify-center w-[35px] h-[35px] hover:bg-light-gray/[10%] rounded-full transition-all">
        <Icon name="mi:options-vertical" class="text-[24px] text-light-gray" />
      </button>
    </div>
  </div>
</template>

<script setup>
const name = 'Meysam kiani'
const status = ref('Bot')
</script>

<style>
</style>