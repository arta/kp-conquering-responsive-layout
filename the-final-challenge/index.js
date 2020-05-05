const get = (elementId) => document.getElementById(elementId)

const btnOpenNav  = get('btn-open-nav')
const btnCloseNav = get('btn-close-nav')
const navHeader   = get('nav-header')

const toggleNav = function () {
  navHeader.classList.toggle('show-nav')
}

btnOpenNav.addEventListener('click', () => toggleNav())
btnCloseNav.addEventListener('click', () => toggleNav())
