const state = [
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

const index = 1;
const newName = 'Marvel Woman';

// const newState = state.map((hero, i) => {
//     if (i === index) {
//         hero.name = newName;
//     }
//     return {...hero};
// });

const newState = structuredClone(state).with(index, {
    ...state.at(index),
    name: newName
});

state[0].name = 'Dark Knight';

console.table(newState);

console.log('El último: ', state.at(-1));