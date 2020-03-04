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
            return 0;
        });
    },
    sortByCandyCountUp() {
        return data.pokemon.sort(function(a, b) {
            if (a.candy_count > b.candy_count) {
                return 1;
            }
            if (a.candy_count < b.candy_count) {
                return -1;
            }
            return 0;
        });
    },
    sortByCandyCount() {
        return data.pokemon.sort(function(a, b) {
            if (a.candy_count < b.candy_count) {
                return 1;
            }
            if (a.candy_count > b.candy_count) {
                return -1;
            }
            return 0;
        });
    },
    findAllCandy() {
        return data.pokemon.candy_count;
    }
};
