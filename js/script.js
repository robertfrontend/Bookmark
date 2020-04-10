let imagen = document.getElementById('imagenCarousel');
let texto = document.getElementById('textoCarousel');

let defaul = document.getElementById('default');


const estilosKlk = {
    texto1: 'Bookmark in once click',
    texto2: 'Intelligent search',
    texto3: 'Share your bookMarks'
}


function mostrarSiguiente1() {
    texto.innerHTML = estilosKlk.texto1;
    imagen.src = './images/illustration-features-tab-1.svg';
    imagen.style.transition = 'all .4s';
    defaul.style.borderBottom = '2px solid red'
}

function mostrarSiguiente2() {
    texto.innerHTML = estilosKlk.texto2;
    imagen.src = './images/illustration-features-tab-2.svg';
    imagen.style.transition = 'all .4s';
    defaul.style.borderBottom = 'none'
}

function mostrarSiguiente3() {
    texto.innerHTML = estilosKlk.texto3;
    imagen.src = './images/illustration-features-tab-3.svg';
    imagen.style.transition = '.4s'
}