// All of the Starter Variables
const pageBody = document.getElementById('pageBody')
const pageStyle = document.getElementsByClassName('pageStyle')
const userInformation = document.getElementById('userInformation') 
const light = document.getElementById('light')
const dark = document.getElementById('dark')
const visitsWebsite = document.getElementById("numberOfVisits")
const userName = document.getElementById("nameOfUser")

///Gather information for current Session from Local Storage
let userStorage = window.localStorage.getItem('userStorage')
let visitorCounter = window.localStorage.getItem('visitorCounter')
let currentTheme = window.localStorage.getItem('currentTheme')

const docHeader = document.getElementsByTagName('header')
const docMain = document.getElementsByTagName('main')
const docFooter = document.getElementsByTagName("footer")

if (userStorage === null || visitorCounter === 0 || visitorCounter === "NaN" || currentTheme === null) {
    ///Gather information from User
    userStorage = window.prompt("Could you please tell me your name?").trim()
    currentTheme = window.prompt("Could you type which theme you want? [light] or [dark]").trim()
    
    ///Permenantly store informaion into LocalStorage
    window.localStorage.setItem('userStorage', userStorage)
    window.localStorage.setItem('visitorCounter', 1)
    window.localStorage.setItem('currentTheme', currentTheme)
} else {
    totalVisits = 1 + parseInt(visitorCounter)
    window.localStorage.setItem('visitorCounter', totalVisits)
}

if (currentTheme == "light") {
    lightTheme()
} else if (currentTheme == "dark") {
    darkTheme()
}

userName.innerHTML = userStorage
visitsWebsite.innerHTML = totalVisits
light.addEventListener('click', lightTheme)
dark.addEventListener('click', darkTheme)

function lightTheme() {
    console.log(currentTheme)
    document.body.setAttribute('class', 'bg-light')
    for (var i = 0; i < docHeader.length; i++) {
        docHeader[i].setAttribute('class', 'pageStyle col m-5 text-center bg-dark text-light')
    }
    for (var i = 0; i < docMain.length; i++) {
        docMain[i].setAttribute('class', 'pageStyle col m-5 col text-center bg-dark text-light')
    }
    document.getElementById('light').setAttribute('class','btn btn-light')
    document.getElementById('dark').setAttribute('class','btn btn-light')
    for (var i = 0; i < docFooter.length; i++) {
        docFooter[i].setAttribute('class', 'pageStyle col m-5 col text-center bg-dark text-light')
    }
    window.localStorage.setItem('currentTheme', "light")
}
    
function darkTheme() {
    console.log(currentTheme)
    document.body.setAttribute('class', 'bg-dark')

    for (var i = 0; i < docHeader.length; i++) {
        docHeader[i].setAttribute('class', 'pageStyle col m-5 text-center bg-light text-dark')
    }
    for (var i = 0; i < docMain.length; i++) {
        docMain[i].setAttribute('class', 'pageStyle col m-5 col text-center bg-light text-dark')
    }
    document.getElementById('light').setAttribute('class','btn btn-dark')
    document.getElementById('dark').setAttribute('class','btn btn-dark')
    for (var i = 0; i < docFooter.length; i++) {
        docFooter[i].setAttribute('class', 'pageStyle col m-5 col text-center bg-light text-dark')
    }
    window.localStorage.setItem('currentTheme', "dark")
}