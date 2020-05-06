const get = (elementId) => document.getElementById(elementId)

const btnOpenNav  = get('btn-open-nav')
const btnCloseNav = get('btn-close-nav')
const header      = get('header')
const navHeader   = get('nav-header')

const toggleNav = function () {
  navHeader.classList.toggle('show-nav')
}

btnOpenNav.addEventListener('click', () => toggleNav())
btnCloseNav.addEventListener('click', () => toggleNav())

// https://stackoverflow.com/a/4620986/247626

// apparently & interestingly,
// if no recepient is provided for a method call, e.g. addEventListener()
// then `window` is the recipient

let timer

addEventListener('scroll', () => {

  header.classList.add('drop-shadow')

  if (innerWidth <= 700) {
    navHeader.classList.add('drop-shadow')
  }

  clearTimeout(timer)

  timer = setTimeout(() => {
    header.classList.remove('drop-shadow')
    navHeader.classList.remove('drop-shadow')
  }, 150)

})

// dunno why, but ..
// .. it works without the JS ubiquitous `..}, false)`
