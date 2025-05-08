import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = (element) => {
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h1>${hero1.name}</h1>
            <h1>${hero2.name}</h1>
        `;
    }

    const renderError = (error) => {
        element.innerHTML = `
            <h1>Error</h1>
            <p>${error}</p>
        `;
    }

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f233c9f2425f16916';

    // findHero(id1)
    //     .then(superHero => renderHero(superHero))
    //     .catch(error => renderError(error));
    
    // Capitulo 137. Promise -All
    let hero1;

    // Encadenamiento de promesas
    // findHero(id1)
    //     .then(hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then(hero2 => {
    //         renderTwoHeroes(hero1, hero2);
    //     })
    //     .catch(renderError);

    // Promise.all
    Promise.all([
        findHero(id1),
        findHero(id2)
    ])
    .then(([hero1, hero2]) => {
        renderTwoHeroes(hero1, hero2);
    })
    .catch(renderError);

    // Capitulo 136. Promise Hell
    // findHero(id1)
    //     .then((hero1) => {
    //         findHero(id2)
    //             .then( hero2 => {
    //                 renderTwoHeroes(hero1, hero2);
    //             })
    //             .catch(renderError);
    //     })
    //     .catch(renderError);
};

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id)=> {
    return new Promise((resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id);
        if (hero) {
            resolve(hero);
            return;
        }
        reject(`Hero with id ${id} not found`);
    });
}