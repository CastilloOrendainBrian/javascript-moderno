
/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de retorno
 */
export const crearCartaHTML = ( carta ) => {

    if ( !carta ) throw new Error('La carta es un argumento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `${process.env.CARTS_URL}${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}