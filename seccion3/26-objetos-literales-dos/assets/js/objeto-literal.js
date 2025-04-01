const personaje = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: true,
    edad: 40,
    coords: {
        lat: 34.0345,
        lng: -118.70
    },
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
    direccion: {
        zip: "10880, 90210",
        ubicacion: "Malibu, California"
    },
    "ultima-pelicula": "Infinity War",
}

console.log(personaje);
console.log("Nombre: ", personaje.nombre);
console.log("Edad: ", personaje["edad"]);
console.log("Coordenadas: ", personaje.coords);
console.log("Latitud: ", personaje.coords.lat);
console.log("Longitud: ", personaje.coords.lng);
console.log("Trajes: ", personaje.trajes.length);
console.log("Ultimo traje: ", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";
console.log("Vivo: ", personaje[x]);
console.log("Ultima pelicula: ", personaje["ultima-pelicula"]);

// Más detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

console.log( personaje );
Object.freeze( personaje );

personaje.dinero = 1000000;
personaje.casado = false;
personaje.direccion.ubicacion = "Costa Rica";
console.log(personaje);

const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log(propiedades, valores);