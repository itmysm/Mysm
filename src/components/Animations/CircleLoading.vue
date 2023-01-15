<template>
  <div class="th loading rounded-full" :class="props.classes"></div>
</template>

<script setup>

const props = defineProps({
  classes: {
    default: 'w-[40px] h-[40px] border-[3px] border-[transparent] border-t-light-element border-r-light-element'
  }
})
</script>

<style>
.loading {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>