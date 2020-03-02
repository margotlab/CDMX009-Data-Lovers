import { example } from './data.js';
import { pokemones } from './data.js';

function filterByName(name) {
    let home = document.getElementById("derecha");
    let arrayPoke = pokemones.filterByName(name);

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

function findAll() {
    let home = document.getElementById("derecha");
    let arrayPoke = pokemones.findAll();

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

function generarTarjeta(pokemon) {
    let column = document.createElement("div");
    column.setAttribute("class", "col-3 mt-2");

    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let image = document.createElement("img");
    image.setAttribute("class", "card-img-top");
    image.setAttribute("alt", pokemon.name);
    image.setAttribute("src", pokemon.img);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let cardText = document.createElement("p");
    cardText.textContent = `${pokemon.name} ${pokemon.num}`;

    cardBody.appendChild(cardText);
    card.appendChild(image);
    card.appendChild(cardBody);
    column.appendChild(card);

    return column;
}

findAll();