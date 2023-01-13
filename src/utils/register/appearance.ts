function setAppearance (newAppearance: Object) {
  let appearance: Object = newAppearance || {
    language: navigator.language,
    theme: userTheme(),
    register: new Date().getTime()
  }

  localStorage.setItem('appearance', JSON.stringify(appearance))
}

function userTheme () {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default setAppearance;