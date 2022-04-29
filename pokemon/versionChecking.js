const checking = (special_versions, version) => {
    for (let i = 0; i < special_versions.length; i++) {
        if (special_versions[i].name === version) {
            return true;
        }    
    }
    return false;
}
export default checking;
// to displayPokemon.js