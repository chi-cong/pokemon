const get_staters = (check, special_versions, generation, version) => {
    let starters = []
    if (check) {
        for (let i = 0; i < special_versions.length; i++) {
            if (special_versions[i].name === version) {
                starters = special_versions[i].starters;
            }
        }
    }
    else {
        if (generation.id === 5) {
            for (let i = 1; i < 4; i++) {
                starters.push(generation.pokemon_species[i].name);
            }
        }
        else {
            for (let i = 0; i < 3; i++) {
                starters.push(generation.pokemon_species[i].name);
            }
        };
    }
    return starters;
};

export default get_staters;
// to display pokemon