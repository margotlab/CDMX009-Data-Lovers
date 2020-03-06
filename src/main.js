import { pokemones } from './data.js'

//nodos
let logo = document.getElementById("logo");
let home = document.getElementById("derecha");
let searchButton = document.getElementById("search");
let upSortByName = document.getElementById("upName");
let downSortByName = document.getElementById("downName");
let upSortByCandy = document.getElementById("upCandy");
let downSortByCandy = document.getElementById("downCandy");
let upSortByKm = document.getElementById("upKm");
let downSortByKm = document.getElementById("downKm");

let arrayPoke;

//funcion para actualizar pagina cuando presionan el logo
function refreshPage(){
    window.location.reload();
}

//creamos una funcion general para que se genere la tarjeta para cada resultado
function createCardForResult(){
    arrayPoke.forEach(pokemon => {
    let column = generarTarjeta(pokemon);
    home.appendChild(column);
    })
}

// Funcion *Pendiente* para filtrar por tipo
function filterByType() {
    arrayPoke = pokemones.filterByType();
    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

//funcion para buscar por nombre y numero
function searchNumName(enterName) {
    enterName = (document.getElementById("ingresaTexto").value);
    arrayPoke = pokemones.filterByName(enterName);
    arrayPoke.forEach(createCardForResult());
}

//Funcion para ordenar por mas dulces
function sortByCandyCountUp() {
    let arrayPoke = pokemones.sortByCandyCountUp();
    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

//Funcion para ordenar por menos dulces
function sortByCandyCountDown() {
    let arrayPoke = pokemones.sortByCandyCountDown();
    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

//Funcion para mostrar todos los pokemones - Pendiente de agregar al DOM
function callFindAll() {
    arrayPoke = pokemones.findAll();
    arrayPoke.forEach(createCardForResult())
}

//Funcion para ordenar por nombre a-z
function sortByNameUp() {
    arrayPoke = pokemones.sortByNameUp();

    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}
//Funcion para ordenar por nombre z-a
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

//Funciones de botones, etc
logo.addEventListener ("click", refreshPage)
searchButton.addEventListener ("click", searchNumName)
upSortByName.addEventListener("click", sortByNameUp)
downSortByName.addEventListener("click", sortByNameDown)
upSortByCandy.addEventListener("click", sortByCandyCountUp)
downSortByCandy.addEventListener("click", sortByCandyCountDown)
upSortByKm.addEventListener("click", sortByKmCountUp)
downSortByKm.addEventListener("click", sortByKmCountDown)
//window.onload = callFindAll();
