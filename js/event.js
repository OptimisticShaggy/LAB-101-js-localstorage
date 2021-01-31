// All of the Starter Variables
const pageBody = document.getElementById('pageBody')
const pageStyle = document.getElementsByClassName('pageStyle')
const userInformation = document.getElementById('userInformation') 
const light = document.getElementById('light')
const dark = document.getElementById('dark')

///Gather information for current Session from Local Storage
let userStorage = window.localStorage.getItem('userStorage')
let visitorCounter = window.localStorage.getItem('visitorCounter')
let currentTheme = window.localStorage.getItem('currentTheme')

if (userStorage === null || visitorCounter === 0 || currentTheme === null) {
    ///Gather information from User
    userStorage = window.prompt("Could you please tell me your name?").trim()
    currentTheme = window.prompt("Could you type which theme you want? [light] or [dark]").trim()
    
    ///Permenantly store informaion
    window.localStorage.setItem('userStorage', userStorage)
    window.localStorage.setItem('visitorCounter', 1)
    window.localStorage.setItem('currentTheme', currentTheme)
} else {
    totalVisits = 1 + parseInt(visitorCounter)
    window.localStorage.setItem('visitorCounter', totalVisits)
}

light.addEventListener('click', function () {
    document.body.setAttribute('class', 'bg-light')
    document.getElementsByTagName('header').setAttribute('class', 'pageStyle col m-5 text-center bg-dark text-light')
    document.getElementsByTagName('main').setAttribute('class', 'pageStyle col m-5 col text-center bg-dark text-light')
    document.getElementById('light').setAttribute('class','btn btn-light')
    document.getElementById('dark').setAttribute('class','btn btn-light')
    document.getElementsByTagName("footer").setAttribute('class', 'pageStyle col m-5 col text-center bg-dark text-light')
})

dark.addEventListener('click', function () {
    document.body.setAttribute('class', 'bg-dark')
    document.getElementsByTagName('header').setAttribute('class', 'pageStyle col m-5 text-center bg-light text-dark')
    document.getElementsByTagName('main').setAttribute('class', 'pageStyle col m-5 col text-center bg-light text-dark')
    document.getElementById('light').setAttribute('class','btn btn-dark')
    document.getElementById('dark').setAttribute('class','btn btn-dark')
    document.getElementsByTagName("footer").setAttribute('class', 'pageStyle col m-5 col text-center bg-light text-dark')
})