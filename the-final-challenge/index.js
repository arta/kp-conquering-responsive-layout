const get = (elementId) => document.getElementById(elementId)

const btnOpenNav  = get('btn--open-nav')
const btnCloseNav = get('btn--close-nav')
const headerNav   = get('header-nav')

const toggleNav = function () {
  headerNav.classList.toggle('show-nav')
}

btnOpenNav.addEventListener('click', () => toggleNav())
btnCloseNav.addEventListener('click', () => toggleNav())
