import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async(element) => {
    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f2343e37870b91ef1';

    try {
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2);

        element.innerHTML = `${hero1.name} - ${hero2.name}`;
    }
    catch (error) {
        console.log(error);
        element.innerHTML = `<h1>${error}</h1>`;
    }
};

const findHero = async(id) => {
    const heroe = heroes.find(hero => hero.id === id);
    if (!heroe) throw new Error(`Hero with id ${id} not found`);
    return heroe;
}