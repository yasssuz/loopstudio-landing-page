export default function handleMenu(toggler) {
  const nav = document.querySelector(".header__navigation");
  const html = document.querySelector("html");

  nav.classList.toggle("active");
  toggler.classList.toggle("active");
  html.classList.toggle("navbar-active");
}
