export default function themeSwitcher (newTheme: string) {
  const themeSystem: string = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' 
  let currentTheme = document.body.getAttribute('theme') || themeSystem
  
  if (currentTheme == 'auto') currentTheme = themeSystem

  if (newTheme != currentTheme) {
    if (newTheme == 'auto') newTheme = themeSystem
    
    document.querySelectorAll('.th').forEach((el, index) => {
      el.classList.value = el.classList.value.replace(currentTheme, newTheme)
    })
  }
}