// hamBtn
const hamBtn = document.querySelector('nav .hamBtn .menuBtn')
const menu = document.querySelector('nav .menu')
hamBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
})

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamBtn.contains(e.target)) {
        menu.classList.remove('active')
    }
})