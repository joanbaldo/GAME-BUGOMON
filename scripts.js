// console.log(document.title);


// 1-Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

const titulin = document.getElementById('gen-1');
console.log(titulin);
titulin.textContent = 'Generasión 1 Pokimon - Core Edition'


// 2-Cambia el color de fondo de la primera generación de Pokimon.


let arrayGen1 = document.getElementsByClassName('infocard-list')[0];
// console.log(arrayGen1.length)
// console.log(arrayGen1)

for (pokemon of arrayGen1.children) {
    pokemon.style.background = "yellow"; 
    }


// 3-Imprime por consola la URL de la página.

const urlWeb = document.URL;
console.log(urlWeb);

// 4-Imprime por consola el dominio de la página.


const domainWeb = document.domain;
console.log(domainWeb);


// 5-Imprime todos los nodos de imagen.

let galeriaImg = document.querySelectorAll("img");
console.log(galeriaImg.length);
console.log(galeriaImg)

// console.log(document.getElementsByClassName("img-fixed img-sprite"))

// 6-Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

// Premium:

// 7- (PREMIUM)Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
