<template>
  <div class="th w-full overflow-hidden h-[100vh] bg-light-main overflow-y-hidden">
    <ChatPage />
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
    setFontFamily(appearance.language)
  }else {
    setBrowserInfo()
    setAppearance() // Set a default appearance(theme, language..)
    themeSwitcher('auto')
  }
})


function setFontFamily (lang) {
  if (lang.direction == 'ltr') document.body.classList.add('font-main')
  else document.body.classList.add('font-persian')
}
</script>