<template>
  <div class="flex justify-center mb-5">
    <div class="flex justify-center items-end w-full px-3">
      <div id="input" class="th w-full max-w-[600px] h-fit bg-light-main rounded-xl px-3 py-3 lg:py-4 edge-light"
        :class="commendBtn ? 'rounded-t-none' : ''">
        <UIChatCommendBtn class="mr-3 md:mr-4 z-20" :status="commendBtn" @statusHandler="cmdHandler" />
        <UIChatInput @msgHandler="inputUpdated" @commendHandler="runCommend(keyCommend)" :commendBtn="commendBtn" :sendMode='userWantSendMsg'  />
      </div>

      <div class="relative ml-2">
        <UICommonTooltip class="bottom-[70px] lg:bottom-20 right-8" :class="tooltip ? 'translate-y-1 opacity-1 visible' : 'translate-y-5 opacity-0 invisible'" :msg="'Im still working on this feature, it may take some time to prepare'" />
        <UIChatSendMessageBtn @statusHandler="responseSendMsgComponent" :active="sendMsgBtn" />
      </div>
    </div>
  </div>
</template>

<script setup>
const msgValue = ref('')
const sendMsgBtn = ref(false)
const commendBtn = ref(false)
const tooltip = ref(false)
const userWantSendMsg = ref(false)

function inputUpdated(val) {
  sendMsgBtn.value = val.length < 1 ? false : true

  if (val.length > 0 && val[0] == '/') {
    msgValue.value = val
    commendBtn.value = true
  } else {
    commendBtn.value = false
  }
}

function cmdHandler(status) {
  commendBtn.value = status
}

function runCommend(keyCommend) {
  // do something
}


function responseSendMsgComponent (mode) {
  tooltip.value = mode == 'microphoneMode' ? true : false

  if (tooltip.value) {
    setTimeout(() => {
      tooltip.value = false
    }, 3000);
  }

  if (mode == 'sendMode') {
    userWantSendMsg.value = true

    setTimeout(() => {
      userWantSendMsg.value = false
    }, 100);
  }
}
</script>

<style>
#input {
  display: flex;
  align-items: flex-end;
  position: relative;
  border-bottom-right-radius: 0px;
}

#input::before {
  position: absolute;
  height: 20px;
  width: 9px;
  right: -8px;
  bottom: -3px;
  display: block;
  content: '';
}

.edge-light::before {
  background-image: url(../../assets/media/icons/edge-light.png);
}

.edge-dark::before {
  background-image: url(../../assets/media/icons/edge-dark.png);
}
</style>