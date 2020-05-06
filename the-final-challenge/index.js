// Shadow manipulation adapted from:
// https://stackoverflow.com/a/4620986/247626
// dunno why, but ..
// .. it works without the JS ubiquitous terminating `}, false)`

const get = (elementId) => document.getElementById(elementId)

const btnOpenNav  = get('btn-open-nav')
const btnCloseNav = get('btn-close-nav')
const header      = get('header')
const navHeader   = get('nav-header')

let shadowTimeout

const dropShadow = function () {

  header.classList.add('box-shadow')

  if (innerWidth <= 700) {
    navHeader.classList.add('box-shadow')
  }

  clearTimeout(shadowTimeout)

  shadowTimeout = setTimeout(() => removeShadow(), 150)

}

const removeShadow = function () {
  header.classList.remove('box-shadow')
  navHeader.classList.remove('box-shadow')
}

const toggleNav = function () {
  navHeader.classList.toggle('display-nav')
}

// Apparently & interestingly:
//  if no recepient is provided for a method call
//  then `window` would be the default recipient:
window.addEventListener('scroll', () => dropShadow())

btnOpenNav.addEventListener('click', () => toggleNav())
btnCloseNav.addEventListener('click', () => toggleNav())
