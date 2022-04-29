import fetchPokemon from "./fetchPokemon.js";
import get from "./getElement.js";
import display from './displayPokemon.js';

const getGen = async (url, genValue, pokemon_section) => {
    const generation_url = await url + genValue;
    const generation = await fetchPokemon(generation_url);
    const versions = await generation.version_groups;
    const games = get('#games');
    const version_games = await versions.map((item) => {
        return `<option value=${item.name} class = "game">${item.name}</option>`
    }).join('');
    games.innerHTML = await version_games;
    const generations = get('#generations');
    display(generation, games.value, pokemon_section);
    // // console.log(generations.value);
    // games.addEventListener('change', () => {
    //     display(generation, games.value);
        
    //     // console.log(generations.value);
    // })
};
export default getGen;
// to pokemonApp.js