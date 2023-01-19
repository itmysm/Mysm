<template>
  <button class="th relative transition-all relative" @click="changeStatus">
    <Icon name="teenyicons:terminal-outline"
      class="th text-[28px] lg:text-2xl h-[28px] text-[#b7aaaa]" v-show="!status" />
      
      <Icon name="teenyicons:terminal-solid"
      class="th text-[28px] lg:text-2xl h-[28px] text-light-primary" v-show="status" />
  </button>
</template>

<script setup>
const props = defineProps({
  status: {
    default: false,
    require: true
  }
})

const emit = defineEmits(['statusHandler'])

function changeStatus () {
  const btnStatus = !props.status
  emit('statusHandler', btnStatus)
}

</script>

<style>

</style>