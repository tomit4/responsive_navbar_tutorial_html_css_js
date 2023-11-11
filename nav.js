const primaryNav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', () => {
    const visibility =
        primaryNav.getAttribute('data-visible') === 'false' ? false : true
    primaryNav.setAttribute('data-visible', !visibility)
    navToggle.setAttribute('aria-expanded', !visibility)
})

/* Stop Animations During Window Resizing Trick
 * https://css-tricks.com/stop-animations-during-window-resizing/*/
let resizeTimer
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper')
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper')
    }, 400)
})
