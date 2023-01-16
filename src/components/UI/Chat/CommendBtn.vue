<template>
  <button class="th relative transition-all relative" @click="xx">
    <Icon name="bi:slash-square"
      class="th text-[28px] lg:text-2xl h-[28px] text-[#b7aaaa]" v-show="!open" />
      
      <Icon name="bi:slash-square-fill"
      class="th text-[28px] lg:text-2xl h-[28px] text-light-primary" v-show="open" />
  </button>
</template>

<script setup>
const open = ref(false)

function xx () {
  open.value = !open.value
}
</script>

<style>

</style>