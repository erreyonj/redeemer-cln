
// GLOBAL VARIABLES
///////////
const allOfHeaderMenu = document.querySelector('#burgerDiv')
const wrapper = document.querySelector('.wrapper')
const fullscreenLO = document.querySelector('#fullscreenLO')
const logo = document.querySelector('#headerLogoBox')



// GLOBAL FUNCTIONS
//////////


// quick toggle menu function for header
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('closed')
    document.querySelector('#headerBurger').classList.toggle('closed')
    document.querySelector('#headerX').classList.toggle('closed')
}


// screen-size 1200 functions
const hideMenu = () => {
    if(window.screen.availWidth>=1200){
        allOfHeaderMenu.setAttribute('style','display:none')
        return
    }
    allOfHeaderMenu.toggleAttribute('style')
}
const removeMobileLO = () => {
    if(window.screen.availWidth>=1200){
        wrapper.setAttribute('id','fullscreenLO')
        return
    }
    wrapper.setAttribute('id','mobileLayout')
}
const moveLogo = () => {
    if(window.screen.availWidth>=1200){
        logo.setAttribute('style','position:static')
        return
    }
    logo.toggleAttribute('style')
}





const screen1200 = () => {
   hideMenu()
   removeMobileLO()
   moveLogo()
}


// EVENT LISTENERS
//////////////

// event listeners for both hanmburger and x icons in menu button
document.querySelector('#headerBurger').addEventListener('click',toggleMenu)
document.querySelector('#headerX').addEventListener('click',toggleMenu)
// resize event listener.. quick fix for broken styles
window.addEventListener('resize', screen1200)
