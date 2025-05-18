const heroes = ['Batman','Superman','Flash','Green Lantern'];
// const heroesCopy = heroes;

const deletedHero = heroes.spliced(0, 1, 'Wonder Woman');

// heroes.sort();
// const sortedHeroes = heroes.toSorted();
// heroes.reverse();

// const reversedHeroes = heroes.toReversed();

console.table(heroes);
// console.table(sortedHeroes);
// console.table(reversedHeroes);
console.log(deletedHero);