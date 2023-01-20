<template>
  <div class="absolute min-w-max max-w-[250px] bg-light-main rounded-lg rounded-br-sm transition duration-200 ease-linear">
      <p class="max-w-[inherit] text-sm lg:text-base text-left px-3 py-3">{{ props.msg }}</p>
      <UIIconsEdge class="absolute right-[-8px] bottom-[-3px]" />
  </div>
</template>


<script setup>
const props = defineProps({
  msg: {
    required: true,
    default: 'this is a test'
  }
})
</script>