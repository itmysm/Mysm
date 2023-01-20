<template>
  <UIChatCommendMenu class="w-full absolute bottom-[100%] left-0" :status="commendBtn" :message="message" @commendRunner="commendHandler" />
  <textarea id="sendMsg" class="th w-full text-lg text-light-opposite h-[28px] max-h-[100px] top-[-1px] md:top-[0px]" autofocus placeholder="Message" dir="auto" @input="autoGrow" v-model="message" />
</template>

<script setup>
const emit = defineEmits(['msgHandler', 'commendHandler'])
const props = defineProps({
  commendBtn: {
    default: false
  }
})

const message = ref('')

function autoGrow () {
  emit('msgHandler', message.value)

  const inp = document.querySelector('#sendMsg')
  inp.style.height = '5px'
  inp.style.height = (inp.scrollHeight) + "px";
}

function commendHandler (commend) {
  emit('commendHandler', commend)
  emit('msgHandler', '') // change sendIco to microphone Icon in composer
  message.value = ''
}
</script>

<style>
#sendMsg {
  border: none;
  resize: none;
  overflow: hidden;
  background-color: transparent;
  position: relative;
}

#sendMsg:focus {
  outline: none;
}
</style>