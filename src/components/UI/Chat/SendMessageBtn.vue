<template>
  <button
    class="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-light-main flex items-center justify-center relative">
    
    <a class="to-center rotate-45 translate-x-[-60%] translate-y-[-50%]">
      <Icon name="ri:send-plane-fill" class="th text-3xl text-light-primary relative transition-all" :class="active ? 'animate-fadeIn' : 'animate-fadeOut'"/>
    </a>

    <a class="to-center translate-x-[-50%] translate-y-[-50%]">
      <Icon name="ph:microphone-bold" class="th text-3xl text-light-primary relative transition-all" :class="active ? 'animate-fadeOut' : 'animate-fadeIn'" />
    </a>
  </button>
</template>

<script setup>
const props = defineProps({
  active: {
    default: true
  }
})
</script>


<style>
.to-center {
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>