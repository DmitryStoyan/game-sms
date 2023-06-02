const button = document.querySelector(".menu-modal__button");
const menu = document.querySelector(".menu-modal");

button.addEventListener("click", function () {
  menu.classList.add("hidden");
});
