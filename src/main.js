import { pokemones } from './data.js';

//Funciona
function filterByName(name) {
    let home = document.getElementById("derecha");
    let arrayPoke = pokemones.filterByName(name);

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}
//revisar aun no da resultado
function ordenarMenorNum() {
    let home = document.getElementById("derecha");
    let arrayPoke = pokemones.ordenarMenorNum();

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}
//Funciona
function findAll() {
    let home = document.getElementById("derecha"); //esta linea solo es para aderir la info al dom
    let arrayPoke = pokemones.findAll();

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}
 
function findByNumber(numPoke) {
    let home = document.getElementById("derecha");
    let poke = pokemones.findByNumber(numPoke);

    let column = generarTarjeta(poke);
    home.appendChild(column);
}

//Aqui realice la funcion para generar las tarjetas
function generarTarjeta(pokemon) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let cardHead = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("class", "styleImg");
    image.setAttribute("alt", pokemon.name);
    image.setAttribute("src", pokemon.img);

    let cardText = document.createElement("p");
    cardText.setAttribute("class", "cardText")
    cardText.textContent = `${pokemon.name} ${pokemon.num}`;

    cardHead.appendChild(image);
    card.appendChild(cardHead);
    card.appendChild(cardText);

    return card;
}

function sortByNameUp() {
    let home = document.getElementById("derecha");
    let arrayPoke = pokemones.sortByNameUp();

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

function sortByNameDown() {
    let home = document.getElementById("derecha");
    let arrayPoke = pokemones.sortByNameDown();

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

function sortByCandyCountUp() {
    let home = document.getElementById("derecha");
    let arrayPoke = pokemones.sortByCandyCountUp();

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

function sortByCandyCountDown() {
    let home = document.getElementById("derecha");
    let arrayPoke = pokemones.sortByCandyCount();

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

//sortByCandyCountUp()
//sortByCandyCountDown();
//sortByNameDown();
//sortByNameUp();
//findByNumber("10");
//filterByName("char");
findAll()