let videojuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];

let primero = videojuegos[ 2 -2 ];
let ultimo = videojuegos[ videojuegos.length - 1 ];

console.log( `El primer videojuego es: ${ primero }, El ultimo videojuego es: ${ ultimo }` );

videojuegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

let nuevaLongitud = videojuegos.push( 'Final Fantasy' );
console.log({ nuevaLongitud, videojuegos });

videojuegos.unshift( 'Fire Emblem' );
console.log({ videojuegos });

let juegoBorrado = videojuegos.pop();
console.log({ juegoBorrado, videojuegos });

let posicion = 1;
let juegosBorrados = videojuegos.splice( posicion, 2 );
console.log({ juegosBorrados, videojuegos });

let megamanIndex = videojuegos.indexOf( 'Chrono Trigger' );
console.log({ megamanIndex });