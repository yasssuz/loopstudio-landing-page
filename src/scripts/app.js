import "../styles/index.scss";
import handleMenu from "./handleMenu";

const toggleMenuBtn = document.querySelector(".header__toggle-menu");

toggleMenuBtn.addEventListener("click", () => handleMenu(toggleMenuBtn));
