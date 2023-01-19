<template>
  <div class="absolute flex bottom-5 left-[50%] translate-x-[-50%] w-full flex justify-center items-end px-3">
    <div id="input" class="th w-full max-w-[600px] bg-light-main rounded-xl px-3 py-3 lg:py-4 transition-all" :class="commendBtn ? 'rounded-t-none' : ''">
      <UIChatCommendBtn class="z-20" :status="commendBtn" @statusHandler="cmdHandler" />
      <UIChatInput @msgHandler="inputUpdated" @commendHandler="runCommend(keyCommend)" :commendBtn="commendBtn" />
    </div>
  
    <UIIconsEdge class="relative top-[3px] right-[2px]" />
    <UIChatSendMessageBtn :active="sendMsgBtn" />
  </div>
</template>

<script setup>
const msgValue = ref('')
const sendMsgBtn = ref(false)
const commendBtn = ref(false)

function inputUpdated (val) {
  sendMsgBtn.value = val.length < 1 ? false : true
  
  if (val.length > 0 && val[0] == '/') {
    msgValue.value = val
    commendBtn.value = true
  } else {
    commendBtn.value = false
  }
}

function cmdHandler (status) {
  commendBtn.value = status
}

function runCommend (keyCommend) {
  // do something
}
</script>

<style>
#input {
  display: flex;
  align-items: flex-end;
  position: relative;
  border-bottom-right-radius: 0px;
}

</style>