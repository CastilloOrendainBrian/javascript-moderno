class Persona {
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }
    static mensaje() {
        console.log(this.nombre);
        console.log('Hola a todos');
    }

    nombre = '';
    codigo = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código') {
        this.nombre = nombre;
        this.codigo = codigo;

        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

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

class Heroe extends Persona {
    clan = 'Sin clan';

    constructor(nombre, codigo, clan) {
        super(nombre, codigo);
        this.clan = clan;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.codigo} y pertenezco al clan ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe();

console.log(spiderman);
spiderman.quienSoy();

