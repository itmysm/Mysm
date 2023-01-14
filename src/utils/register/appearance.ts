interface Appearance {
  language: object;
  theme: string;
  register: string;
}


function setAppearance (newAppearance: Appearance) {
  let appearance: Appearance = newAppearance || {
    language: {language: 'en', direction: 'ltr'},
    theme: 'auto',
    register: new Date().getTime()
  }

  localStorage.setItem('appearance', JSON.stringify(appearance))
  document.body.setAttribute('theme', checkTheme(appearance.theme))
}


function checkTheme (theme: string) {
  return theme == 'auto' ? window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : theme
}

export default setAppearance;