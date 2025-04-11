class Singleton {
    static instance; // undefined
    nombre = '';

    constructor(name = '') {
        if (!!Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
        this.nombre = name;
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');

console.log(`Nombre en la instancia 1: ${instancia1.nombre}`);
console.log(`Nombre en la instancia 2: ${instancia2.nombre}`);
console.log(`Nombre en la instancia 3: ${instancia3.nombre}`);