const menu_btn = document.querySelector("#mobile-menu");
menu_btn.addEventListener("click", (e) => {
  const menu = document.querySelector(".mobile-links");
  menu.classList.toggle("hidden");
});
