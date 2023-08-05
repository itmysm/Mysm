const content = `
<div class="main">
  <div class="solution">
    <img class="light-logo icon" src="./assets/icons/dark-logo.png">
    <img class="dark-logo icon" src="./assets/icons/light-logo.png">
    <h2 class="second_title">No internet</h2>
    <p class="title_solution">Try:</p>
    <ul class="list_solution">
      <li class="solutions">Checking the network cables, telecommunications tower, and router</li>
      <li class="solutions">Call Elon Musk and tell him that the internet is down</li>
      <li class="solutions"><a download="resume" href="./MeysamKianiResume.pdf">Download My Resume</a> Or <a
        target="_blank"	href="https://github.com/itmysm">Visit My Github Profile</a></li>
    </ul>

    <p class="error">ERR_IDK_WTF</p>
  </div>
</div>
`

document.addEventListener('DOMContentLoaded', () => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.querySelector('body').innerHTML = content
  document.querySelector('html').setAttribute('data-theme', isDark ? 'dark' : 'light')
})