const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje;

// if ( [0,6].includes( dia ) ) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

// if ( horaActual >= horaApertura ) {
//     mensaje = 'El local está abierto';
// } else {
//     mensaje = `El local está cerrado, abre a las ${horaApertura}`;
// }

mensaje = ( horaActual >= horaApertura ) ? 'El local está abierto' : `El local está cerrado, abre a las ${horaApertura}`;

console.log({ horaApertura, mensaje });