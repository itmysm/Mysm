<template>
  <div class="flex flex-col justify-end h-full overflow-y-scroll mb-3 transition-all duration-300">
    <ul class="flex flex-col justify-end items-center h-fit transition-all" v-for="messages in allMessages">
      <span
        class="w-fit bg-light-primary px-2 py-1 rounded-full text-sm font-semibold bg-light-info-content/75 text-light-main my-6 sticky">Today</span>
      <UIChatMessage v-for="(message, index) in messages" :message="message"
        :class="checkContinuouslyMessages(messages, message, index) ? 'mt-1' : 'mt-3'" />
    </ul>
  </div>
</template>


<script setup>
import { useMessages } from '../../stores/messages/index.ts';
const allMessages = ref(null)

onMounted(() => {
  allMessages.value = useMessages().$state.messages
})


function checkContinuouslyMessages (messages, message, index) {
  if (messages.length - 1 > index) {
    if (message.from == 1 || messages[index + 1].from == 1) return true
    if (message.from == 0 || messages[index + 1].from == 0) return true

    return false
  }
}
</script>

<style>
#msgClient::before {
  position: absolute;
  height: 20px;
  width: 9px;
  right: -7px;
  bottom: -3px;
  display: block;
  content: '';
}

#msgSystem::before {
  position: absolute;
  height: 20px;
  width: 9px;
  left: -7px;
  transform: scaleX(-1);
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

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  transition: all linear .3s;
  background: rgba(97, 97, 97, 0.5);
  opacity: .1;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(97, 97, 97, 0.9);
}
</style>