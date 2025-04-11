class Persona {
    nombre = '';
    codigo = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código') {
        this.nombre = nombre;
        this.codigo = codigo;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman');

console.log(spiderman);
console.log(ironman);
spiderman.quienSoy();
spiderman.miFrase();
ironman.quienSoy();
ironman.miFrase();