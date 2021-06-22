let show = true;

const menuSection = document.querySelector(".menuNav-other-device")
const menuContent = menuSection.querySelector(".menu-content-device")

menuContent.addEventListener("click", () => {
    menuSection.classList.toggle("on")
    show = !show;
}) 