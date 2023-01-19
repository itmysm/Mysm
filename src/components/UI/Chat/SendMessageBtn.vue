<template>
  <button
    class="th group min-w-[50px] min-h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-light-main flex items-center justify-center relative hover:bg-light-primary transition-all">
    
    <a class="to-center rotate-45 translate-x-[-60%] translate-y-[-50%]">
      <Icon name="ri:send-plane-fill" class="th text-2xl lg:text-[27px] text-light-primary relative group-hover:text-light-main" :class="active ? 'animate-fadeIn' : 'animate-fadeOut'"/>
    </a>

    <a class="to-center translate-x-[-50%] translate-y-[-50%]">
      <Icon name="icon-park-outline:microphone" class="th text-2xl lg:text-[27px] text-light-primary relative group-hover:text-light-main" :class="active ? 'animate-fadeOut' : 'animate-fadeIn'" />
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