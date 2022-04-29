import special_version_checking from "./versionChecking.js";
import get_staters from "./starters.js";
import evolution from "./evolution.js";
import get from './getElement.js';

const special_versions = [
    {
        name: 'yellow',
        starters: ['pikachu']
    },
    {
        name: 'firered-leafgreen',
        starters: ['bulbasaur', 'charmander', 'squirtle']
    },
    {
        name: 'colosseum',
        starters: ['espeon', 'umbreon']
    },
    {
        name: 'xd',
        starters: ['eevee']
    },
    {
        name: 'heartgold-soulsilver',
        starters: ['chikorita', 'cyndaquil', 'totodile']
    },
    {
        name: 'omega-ruby-alpha-sapphire',
        starters: ['treecko', 'torchic', 'mudkip']
    },
    {
        name: 'lets-go',
        starters: ['pikachu', 'eevee']
    },
];
const display_pokemon = (generation, version, pokemon_section) => {
    const check = special_version_checking(special_versions, version);
    const starters = get_staters(check, special_versions, generation, version);
    const add_pokemon = starters.forEach(async (first_form) => {
        let pokemons_in_chain = await (evolution(first_form, version, check));
        let pokemon_stacks = '';
        pokemons_in_chain.forEach((pokemon_name, index) => {
            pokemon_stacks +=
                `<div class="pokemon">
                <img class="poke-img" src="./starterPics/${pokemon_name}.png" alt="" class="pokePic">
                <h3 class="name">${pokemon_name}</h3>
                </div>`;
            if (index < pokemons_in_chain.length - 1) {
                pokemon_stacks += `<div class="evolution-arrow">
                <i class="fas fa-long-arrow-alt-right"></i>
            </div>`
            }
        })
        const pokemon_by_primary_type = `<div class="pokemons-by-primary-type">${pokemon_stacks}</div>`;
        pokemon_section.innerHTML += pokemon_by_primary_type;
    });
};
export default display_pokemon;
//to selector.js
