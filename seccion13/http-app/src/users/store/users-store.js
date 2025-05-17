import { loadUsersByPage } from "../use-cases/load-users-by-page";

// No se exporta para que nadie fuera de este archivo pueda modificar el estado
const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if ( users.users.length === 0 || users.pages === state.currentPage) return;
    state.currentPage += 1;
    state.users = users;
}

const loadPreviousPage = async() => {
    if ( state.currentPage === 1 ) return;
    const users = await loadUsersByPage(state.currentPage - 1);
    state.users = users;
    state.currentPage -= 1;
}

/**
 * 
 * @param {User} updatedUser 
 */
const onUserChange = (updatedUser) => {
    let wasFound = false;

    state.users.users = state.users.users.map( user => {
        if ( user.id === updatedUser.id ) {
            wasFound = true;
            return updatedUser;
        }
        return user;
    });

    if ( state.users.length < 10 && !wasFound ) {
        state.users.push( updatedUser );
    }
}

const reloadPage = async() => {
    const users = await loadUsersByPage(state.currentPage);
    if ( users.users.length === 0 || users.pages === state.currentPage) {
        await loadPreviousPage();
        return; 
    }
    state.users = users;
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChange,
    reloadPage,

    // Ver la pagina y usuarios fuera del store
    // Uso spread operator para evitar que se pase la referencia
    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users.users],

    // Los primitivos no se pasan por referencia, pasan por valor
    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
}