import data from './data/pokemon/pokemon.js';

// esta es una función de ejemplo
export const example = () => {
    return 'example';

};
//Entonces a qui estoy declarando un objeto de nombre pokemones
export const pokemones = {

    findAll() {
        return data.pokemon;
    },

    filterByName(enterName) {
        return data.pokemon.filter(pokemon => {
            return pokemon.name.toLowerCase().concat(" " + pokemon.num).includes(enterName.toLowerCase()) //pokemon: var que guaradara info de cada iteracion. sentencia
        });
    },

    sortByNumUp(arrayPoke) {
        return dataEnter.sort(function(a, b) {
            if (a.num > b.num) {
                return 1;
            }
            if (a.num < b.num) {
                return -1;
            }
            return 0;
        });
    },

    sortByNumDown(arrayPoke) {
        let dataEnter = (arrayPoke != undefined && arrayPoke.length > 0) ? arrayPoke : data.pokemon;
        return dataEnter.sort(function(a, b) {
            if (a.num < b.num) {
                return 1;
            }
            if (a.num > b.num) {
                return -1;
            }
            return 0;
        });
    },

    sortByNameUp(arrayPoke) {
        let dataEnter = (arrayPoke != undefined && arrayPoke.length > 0) ? arrayPoke : data.pokemon;
        return dataEnter.sort(function(a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
    },

    sortByNameDown(arrayPoke) {
        let dataEnter = (arrayPoke != undefined && arrayPoke.length > 0) ? arrayPoke : data.pokemon;
        return dataEnter.sort(function(a, b) {
            if (a.name < b.name) {
                return 1;
            }
            if (a.name > b.name) {
                return -1;
            }
            return 0;
        });
    },

    sortByKmUp(arrayPoke) {
        let dataEnter = (arrayPoke != undefined && arrayPoke.length > 0) ? arrayPoke : data.pokemon;
        let arrayEgg = dataEnter.filter(pokemon => {
            return pokemon.egg !== "Not in Eggs"
        });

        return arrayEgg.sort(function(a, b) {
            if (parseInt(a.egg.replace(" km", "")) > parseInt(b.egg.replace(" km", ""))) {
                return 1;
            }
            if (parseInt(a.egg.replace(" km", "")) < parseInt(b.egg.replace(" km", ""))) {
                return -1;
            }
            return 0;
        });
    },

    sortByKmDown() {
        let dataEnter = (arrayPoke != undefined && arrayPoke.length > 0) ? arrayPoke : data.pokemon;
        let arrayEgg = dataEnter.filter(pokemon => {
            return pokemon.egg !== "Not in Eggs"
        });

        return arrayEgg.sort(function(a, b) {
            if (parseInt(a.egg.replace(" km", "")) < parseInt(b.egg.replace(" km", ""))) {
                return 1;
            }
            if (parseInt(a.egg.replace(" km", "")) > parseInt(b.egg.replace(" km", ""))) {
                return -1;
            }
            return 0;
        });
    },

    sortByCandyCountUp() {
        let dataEnter = (arrayPoke != undefined && arrayPoke.length > 0) ? arrayPoke : data.pokemon;
        let arrayCandy = dataEnter.filter(pokemon => {
            return pokemon.candy_count !== undefined
        });

        return arrayCandy.sort(function(a, b) {
            if (a.candy_count > b.candy_count) {
                return 1;
            }
            if (a.candy_count < b.candy_count) {
                return -1;
            }
            return 0;
        });
    },

    sortByCandyCountDown() {
        let dataEnter = (arrayPoke != undefined && arrayPoke.length > 0) ? arrayPoke : data.pokemon;
        let arrayCandy = dataEnter.filter(pokemon => {
            return pokemon.candy_count !== undefined
        });

        return arrayCandy.sort(function(a, b) {
            if (a.candy_count < b.candy_count) {
                return 1;
            }
            if (a.candy_count > b.candy_count) {
                return -1;
            }
            return 0;
        });
    },

    filterByType(clickType) {
        let pokemonResult = [];

        data.pokemon.forEach(pokemon => {
            if (pokemon.type.includes(clickType)) {
                pokemonResult.push(pokemon);
            }
        })
        return pokemonResult;
    }
};
