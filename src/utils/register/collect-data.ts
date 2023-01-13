function getBrowserInfo () {
  let browserInfo: Object = {
    browserName: navigator.appName,
    browserVersion: navigator.appVersion,
    language: navigator.language,
    device: navigator.userAgent,
    timeZone:  Intl.DateTimeFormat().resolvedOptions().timeZone,
    os: navigator.platform,
    theme: userTheme(),
    register: new Date().getTime()
  }

  localStorage.setItem('browserInfo', JSON.stringify(browserInfo))
}

function userTheme () {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default getBrowserInfo;