<template>
  <li class="w-full flex justify-center bg-light mt-3">
    <div class="w-[670px] max-w-full flex px-5 lg:px-3" :class="message.type ? 'justify-end' : 'justify-start'">
      <p :id="message.type ? 'msgClient' : 'msgSystem'"
        class="w-fit max-w-[70%] bg-light-main rounded-md px-2 py-2 edge-light relative break-words"
        :class="message.type ? 'rounded-br' : 'rounded-bl'">
        {{ message.text }}

        <span
          class="text-[12px] md:text-[13px] text-light-info-content relative top-[6px] ml-[8px] float-right bottom-auto select-none">18:18
          PM</span>
      </p>
    </div>
  </li>
</template>



<script setup>
const props = defineProps({
  message: {
    require: true
  }
})
</script>