import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
// * @param {() => void} callback
// export const renderAddButton = ( element, callback ) => {
export const renderAddButton = ( element ) => {
    const fabButton = document.createElement( 'button' );
    fabButton.innerText = '+';
    fabButton.classList.add( 'fab-button' );

    element.append( fabButton );
    // TODO:
    fabButton.addEventListener('click', () => {

        // Delega el evento click al padre
        // if ( !callback ) return;
        // callback();

        showModal();
    });
}