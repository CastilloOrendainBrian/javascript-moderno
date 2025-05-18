const superHeroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    },
    {
        id: 3,
        name: 'Flash'
    },
    {
        id: 4,
        name: 'Green Lantern'
    },
];

// const superHeroesCopy = [...superHeroes.map(h => ({...h}))];

const array2 = JSON.parse(JSON.stringify(superHeroes));

const superHeroesCopy = structuredClone(superHeroes);

superHeroesCopy[0].name = 'Robin';

console.table(superHeroes);