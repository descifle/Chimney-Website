"use strict"

const jumpTop = document.querySelector('.nav-top')

// a function that fixes the offset of navigating inside of the page

const shiftWindow = () => { scrollBy(0, -130) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

const setCookie = (cookieName,cookieValue) => {
    const today = new Date()
    const expire = new Date()
    expire.setTime(today.getTime() + 3600000*24*14);
    document.cookie = cookieName+"="+encodeURI(cookieValue) + ";expires="+expire.toGMTString()
}

// A function that shows the nav-to-top div after a certain amount of pixels
const scrollTopAppear = () => {
    let y = window.scrollY
    if (y >= 800) {
        jumpTop.className = "nav-top show"
    } else {
        jumpTop.className = "nav-top hide"
    }
}

$(document).ready(() => {
    // If someone has already visited this page and accepts cookie the modal will not show again
    if(document.cookie.indexOf('visited=') >= 0) {

    }  else {
        $(".modal").modal('toggle')
    }

    $('#stop-modal').change(() => {
        document.cookie = setCookie('visited','true')
    })
    
    //fixes hard html collapse problem
    $('.navbar-collapse a').click(() => {
        $('.navbar-collapse').collapse('hide')
    })

    //animation to top
    $('.nav-top').click(() => {
        $('html ,body').animate({scrollTop : 0}, 800)
    })

    // Eventlistener for scrolling the DOM that fires scrollUp function
    window.addEventListener('scroll', scrollTopAppear)
})

$(window).on('load', () => {
    baguetteBox.run('.gallery');
})
