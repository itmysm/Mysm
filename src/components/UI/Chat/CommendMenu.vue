<template>
  <div class="w-full bg-light-main overflow-hidden rounded-t-xl pt-4 select-none" :class="status ? 'openCMD' : 'closeCMD'">

    <span class="w-[28px] h-[6px] rounded-full bg-light-gray/50 absolute top-2 left-[50%]"></span>

    <ul class="bg-light-main mt-2">
      <li class="w-full text-sm md:text-base px-3 md:px-4 py-1 hover:bg-light-primary cursor-pointer hover:text-light-main" @click="" v-for="i in 3">Commend Line Example</li>
    </ul>
  </div>
</template>

<script setup>
const emit = defineEmits(['updateBtnStatus'])
const props = defineProps({
  status: {
    require: false
  }
})

</script>

<style>

.openCMD {
  animation: openCMD .2s linear both;
}

.closeCMD {
  animation: closeCMD .2s linear both;
}

  @keyframes openCMD {
    0% {
      transform: translateY(100%);
    }100% {
      transform: translateY(0px);
    }
  }

  @keyframes closeCMD {
    0% {
      transform: translateY(0px);
    }100% {
      transform: translateY(100%);
      opacity: 0;
    }
  }
</style>