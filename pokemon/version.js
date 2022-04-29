import fetchPokemon from "./fetchPokemon.js";
import get from "./getElement.js";
import display from './displayPokemon.js';

const version_change = async (url, genValue, games, pokemon_section) => {
    const generation_url = await url + genValue;
    const generation = await fetchPokemon(generation_url);
    const versions = await generation.version_groups;
    display(generation, games.value, pokemon_section);
};
export default version_change;
// to pokemonApp.js