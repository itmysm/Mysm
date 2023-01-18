<template>
  <div class="absolute flex bottom-5 left-[50%] translate-x-[-50%] w-full flex justify-center items-end px-3">
    <div id="input" class="th w-full max-w-[600px] bg-light-main rounded-xl px-3 py-3 lg:py-4 transition-all" :class="commendBtn ? 'rounded-t-none' : ''">
      <UIChatCommendBtn class="z-20" :status="commendBtn" @statusHandler="cmdHandler" />
      <UIChatInput @msgHandler="inputUpdated" :commendBtn="commendBtn" />
    </div>
  
    <UIIconsEdge class="relative top-[3px]" />
    <UIChatSendMessageBtn :active="sendMsgBtn" />
  </div>
</template>

<script setup>
const msgValue = ref('')
const sendMsgBtn = ref(false)
const commendBtn = ref(false)

function inputUpdated (val) {
  msgValue.value = val
  sendMsgBtn.value = val.length < 1 ? false : true
}

function cmdHandler (status) {
  commendBtn.value = status
}
const disableSendMsg = ref(false)
</script>

<style>
#input {
  display: flex;
  align-items: flex-end;
  position: relative;
  border-bottom-right-radius: 0px;
}

</style>