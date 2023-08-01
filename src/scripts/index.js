document.addEventListener('DOMContentLoaded', () => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  document.querySelector('html').setAttribute('data-theme', isDark ? 'dark' : 'light')
})