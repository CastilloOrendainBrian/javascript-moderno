function saludar(nombre) {
    console.log( arguments );
    return `Hola ${nombre}`;
}

const saludarFlecha = () => {
    console.log( 'Hola flecha' );
}

const saludarFlecha2 = nombre => {
    console.log( 'Hola ' + nombre );
}

console.log( saludar('Juan', 40, true, 'Costa Rica') );
saludarFlecha();
saludarFlecha2('Juanito');