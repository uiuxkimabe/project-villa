// hamBtn
const hamBtn = document.querySelector('nav .hamBtn')
const menu = document.querySelector('nav .navbar')
hamBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
})

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamBtn.contains(e.target)) {
        menu.classList.remove('active')
    }
})

// Scroll Change
const navbar = document.querySelector('nav')
window.addEventListener('scroll',()=> {
    if (scrollY > 1) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
})

// Display Villa 
class CardVilla {
    constructor(villaName, pathFolder, priceWd, priceWe) {
        this.villa = villaName;
        this.path = pathFolder;
        this.extentionImg = ['jpg', 'png', 'jpeg']
        this.priceWd = priceWd;
        this.priceWe = priceWe;
    }
    // Function Display Villa
    displayVilla() {
        const parentCard = document.querySelector('#cardVilla .row')
        const createCard = document.createElement('a')
        const priceHighlight = `${this.priceWd.toLocaleString('id-ID')} \- ${this.priceWe.toLocaleString('id-ID')} / Malam`
        createCard.classList.add('card')
        createCard.setAttribute('href', `${this.path}.html`)
        createCard.setAttribute('target', '_blank')
        createCard.innerHTML = `
            <div class="card-header">
                <img src="./src/img/${this.path}/1.${this.extentionImg[0]||this.extentionImg[1]||this.extentionImg[2]}" alt="${this.path}">
            </div>
            <div class="card-body">
                <h3>${this.villa}</h3>
                <p>Rp. ${priceHighlight}</p>
            </div>
        `
        parentCard.appendChild(createCard)
    }
}

// Villa Bambu
const villaBambu = new CardVilla('Villa Bambu', 'villa-bambu', 2500000,3000000)
villaBambu.displayVilla()
// Villa gunung geulis
const villaGunungGelis = new CardVilla('Villa Gunung Geulis', 'villa-gunung-gelis', 1500000,3000000)
villaGunungGelis.displayVilla()
// Villa Puncak
const villaPuncak = new CardVilla('Villa Puncak', 'villa-puncak', 2000000,2500000)
villaPuncak.displayVilla()
// Villa Puri Indah
const villaPuriIndah = new CardVilla('Villa Puri Indah', 'villa-puri-indah', 1500000,2000000)
villaPuriIndah.displayVilla()