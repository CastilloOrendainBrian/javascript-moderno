let personaje = {
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
