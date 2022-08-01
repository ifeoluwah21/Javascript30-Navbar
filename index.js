const navBar = document.querySelector(`.header__nav`);
const menuBtn = document.querySelector(`.header__menu`)
const closeBtn = document.querySelector(`.nav__close-icon`);
menuBtn.addEventListener(`click`, toggleNav)
closeBtn.addEventListener(`click`, toggleNav)

function toggleNav(e) {
    e.preventDefault();
    navBar.classList.toggle(`header__nav--toggle`)
}