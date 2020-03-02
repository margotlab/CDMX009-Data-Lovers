// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/steam/worldbank.js';

// esta es una función de ejemplo
export const example = () => {
    return 'example';
};

export const pokemones = {

    filterByName(namePoke) {
        return data.pokemon.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(namePoke.toLowerCase());
        });
    },
    //aqui realice una modificacion
    filterByNumber(numPoke) {
        return data.pokemon.filter(pokemon => {
            return pokemon.num.parseInt().includes(numPoke.parseInt());
        } )

    },
    filterByType() {

    },
    findAll() {
        return data.pokemon;
    },
}