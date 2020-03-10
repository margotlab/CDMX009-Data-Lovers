import data from './data/pokemon/pokemon.js';

// esta es una función de ejemplo
export const example = () => {
    return 'example';

};
//Entonces a qui estoy declarando un objeto de nombre pokemones
export const pokemones = {

    filterByName(enterName) {
        return data.pokemon.filter(pokemon => {
            return pokemon.name.toLowerCase().concat(" " + pokemon.num).includes(enterName.toLowerCase()) //pokemon: var que guaradara info de cada iteracion. sentencia
        });
    },

    findByNumber(enterNum) {
        let pokemonFind = {};

        data.pokemon.forEach(pokemon => {
            if (parseInt(enterNum) === parseInt(pokemon.num)) {
                pokemonFind = pokemon;
            }
        })
        return pokemonFind;
    },

    sortByKmCountUp() {

        let arrayKm = data.pokemon.filter(pokemon => {
            return pokemon.egg !== "Not in eggs"
        });
    
        return arrayKm.sort(function(a, b) {
            if (a.egg > b.egg) {
                return 1;
            }
            if (a.egg < b.egg) {
                return -1;
            }
            return 0;
        });
    },
    
    sortByKmCountDown() {
        let arrayKm = data.pokemon.filter(pokemon => {
            return pokemon.egg !== "Not in eggs"
        });
    
        return arrayKm.sort(function(a, b) {
            if (a.egg < b.egg) {
                return 1;
            }
            if (a.egg > b.egg) {
                return -1;
            }
            return 0;
        });
    },

    sortByNumUp() {
        let arrayNum = data.pokemon.filter(pokemon => {
            return pokemon.num !== undefined
        });
    
        return arrayNum.sort(function(a, b) {
            if (a.num > b.num) {
                return 1;
            }
            if (a.num < b.num) {
                return -1;
            }
            return 0;
        });
    },

    
    sortByNumDown() {
        let arrayNum = data.pokemon.filter(pokemon => {
            return pokemon.num !== undefined
        });
    
        return arrayNum.sort(function(a, b) {
            if (a.num < b.num) {
                return 1;
            }
            if (a.num > b.num) {
                return -1;
            }
            return 0;
        });
    },

    filterByType(clickType) {
        let pokemonResult = {};

        data.pokemon.forEach(pokemon => {
            if (clickType == pokemon.type) {
                pokemonResult = pokemon;
            }
        })
        return pokemonResult;
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

        let arrayCandy = data.pokemon.filter(pokemon => {
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
        let arrayCandy = data.pokemon.filter(pokemon => {
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
    }
}
