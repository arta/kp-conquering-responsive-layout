// Shadow manipulation adapted from:
// https://stackoverflow.com/a/4620986/247626
// dunno why, but ..
// .. it works without the JS ubiquitous terminating `}, false)`

const get = (elementId) => document.getElementById(elementId)

const btnOpenNav  = get('btn-open-nav')
const btnCloseNav = get('btn-close-nav')
const header      = get('header')
const nav         = get('nav-header')

let expireHeaderNavShadow

const addExpiringHeaderNavShadow = () => {
  clearTimeout(expireHeaderNavShadow)
  addHeaderNavShadow()
  expireHeaderNavShadow = setTimeout(() => removeHeaderNavShadow(), 150)
}

const addHeaderNavShadow = () => {
  header.classList.add('box-shadow')
  if (innerWidth <= 700) { nav.classList.add('box-shadow') }
}

const removeHeaderNavShadow = () => {
  header.classList.remove('box-shadow')
  nav.classList.remove('box-shadow')
}

const toggleNav = () => nav.classList.toggle('display-nav')

// Apparently & interestingly:
//  if no recepient is provided for a method call
//  then `window` would be the default recipient:
window.addEventListener('scroll', () => addExpiringHeaderNavShadow())

btnOpenNav.addEventListener('click', () => toggleNav())
btnCloseNav.addEventListener('click', () => toggleNav())
