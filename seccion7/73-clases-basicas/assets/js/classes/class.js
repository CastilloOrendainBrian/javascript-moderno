class Persona {
    nombre = '';
    codigo = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código') {
        this.nombre = nombre;
        this.codigo = codigo;
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman');

console.log(spiderman);
console.log(ironman);