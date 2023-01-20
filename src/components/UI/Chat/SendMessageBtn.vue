<template>
  <button
    class="th group w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-light-main flex items-center justify-center relative hover:bg-light-primary"
    @click="sendResponseToParent">
    
    <a class="to-center rotate-45 translate-x-[-60%] translate-y-[-50%]">
      <Icon name="ri:send-plane-fill" class="th text-2xl lg:text-[27px] text-light-primary relative group-hover:text-light-main" :class="active ? 'animate-fadeIn' : 'animate-fadeOut'"/>
    </a>

    <a class="to-center translate-x-[-50%] translate-y-[-50%]">
      <Icon name="icon-park-outline:microphone" class="th text-2xl lg:text-[27px] text-light-primary relative group-hover:text-light-main" :class="active ? 'animate-fadeOut' : 'animate-fadeIn'" />
    </a>
  </button>
</template>

<script setup>
const emits = defineEmits(['statusHandler'])
const props = defineProps({
  active: {
    default: true
  }
})

function sendResponseToParent () {
  emits('statusHandler', props.active ? 'sendMode' : 'microphoneMode')
}

</script>


<style>
.to-center {
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>