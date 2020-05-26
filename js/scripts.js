"use strict"

const jumpTop = document.querySelector('.nav-top')

// a function that fixes the offset of navigating inside of the page

const shiftWindow = () => { scrollBy(0, -130) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

// const setCookie()

// A function that shows the nav-to-top div after a certain amount of pixels
const scrollTop = () => {
    let y = window.scrollY
    if (y >= 800) {
        jumpTop.className = "nav-top show"
    } else {
        jumpTop.className = "nav-top hide"
    }
}

// If someone has already visited this page and accepts cookie the modal will not show again
$(document).ready(() => {
    if(document.cookie.indexOf('visited=') >= 0) {

    }  else {
        $(".modal").modal('toggle')
    }
})

$('#stop-modal').change(() => {
    document.cookie = 'visited=true'
})

//fixes hard html collapse problem
$('.navbar-collapse a').click(() => {
    $('.navbar-collapse').collapse('hide')
})

// Eventlistener for scrolling the DOM that fires scrollTop function
window.addEventListener('scroll', scrollTop)