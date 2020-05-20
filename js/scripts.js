const jumpTop = document.querySelector('.nav-top')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')
const cookie = document.cookie

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

const closeModal = () => {
    modal.classList.add('fade')
    setTimeout(() => {
        modal.classList.remove('open')
        modal.style.display = "none"
    }, 2000) 
}

const openModal = () => {
    if (modal.className === 'modal open') {
        modal.style.display = "block"
        document.cookie = "modal=opened"
    } else {
        modal.style.display = "none"
    }
}

openModal()

window.addEventListener('scroll', scrollTop)
window.addEventListener('click', closeModal)