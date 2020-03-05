import { pokemones } from './data.js';

let home = document.getElementById("derecha");
let arrayPoke;
//Declare una funcion para invocar 
let boton = document.getElementById("search")

//Funciona
boton.onclick= function(enterName) {
    enterName = (document.getElementById("ingresaTexto").value);
    arrayPoke = pokemones.filterByName(enterName);

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}
//Funciona tal vez es mejor cambiar el nombre de las funciones en este archivo
function callFindAll() {
    arrayPoke = pokemones.findAll();

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}
//Funciona
function findByNumber(enterNum) {
    arrayPoke = pokemones.findByNumber(enterNum);

    let column = generarTarjeta(arrayPoke);
    home.appendChild(column);
}
//Funciona
function sortByNameUp() {
    arrayPoke = pokemones.sortByNameUp();

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}
//Funciona
function sortByNameDown() {
    arrayPoke = pokemones.sortByNameDown();

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
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

function filterByType() {
    arrayPoke = pokemones.filterByType();

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

function sortByCandyCountUp() {
    let arrayPoke = pokemones.sortByCandyCountUp();

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

function sortByCandyCountDown() {

    let arrayPoke = pokemones.sortByCandyCountDown();

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

//filterByName("cha");
//callFindAll()
//findByNumber("10");
//sortByNameUp();
//sortByNameDown();

//filterByType("Grass")
//sortByCandyCountUp()
//sortByCandyCountDown();