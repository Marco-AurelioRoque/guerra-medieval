var mainPrincipal = document.querySelector("main")
var referencias = document.querySelector(".referencia-wrapper")
var casteloSR = document.querySelector(".castle-wrapper").display = "block"

function refer() {
    referencias.style.display = "block"
    mainPrincipal.style.display = "none"
}

function castle() {
    referencias.style.display = "none"
    mainPrincipal.style.display = "none"
    casteloSR.style.display = "block"
}