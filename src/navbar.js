const navbarActions = () => {
  const navHamburger = document.querySelector("nav #hamburger");
  const backdrop = document.querySelector("#nav-backdrop");
  const body = document.querySelector("body");
  const sidebar = document.querySelector("#sidebar");

  const menusToggle = () => {
    body.classList.toggle("overflow-y-hidden");
    sidebar.classList.toggle("active");

    if (backdrop.classList.contains("hidden")) {
      backdrop.classList.toggle("hidden");
      setTimeout(() => {
        backdrop.classList.toggle("bg-black/50");
      }, 50);
    } else {
      backdrop.classList.toggle("bg-black/50");
      setTimeout(() => {
        backdrop.classList.toggle("hidden");
      }, 150);
    }
  };

  navHamburger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    menusToggle();
  });
  backdrop.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    menusToggle();
  });
};

navbarActions();
