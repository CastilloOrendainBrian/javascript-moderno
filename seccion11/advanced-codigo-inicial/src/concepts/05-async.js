import { heroes } from '../data/heroes.js';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {
    const id1 = '5d86371fd55e2e2a30fe1ccb';
    // console.log(findHero(id1)); // Producto de la función

    findHero(id1)
        .then(name => element.innerHTML = name)
        .catch(error => element.innerHTML = error);
};

/**
 * 
 * @param {String} id
 * @returns {Promise<String>} 
 */
const findHero = async(id) => {
    const hero = heroes.find((hero) => hero.id === id);
    if (!hero)
        throw `Hero with id ${id} not found`;

    return hero.name;
}

// Equivalente a lo siguiente
// const findHeroPromise = () => new Promise( resolve=> {
//     const hero = heroes.find( hero => hero.id === id );
//     resolve(hero);
// });