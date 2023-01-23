<template>
  <div class="flex flex-col h-full">

    <ul class="flex flex-col justify-end items-center h-full mb-5" v-for="messages in allMessages">
      <span
        class="w-fit bg-light-primary px-2 py-1 rounded-full text-sm font-semibold bg-light-info-content/75 text-light-main">Today</span>
      <UIChatMessage v-for="(message) in messages" :message="message"/>
    </ul>
  </div>
</template>


<script setup>
import { useMessages } from '../../stores/messages/index.ts';
const allMessages = ref(null)

onMounted(() => {
  allMessages.value = useMessages().$state.messages
})
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
</style>