
const menuButton = document.querySelector(".header-btn-menu");
const menuCloseButton = document.querySelector(".mobile-menu-close-btn");
const menuContainer = document.querySelector(".mobile-menu");
const menuItem = document.querySelector("mobile-menu-navi-item-link");

menuButton.addEventListener("click", () => {
  menuContainer.classList.add("is-open");
});

menuCloseButton.addEventListener("click", () => {
  menuContainer.classList.remove("is-open");
});

menuItem.addEventListener("click", () => {
  menuContainer.classList.remove("is-open");
});
  

