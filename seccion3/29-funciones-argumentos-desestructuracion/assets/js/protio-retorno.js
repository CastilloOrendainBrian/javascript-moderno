const crearPersona = (nombre, edad) => ({ nombre, edad });

const persona = crearPersona('Fernando', 35);
console.log({ persona });

function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentosArrow = (...args) => {
    console.log(args);
}
imprimeArgumentosArrow('Fernando', 35, true, 'Hola', 123);

const imprimeArgumentosArrow2 = (edad, ...args) => {
    // console.log({ edad });
    // console.log(args);
    return args;
}
const argumentos = imprimeArgumentosArrow2(35, 'Fernando', true, 'Hola', 123);
console.log({ argumentos });

const [ casado, vivo, nombre, saludo ] = imprimeArgumentosArrow2(35, true, false, 'Fernando', 'Hola');
console.log({ casado, vivo, nombre, saludo });

const { nombre: nombre2, edad: edad2 } = crearPersona('Fernando', 35);
console.log({ nombre2, edad2 });

const tony = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: true,
    edad: 40,
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
}

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => { 
    console.log({ nombre, codeName, vivo, edad });
}
imprimePropiedades(tony);