// All of the Starter Variables
const light = document.getElementById('light')
const dark = document.getElementById('dark')
const visitsWebsite = document.getElementById('numberOfVisits')
const userName = document.getElementById('nameOfUser')

/// Gather information for current Session from Local Storage
let userStorage = window.localStorage.getItem('userStorage')
const visitorCounter = window.localStorage.getItem('visitorCounter')
let currentTheme = window.localStorage.getItem('currentTheme')
let totalVisits = 1

const docHeader = document.getElementsByTagName('header')
const docMain = document.getElementsByTagName('main')
const docFooter = document.getElementsByTagName('footer')

if (userStorage === null || visitorCounter === 0 || visitorCounter === 'NaN' || currentTheme === null) {
  /// Gather information from User
  userStorage = window.prompt('Could you please tell me your name?').trim()
  currentTheme = window.prompt('Could you type which theme you want? [light] or [dark]').trim()
  /// Permenantly store informaion into LocalStorage
  window.localStorage.setItem('userStorage', userStorage)
  window.localStorage.setItem('visitorCounter', 1)
  window.localStorage.setItem('currentTheme', currentTheme)
} else {
  totalVisits = 1 + parseInt(visitorCounter)
  window.localStorage.setItem('visitorCounter', totalVisits)
}

userName.innerHTML = userStorage
visitsWebsite.innerHTML = totalVisits
light.addEventListener('click', lightTheme)
dark.addEventListener('click', darkTheme)

if (currentTheme === 'light') {
  lightTheme()
} else if (currentTheme === 'dark') {
  darkTheme()
}

function lightTheme () {
  document.body.setAttribute('class', 'bg-light')
  for (let ldocHeader = 0; ldocHeader < docHeader.length; ldocHeader++) {
    docHeader[ldocHeader].setAttribute('class', 'pageStyle col m-5 text-center bg-dark text-light')
  }
  for (let ldocMain = 0; ldocMain < docMain.length; ldocMain++) {
    docMain[ldocMain].setAttribute('class', 'pageStyle col m-5 col text-center bg-dark text-light')
  }
  document.getElementById('light').setAttribute('class', 'btn btn-light')
  document.getElementById('dark').setAttribute('class', 'btn btn-light')
  for (let idocFooter = 0; idocFooter < docFooter.length; idocFooter++) {
    docFooter[idocFooter].setAttribute('class', 'pageStyle col m-5 col text-center bg-dark text-light')
  }
  window.localStorage.setItem('currentTheme', 'light')
}
function darkTheme () {
  document.body.setAttribute('class', 'bg-dark')

  for (let ddocHeader = 0; ddocHeader < docHeader.length; ddocHeader++) {
    docHeader[ddocHeader].setAttribute('class', 'pageStyle col m-5 text-center bg-light text-dark')
  }
  for (let ddocMain = 0; ddocMain < docMain.length; ddocMain++) {
    docMain[ddocMain].setAttribute('class', 'pageStyle col m-5 col text-center bg-light text-dark')
  }
  document.getElementById('light').setAttribute('class', 'btn btn-dark')
  document.getElementById('dark').setAttribute('class', 'btn btn-dark')
  for (let ddocFooter = 0; ddocFooter < docFooter.length; ddocFooter++) {
    docFooter[ddocFooter].setAttribute('class', 'pageStyle col m-5 col text-center bg-light text-dark')
  }
  window.localStorage.setItem('currentTheme', 'dark')
}
