<template>
  <div>
  </div>
</template>

<script setup>
import setBrowserInfo from './utils/register/collect-data.ts'
import setAppearance from './utils/register/appearance.ts'


const registeredUser = ref()

onMounted(() => {
  registeredUser.value = localStorage.getItem('browserInfo') ? 1 : 0

  if (!registeredUser.value) {
    setBrowserInfo()
    setAppearance() // Set a default appearance(theme, language..)
  }
})

</script>
