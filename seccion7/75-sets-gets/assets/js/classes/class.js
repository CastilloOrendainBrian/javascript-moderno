class Persona {
    nombre = '';
    codigo = '';
    comida = '';
    // _comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código') {
        this.nombre = nombre;
        this.codigo = codigo;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    // set comida(comida) {
    //     this._comida = comida.toUpperCase();
    // }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
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

spiderman.setComidaFavorita = 'Hamburguesa';

console.log(spiderman.getComidaFavorita);