class Persona {
    static porObjeto({ nombre, apellido, pais }) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        return `info: ${this.nombre}, ${this.apellido}, ${this.pais}`;
    }
}

const nombre1 = 'Peter', apellido1 = 'Parker', pais1 = 'USA';

const fher = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    pais: 'Costa Rica',
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(fher);

console.log(persona1.getInfo());
console.log(persona2.getInfo());