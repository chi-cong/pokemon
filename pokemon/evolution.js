import fetchPokemon from "./fetchPokemon.js";

const pokemon_url = 'https://pokeapi.co/api/v2/pokemon-species/';

const evolution_chains = async (name, version, check) => {
    const pokemon = await fetchPokemon(pokemon_url + name);
    const pokemon_evolution = await fetchPokemon(pokemon.evolution_chain.url);
    if (check) {
        if (version === 'lets-go' || version === 'colosseum' || version === 'xd') {
            return [name];
        }
        else if (version === 'yellow'){
            const next_evolution = await pokemon_evolution.chain.evolves_to[0].evolves_to[0].species.name;
            return [pokemon.name, next_evolution]
        }
        else {
            const second_form = await pokemon_evolution.chain.evolves_to[0].species.name;
            const third_form = await pokemon_evolution.chain.evolves_to[0].evolves_to[0].species.name;
            return [pokemon.name, second_form, third_form]
        }
    }
    else {
        const second_form = await pokemon_evolution.chain.evolves_to[0].species.name;
        const third_form = await pokemon_evolution.chain.evolves_to[0].evolves_to[0].species.name;
        return [pokemon.name, second_form, third_form]
    }
};

export default evolution_chains;
// to displayPokemon.js