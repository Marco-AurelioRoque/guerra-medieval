var mainPrincipal = document.querySelector("main")
var referencias = document.querySelector(".referencia-wrapper")
var casteloSR = document.querySelector(".castle-wrapper")

var aba1 = document.querySelector(".aba-open")
var aba2 = document.querySelector(".aba-open2")
var aba3 = document.querySelector(".aba-open3")

var DarkMode = document.querySelector(".darkMode")
var WhiteMode = document.querySelector(".whiteMode")
var WhiteModeMenu = document.querySelector(".menuNav-other-device .whiteMode")
var DarkModeMenu = document.querySelector(".menuNav-other-device .darkMode")
var body = document.querySelector("body")
var line = document.querySelector("#hrLine")
var h2 = document.querySelector("h2")
var h1 = document.querySelector("h1")
var header = document.querySelectorAll("header")
var menuMobile = document.querySelector(".menuNav-other-device")



//Temas
function darkTheme() {
    DarkMode.style.display = "none"
    WhiteMode.style.display = "block"

    DarkModeMenu.style.display = "none"
    WhiteModeMenu.style.display = "block"
    
    h2.style.color = "white"
    body.style.color = "white"
    body.style.background = "rgb(36, 35, 35)"
    line.style.background = "white"
}

function whiteTheme() {
    WhiteMode.style.display = "none"
    DarkMode.style.display = "block"
    
    WhiteModeMenu.style.display = "none"
    DarkModeMenu.style.display = "block"

    h1.style.color = "black"
    h2.style.color = "black"
    body.style.color = "black"
    body.style.background = "rgb(241, 237, 237)"
    line.style.background = "black"
}

function whiteThemeMenu() {    
    WhiteModeMenu.style.display = "none"
    DarkModeMenu.style.display = "block"

    h1.style.color = "black"
    h2.style.color = "black"
    body.style.color = "black"
    body.style.background = "rgb(241, 237, 237)"
    line.style.background = "black"
}


function darkThemeMenu() {
    DarkMode.style.display = "none"
    WhiteMode.style.display = "block"

    DarkModeMenu.style.display = "none"
    WhiteModeMenu.style.display = "block"
    
    h2.style.color = "white"
    body.style.color = "white"
    body.style.background = "rgb(36, 35, 35)"
    line.style.background = "white"
}

//Abas
function markAba() {
    h1.innerHTML = "Guerra da idade média"
    aba1.style.display = "block"
    aba2.style.display = "none"
    aba3.style.display = "none"
}

function markAba2() {
    h1.innerHTML = "Castelo - SR"
    aba1.style.display = "none"
    aba2.style.display = "block"
    aba3.style.display = "none"
}

function markAba3() {
    h1.innerHTML = "Referências"
    aba1.style.display = "none"
    aba2.style.display = "none"
    aba3.style.display = "block"
}

//Menu

function contentPrincipal() {
    referencias.style.display = "none"
    mainPrincipal.style.display = "block"
    casteloSR.style.display = "none"
}

function refer() {
    referencias.style.display = "block"
    mainPrincipal.style.display = "none"
    casteloSR.style.display = "none"
}

function castle() {
    referencias.style.display = "none"
    mainPrincipal.style.display = "none"
    casteloSR.style.display = "block"
}


