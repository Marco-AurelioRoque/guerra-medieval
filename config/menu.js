let show = true;

const menuSection = document.querySelector(".menuNav-other-device")
const menuContent = menuSection.querySelector(".menu-content-device")

menuContent.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on")
    show = !show;
}) 