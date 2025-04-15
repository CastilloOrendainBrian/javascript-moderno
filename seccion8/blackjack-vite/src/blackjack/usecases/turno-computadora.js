import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 *  Turno de la computadora
 * @param {Number} puntosMini mos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML donde se muestran los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML donde se muestran las cartas de la computadora
 * @param {Array<String>} deck
 * @returns {void}
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if (!deck || deck.length === 0) throw new Error('El deck es necesario');
    if (!puntosHTML || puntosHTML.length === 0) throw new Error('Los puntos son necesarios');
    if (!divCartasComputadora) throw new Error('Las cartas de la computadora son necesarias');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}