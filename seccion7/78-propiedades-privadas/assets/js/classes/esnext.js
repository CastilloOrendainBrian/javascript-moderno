class Rectangulo {
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base*altura;
    }

    #calcularArea() {
        console.log('funciona ' + this.#area);
    }

    respuesta() {
        return this.#calcularArea();
    }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.area = 100;

rectangulo.respuesta();

console.log(rectangulo);