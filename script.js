const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  if (scrollY > 100) {
    header.classList.add("bg");
    header.classList.remove("nobg");
  }
  else if (scrollY <= 100) {
    header.classList.remove("bg");
    header.classList.add("nobg");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeElement = document.querySelector(".sub-title");
  fadeElement.classList.add("show");
});