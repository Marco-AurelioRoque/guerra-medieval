var mainPrincipal = document.querySelector("main")
var referencias = document.querySelector(".referencia-wrapper")
var casteloSR = document.querySelector(".castle-wrapper")

var aba1 = document.querySelector(".aba-open")
var aba2 = document.querySelector(".aba-open2")
var aba3 = document.querySelector(".aba-open3")

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