<template>
  <div class="absolute flex bottom-5 left-[50%] translate-x-[-50%] w-full flex justify-center items-end px-3"
    placeholder="Message">

    <div class="th flex w-full max-w-[600px] items-end bg-light-main rounded-xl rounded-br-none px-2 py-3 lg:py-4">
      <textarea id="sendMsg"
        class="th w-full mx-3 border-none focus:outline-none text-lg text-light-opposite resize-none overflow-hidden min-h-[5px] h-[28px] max-h-[100px] bg-[transparent]"
        autofocus placeholder="Message" tabindex="0" dir="auto" @input="autoGrow" />
    </div>

    <UIIconsEdge class="relative top-[3px]" :prop="'#fff'" />
    <div>
      <UIChatSendMessageBtn :active="disableSendMsg" />
    </div>
  </div>
</template>

<script setup>

const disableSendMsg = ref(false)

function autoGrow(e) {
  disableSendMsg.value = e.target.value < 1 ? false : true
  const inp = document.querySelector('#sendMsg')
  inp.style.height = '5px'
  inp.style.height = (inp.scrollHeight) + "px";
}
</script>