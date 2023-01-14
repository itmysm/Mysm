<template>
  <div class="th w-full bg-light-primary">
  </div>
</template>

<script setup>
import setBrowserInfo from './utils/register/browser-info.ts'
import setAppearance from './utils/register/appearance.ts'
import themeSwitcher from './utils/interface/theme-switcher';


const registeredUser = ref()

onMounted(() => {
  registeredUser.value = localStorage.getItem('browserInfo') ? 1 : 0 // check user is registered or not
  const body = document.querySelector('body')
  
  if (registeredUser.value) {
    const appearance = JSON.parse(localStorage.getItem('appearance'))
    body.setAttribute('theme', appearance.theme)
    themeSwitcher(appearance.theme)
  }else {
    setBrowserInfo()
    setAppearance() // Set a default appearance(theme, language..)
    themeSwitcher('auto')
  }
})
</script>
