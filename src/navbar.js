const navMenus = document.querySelector("nav #menus");
const navHamburger = document.querySelector("nav #hamburger");
const navBackdrop = document.querySelector("nav #backdrop");

const menusToggle = () => {
  navMenus.classList.toggle("translate-x-full");

  if (navBackdrop.classList.contains("hidden")) {
    navBackdrop.classList.toggle("hidden");
    setTimeout(() => {
      navBackdrop.classList.toggle("bg-black/50");
    }, 50);
  } else {
    navBackdrop.classList.toggle("bg-black/50");
    setTimeout(() => {
      navBackdrop.classList.toggle("hidden");
    }, 150);
  }
};

navHamburger.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  menusToggle();
});
navBackdrop.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  menusToggle();
});
