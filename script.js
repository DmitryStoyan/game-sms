const buttonStart = document.querySelector(".button-start");
const menu = document.querySelector(".menu-modal");

buttonStart.addEventListener("click", function () {
  menu.classList.add("hidden");
});

const buttonRules = document.querySelector(".button-rules");

buttonRules.addEventListener("click", function () {
  window.location.href = "./rules/rules.html";
});
