
//----carousel-------
let imagen = document.getElementById('imagenCarousel');
let texto = document.getElementById('textoCarousel');

let defaul = document.getElementById('default');

const estilosKlk = {
    texto1: 'Bookmark in once click',
    texto2: 'Intelligent search',
    texto3: 'Share your bookMarks'
}

const linkImagenes = './images/illustration-features-tab-'; //ruta de la imagenes

const imagenes = {
    // llamamos a la variable linkImagenes
    imagen1: linkImagenes + '1.svg', 
    imagen2: linkImagenes + '2.svg',
    imagen3: linkImagenes + '3.svg'
}

// console.log(imagenes.imagen0)

function mostrarSiguiente1() {
    texto.innerHTML = estilosKlk.texto1;
    imagen.src = imagenes.imagen1;
    defaul.style.borderBottom = '2px solid red'
}

function mostrarSiguiente2() {
    texto.innerHTML = estilosKlk.texto2;
    imagen.src = imagenes.imagen2;
    defaul.style.borderBottom = 'none'
}

function mostrarSiguiente3() {
    texto.innerHTML = estilosKlk.texto3;
    imagen.src = imagenes.imagen3;
}

//----fin carousel----

//----acordion---

const acordionCard = document.querySelector('.acordionCard-1');
const acordionCard2 = document.querySelector('.acordionCard-2');
const acordionCard3 = document.querySelector('.acordionCard-3');
const acordionCard4 = document.querySelector('.acordionCard-4');

const iconArrow = document.querySelector('#iconArrow');

function activarOculto(){
    acordionCard.classList.toggle('activarAcord')
}

function activarOculto2(){
    acordionCard2.classList.toggle('activarAcord');
}

function activarOculto3(){
    acordionCard3.classList.toggle('activarAcord');
}

function activarOculto4(){
    acordionCard4.classList.toggle('activarAcord');
}


//validar formulario

let botonValidar = document.querySelector('#botonVali');
botonValidar.addEventListener('click', validarFormulario)

let campoMal = document.getElementById('campoMal')

function validarFormulario(e){
    e.preventDefault();

    const inputEmail = document.querySelector('#inputEmail').value;

    if(inputEmail === ''){
        campoMal.innerHTML = 'Completa el campo';
        campoMal.style.width = '100%';
    }else {
        campoMal.remove();
    }

}


//----menu-----

let menu = document.getElementById('nav')
let logo = document.getElementById('logo')

const botonMenu = document.getElementById('botonMenu')
let status = false;
botonMenu.addEventListener('click', () => {
    switch(status) {
        case false:
            menu.style.top = '-0px'
            logo.src = './images/logo-bookmark-white.svg'
            botonMenu.src = './images/icon-close.svg'

            status = true;
            break;
        case true:
            menu.style.top = '-1000px'
            botonMenu.src = './images/icon-hamburger.svg'
            logo.src = './images/logo-bookmark-black.svg'
            status = false;
            break;
    }

})