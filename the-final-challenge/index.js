const get = (elementId) => document.getElementById(elementId)

let shadowTimeout

const btnOpenNav  = get('btn-open-nav')
const btnCloseNav = get('btn-close-nav')
const header      = get('header')
const navHeader   = get('nav-header')

// Adapted from: https://stackoverflow.com/a/4620986/247626
const dropShadow = function () {

  header.classList.add('box-shadow')

  if (innerWidth <= 700) {
    navHeader.classList.add('box-shadow')
  }

  clearTimeout(shadowTimeout)

  shadowTimeout = setTimeout(() => {
    header.classList.remove('box-shadow')
    navHeader.classList.remove('box-shadow')
  }, 150)

}
// dunno why, but ..
// .. it works without the JS ubiquitous terminating `}, false)`

const toggleNav = function () {
  navHeader.classList.toggle('display-nav')
}

// Apparently & interestingly:
//  if no recepient is provided for a method call
//  then `window` would be the default recipient:
window.addEventListener('scroll', () => dropShadow())

btnOpenNav.addEventListener('click', () => toggleNav())
btnCloseNav.addEventListener('click', () => toggleNav())
