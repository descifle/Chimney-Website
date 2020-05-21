const jumpTop = document.querySelector('.nav-top')

const shiftWindow = function() { scrollBy(0, -130) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

const scrollTop = () => {
    let y = window.scrollY
    if (y >= 800) {
        jumpTop.className = "nav-top show"
    } else {
        jumpTop.className = "nav-top hide"
    }
}

$(document).ready(() => {
    if(document.cookie.indexOf('visited=') >= 0) {

    } else {
        $(".modal").modal('toggle')
        document.cookie = 'visited=true'
    }
})

window.addEventListener('scroll', scrollTop)