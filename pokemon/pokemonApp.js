import mode from './darkMode.js';
import getGen from './selector.js';
import get from './getElement.js';
import version_change from './version.js';

const URL = 'https://pokeapi.co/api/v2/generation/';

mode;
const generations = get('#generations');
const games = get('#games');
const pokemon_section = get('.pokemon-display');
let genValue = generations.value
const main_function = async () => {
    await getGen(URL, generations.value, pokemon_section);
    await generations.addEventListener('change', () => {
        pokemon_section.innerHTML = null;
        getGen(URL, generations.value, pokemon_section);
    });
    await games.addEventListener('change', () => {
        pokemon_section.innerHTML = null;
        version_change(URL, generations.value, games, pokemon_section)
    });
};
main_function();
