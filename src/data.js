import data from './data/pokemon/pokemon.js';
import pokemon from './data/pokemon/pokemon.js';

// esta es una función de ejemplo
export const example = () => {
    return 'example';
};

export const pokemones = {

    filterByName(namePoke) {
        return data.pokemon.filter(pokemon => {
            return pokemon.name.toLowerCase().concat(" " + pokemon.num).includes(namePoke.toLowerCase());
        });
    },
    //aqui realice una modificacion
    findByNumber(numPoke) {
        let pokemonFind = {};

        data.pokemon.forEach(pokemon => {
            if (parseInt(numPoke) === parseInt(pokemon.num)) {
                pokemonFind = pokemon;
            }
        })

        return pokemonFind;
    },
    filterByType() {

    },
    findAll() {
        return data.pokemon;
    },

    sortByNameUp() {
        return data.pokemon.sort(function(a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    },

    sortByNameDown() {
        return data.pokemon.sort(function(a, b) {
            if (a.name < b.name) {
                return 1;
            }
            if (a.name > b.name) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    }
};