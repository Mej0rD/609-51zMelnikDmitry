const menuButton = document.querySelector(".header__toggle");
const header = menuButton.closest(".header__inner");
const menuIcon = menuButton.querySelector("img");

menuButton.addEventListener("click", () => {
    const isOpen = header.classList.toggle("header__inner--menu-open");
    menuButton.closest(".header").classList.toggle("header--menu-open", isOpen);

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
    menuIcon.src = isOpen ? "images/menu-close.svg" : "images/menu.svg";

});