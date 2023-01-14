function getBrowserInfo () {
  let browserInfo: Object = {
    browserName: navigator.appName,
    browserVersion: navigator.appVersion,
    language: navigator.language,
    device: navigator.userAgent,
    timeZone:  Intl.DateTimeFormat().resolvedOptions().timeZone,
    os: navigator.platform,
    register: new Date().getTime()
  }

  localStorage.setItem('browserInfo', JSON.stringify(browserInfo))
}

export default getBrowserInfo;