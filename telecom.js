//tarjetas
const tarjetas = document.querySelectorAll('.tarjeta');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const index = [...tarjetas].indexOf(entry.target);

        if (entry.isIntersecting) {

            entry.target.style.transitionDelay = `${index * 0.2}s`;
            entry.target.classList.add('show');
        } else {

            entry.target.style.transitionDelay = `${index * 0.2}s`;
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.3
});

// tarjetas.forEach(tarjeta => observer.observe(tarjeta));
// // Cambio de icono 
// const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
// const links = document.querySelectorAll('link[rel="icon"]');

// const updateIcon = () => {
//     const isDark = mediaQuery.matches;
//     const dataKey = isDark ? 'hrefDark' : 'hrefLight';

//     Array.prototype.slice.call(links).forEach(link => {
//         link.href = link.dataset[dataKey];
//     });
// };

// mediaQuery.addEventListener('change', updateIcon);
// updateIcon();

//   contacto
// Observador que activa/desactiva el efecto
// Seleccionamos la sección compromiso
// const Mapa = document.querySelector('');

// let active = false;
// const observer1 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         active = entry.isIntersecting;
//     });
// }, { threshold: 0.1 });

// observer1.observe(Mapa);

// const scaleInicial = 0.9;

// window.addEventListener('scroll', () => {
//     if (!active) return;

//     const scrollY = window.scrollY;
//     const start = Mapa.offsetTop;

//     const scaleMapa = scaleInicial - (scrollY - start) / 4000;
//     Mapa.style.transform = `scale(${scaleMapa})`;
// });
const cardsPromo = document.querySelectorAll(".promo-card");

let promoActual = 0;

function moverCarruselPromos() {
    const total = cardsPromo.length;

    const izquierda = (promoActual - 1 + total) % total;
    const centro = promoActual;
    const derecha = (promoActual + 1) % total;

    cardsPromo.forEach((card, index) => {
        card.classList.remove("is-left", "is-center", "is-right", "is-hidden");

        if (index === izquierda) {
            card.classList.add("is-left");
        } else if (index === centro) {
            card.classList.add("is-center");
        } else if (index === derecha) {
            card.classList.add("is-right");
        } else {
            card.classList.add("is-hidden");
        }
    });
}

moverCarruselPromos();

setInterval(() => {
    promoActual++;

    if (promoActual >= cardsPromo.length) {
        promoActual = 0;
    }

    moverCarruselPromos();
}, 3000);


//carrusel de servicios
document.addEventListener("DOMContentLoaded", function () {

    const sucursales = [
        { img: "recursos 2/sucursales/akropolis mérida.jpeg", nombre: "Akropolis", ciudad: "Mérida, Yucatán" },
        { img: "recursos 2/sucursales/andares gdl.jpg", nombre: "Andares", ciudad: "Guadalajara, Jalisco" },
        { img: "recursos 2/sucursales/barranca.jpeg", nombre: "Barranca", ciudad: "Guadalajara, Jalisco" },
        { img: "recursos 2/sucursales/belenes.jpeg", nombre: "Belenes", ciudad: "Zapopan, Jalisco" },
        { img: "recursos 2/sucursales/la perla zapopan.jpg", nombre: "La Perla", ciudad: "Zapopan, Jalisco" },
        { img: "recursos 2/sucursales/pdv alegra zapopan.jpeg", nombre: "PDV Alegra", ciudad: "Zapopan, Jalisco" },
        { img: "recursos 2/sucursales/PDV ALEIRA zapopan.jpeg", nombre: "PDV ALEIRA", ciudad: "Zapopan, Jalisco" },
        { img: "recursos 2/sucursales/PDV AMERICAS MERIDA.jpeg", nombre: "PDV Americas", ciudad: "Mérida, Yucatán" },
        { img: "recursos 2/sucursales/PDV DORADA merida.jpeg", nombre: "Sucursal Dorada", ciudad: "Mérida, Yucatán" },
        { img: "recursos 2/sucursales/PDV PROVIDENCIA gdl.jpeg", nombre: "Sucursal Plaza Patria", ciudad: "Guadalajara, Jalisco" },
        { img: "recursos 2/sucursales/plaza san luis gdl.jpeg", nombre: "Plaza San Luis", ciudad: "Guadalajara, Jalisco" },
        { img: "recursos 2/sucursales/punto sur gdl.jpg", nombre: "Punto Sur", ciudad: "Guadalajara, Jalisco" },
        { img: "recursos 2/sucursales/real center zapopan.jpg", nombre: "Real Center", ciudad: "Zapopan, Jalisco" },
        { img: "recursos 2/sucursales/sebastian Bach zapopan.jpeg", nombre: "Sebastian Bach", ciudad: "Zapopan, Jalisco" },
        { img: "recursos 2/sucursales/TLAJOMULCO.jpeg", nombre: "Tlajomulco", ciudad: "Tlajomulco, Jalisco" },
        { img: "recursos 2/sucursales/valle real zapopan.jpg", nombre: "Valle Real", ciudad: "Zapopan, Jalisco" },
    ];

    let slots = Array.from(document.querySelectorAll(".PuntosdeVentas .item1"));
const galeria = document.querySelector(".PuntosdeVentas .galeria");

let indiceInicialSucursal = 0;
let animandoSucursal = false;

const posicionesSucursal = [
    {
        transform: "translateX(-470px) scale(0.78)",
        zIndex: "3",
        opacity: "1"
    },
    {
        transform: "translateX(-270px) scale(1)",
        zIndex: "4",
        opacity: "1"
    },
    {
        transform: "translateX(0) scale(1.12)",
        zIndex: "5",
        opacity: "1"
    },
    {
        transform: "translateX(270px) scale(1)",
        zIndex: "4",
        opacity: "1"
    },
    {
        transform: "translateX(470px) scale(0.78)",
        zIndex: "3",
        opacity: "1"
    }
];

const salidaIzquierda = {
    transform: "translateX(-680px) scale(0.65)",
    zIndex: "1",
    opacity: "0"
};

const entradaDerecha = {
    transform: "translateX(680px) scale(0.65)",
    zIndex: "1",
    opacity: "0"
};

function ponerContenidoSucursal(slot, sucursal) {
    const img = slot.querySelector("img");
    const h4 = slot.querySelector("h4");
    const p = slot.querySelector("p");

    img.src = sucursal.img;
    img.alt = sucursal.nombre;
    h4.textContent = sucursal.nombre;
    p.textContent = sucursal.ciudad;
}

function aplicarPosicionSucursal(slot, posicion, conAnimacion = true) {
    slot.style.transition = conAnimacion
        ? "transform 1s cubic-bezier(0.25, 1, 0.35, 1), opacity 0.8s ease"
        : "none";

    slot.style.transform = posicion.transform;
    slot.style.zIndex = posicion.zIndex;
    slot.style.opacity = posicion.opacity;
}

function iniciarCarruselSucursal() {
    slots.forEach((slot, i) => {
        const sucursal = sucursales[(indiceInicialSucursal + i) % sucursales.length];

        ponerContenidoSucursal(slot, sucursal);
        aplicarPosicionSucursal(slot, posicionesSucursal[i], false);
    });
}

function crearNuevaSucursalDerecha() {
    const nuevoSlot = slots[0].cloneNode(true);

    const nuevaSucursal = sucursales[(indiceInicialSucursal + 5) % sucursales.length];

    ponerContenidoSucursal(nuevoSlot, nuevaSucursal);
    aplicarPosicionSucursal(nuevoSlot, entradaDerecha, false);

    galeria.appendChild(nuevoSlot);

    return nuevoSlot;
}

function siguienteSucursal() {
    if (animandoSucursal) return;

    animandoSucursal = true;

    const slotQueSale = slots[0];
    const nuevoSlot = crearNuevaSucursalDerecha();

    // Forzamos que el navegador registre primero la posición escondida
    nuevoSlot.offsetHeight;

    // 1. La primera sale hacia la izquierda
    aplicarPosicionSucursal(slotQueSale, salidaIzquierda, true);

    // 2. Las visibles se recorren hacia la izquierda
    aplicarPosicionSucursal(slots[1], posicionesSucursal[0], true);
    aplicarPosicionSucursal(slots[2], posicionesSucursal[1], true);
    aplicarPosicionSucursal(slots[3], posicionesSucursal[2], true);
    aplicarPosicionSucursal(slots[4], posicionesSucursal[3], true);

    // 3. La nueva entra desde la derecha al mismo tiempo
    aplicarPosicionSucursal(nuevoSlot, posicionesSucursal[4], true);

    setTimeout(() => {
        slotQueSale.remove();

        slots = [
            slots[1],
            slots[2],
            slots[3],
            slots[4],
            nuevoSlot
        ];

        indiceInicialSucursal = (indiceInicialSucursal + 1) % sucursales.length;
        animandoSucursal = false;

    }, 1000);
}

if (slots.length > 0) {
    iniciarCarruselSucursal();
    setInterval(siguienteSucursal, 3800);
}

});

//   contacto
// Observador que activa/desactiva el efecto
// Seleccionamos la sección compromiso
const uneteNuestro = document.querySelector('.uneteNuestro');

let active = false;
const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        active = entry.isIntersecting;
    });
}, { threshold: 0.1 });

observer1.observe(uneteNuestro);

const scaleInicial = 1.2; // 👈 valor inicial de escala (ajústalo a gusto)

window.addEventListener('scroll', () => {
    if (!active) return; // solo aplica si la sección está visible

    const scrollY = window.scrollY;
    const start = uneteNuestro.offsetTop;

    const scaleUneteNuestro = scaleInicial - (scrollY - start) / 4000;
    uneteNuestro.style.transform = `scale(${scaleUneteNuestro})`;
});