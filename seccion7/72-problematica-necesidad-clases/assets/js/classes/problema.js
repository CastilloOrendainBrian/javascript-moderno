const fher = {
    nombre: "Fher",
    edad: 23,
    imprimir() {
        console.log(`Nombre: ${this.nombre}`);
    },
}

// fher.imprimir();

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const maria = new Persona("Maria", 23);
const melissa = new Persona("Melissa", 30);
maria.imprimir();
melissa.imprimir();