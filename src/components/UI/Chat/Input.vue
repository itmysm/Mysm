<template>
  <UIChatCommendMenu class="w-full absolute bottom-[100%] left-0" :status="commendBtn" />
  <textarea id="sendMsg" class="th w-full mx-3 text-lg text-light-opposite h-[28px] max-h-[100px] top-[-1px] md:top-[0px]" autofocus placeholder="Message" dir="auto" @input="autoGrow" />
</template>

<script setup>
const emit = defineEmits(['msgHandler'])
const props = defineProps({
  commendBtn: {
    default: false
  }
})

function autoGrow(e) {
  emit('msgHandler', e.target.value)

  const inp = document.querySelector('#sendMsg')
  inp.style.height = '5px'
  inp.style.height = (inp.scrollHeight) + "px";
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