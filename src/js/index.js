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

// List Villa 
export const listVilla = [
    {
        namaVilla: "Villa Bambu",
        type: "Reguler",
        pax: 10,
        link: "villa-bambu.html"
    }, 
    {
        namaVilla: "Villa Gunung Geulis",
        type: "Reguler",
        pax: 10,
        link: "villa-gunung-geulis.html"
    }, 
    {
        namaVilla: "Villa Puncak",
        type: "Medium",
        pax: 20,
        link: "villa-puncak.html"
    }, 
    {
        namaVilla: "Villa Puri Indah",
        type: "VIP",
        pax: 30,
        link: "villa-puri-indah.html"
    }
]

const cards = document.querySelectorAll('.card')
const cardTitle = document.querySelectorAll('.card-title')
const type = document.querySelectorAll('.type')
const pax = document.querySelectorAll('.pax')
const rate = document.querySelectorAll('.rate')
// link layout

class Villa {
    constructor(villaName, type, minimumPax, link) {
        this.name = villaName;
        this.type = type;
        this.pax = minimumPax;
        this.link = link;
        this.rate = 0;
    }

    cardDetail(param) {
        cardTitle[param].innerHTML = this.name;
        pax[param].innerHTML = `Capacity : ${this.pax} Pax`;        
    }

    price(param) {
        if (this.type == "Reguler") {
            this.rate = 1000000
            rate[param].innerHTML = `Start : ${this.rate.toLocaleString('id-ID')}`;
        } else if (this.type == "Medium") {
            this.rate = 1500000
            rate[param].innerHTML = `Start : ${this.rate.toLocaleString('id-ID')}`;
        } else {
            this.rate = 2000000
            rate[param].innerHTML = `Start : ${this.rate.toLocaleString('id-ID')}`;
        }
    }

    links(param) {
        cards[param].setAttribute('href', this.link);
        cards[param].setAttribute('data-aos', "fade-up");
        cards[param].setAttribute('data-aos-delay', 200);
        cards[param].style.color = "black";
        cards[param].style.fontSize = ".9rem"
    }
}

listVilla.forEach((data,index) => {
    const villas = new Villa(data.namaVilla, data.type, data.pax, data.link);
    villas.cardDetail(index);
    villas.price(index);
    villas.links(index)
});