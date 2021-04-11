const menuIcon = document.querySelector(".header__icon");
const menu = document.querySelector(".nav");

menuIcon.addEventListener("click", function () {
    menu.classList.toggle("open");
});

