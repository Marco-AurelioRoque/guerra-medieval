var mainPrincipal = document.querySelector("main")
var referencias = document.querySelector(".referencia-wrapper")
var casteloSR = document.querySelector(".castle-wrapper")

var aba1 = document.querySelector(".aba-open")
var aba2 = document.querySelector(".aba-open2")
var aba3 = document.querySelector(".aba-open3")

var DarkMode = document.querySelector(".darkMode")
var WhiteMode = document.querySelector(".whiteMode")
var body = document.querySelector("body")
var line = document.querySelector("#hrLine")
var left = document.querySelectorAll(".side-left")
var right = document.querySelectorAll(".side-right")

//Temas
function darkTheme() {
    DarkMode.style.display = "none"
    WhiteMode.style.display = "block"
    
    body.style.color = "white"
    body.style.background = "rgb(36, 35, 35)"
    line.style.background = "white"
    right.style.background = "gray"
    left.style.background = "gray"
}

function whiteTheme() {
    WhiteMode.style.display = "none"
    DarkMode.style.display = "block"
    body.style.color = "black"
    body.style.background = "rgb(241, 237, 237)"
    line.style.background = "black"
    right.style.background = "rgb(172, 169, 169)"
    left.style.background = "rgb(172, 169, 169)"
}

//Abas
function markAba() {
    aba1.style.display = "block"
    aba2.style.display = "none"
    aba3.style.display = "none"
}

function markAba2() {
    aba1.style.display = "none"
    aba2.style.display = "block"
    aba3.style.display = "none"
}

function markAba3() {
    aba1.style.display = "none"
    aba2.style.display = "none"
    aba3.style.display = "block"
}

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