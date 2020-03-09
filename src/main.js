import { pokemones } from './data.js'

//nodos
let logo = document.getElementById("logo");
let home = document.getElementById("derecha");
let searchButton = document.getElementById("search");
let upSortByNum = document.getElementById("upNumber");
let downSortByNum = document.getElementById("downNum");
let upSortByName = document.getElementById("upName");
let downSortByName = document.getElementById("downName");
let upSortByCandy = document.getElementById("upCandy");
let downSortByCandy = document.getElementById("downCandy");
let upSortByKm = document.getElementById("upKm");
let downSortByKm = document.getElementById("downKm");
let typeBtns = document.querySelectorAll(".type");

let arrayPoke;


//funcion para actualizar pagina cuando presionan el logo
function refreshPage(){
    window.location.reload();
};

//creamos una funcion general para que se genere la tarjeta para cada resultado
function createCardForResult() {
    home.innerHTML = "";
    arrayPoke.forEach(pokemon => {
    let column = generarTarjeta(pokemon);
    home.appendChild(column);
    })
};

//funcion para buscar por nombre y numero
function searchNumName(enterName) {
    enterName = (document.getElementById("ingresaTexto").value);
    arrayPoke = pokemones.filterByName(enterName);
    createCardForResult();
};

//Funcion para ordenar por mas dulces
function sortByCandyCountUp() {
    arrayPoke = pokemones.sortByCandyCountUp();
    createCardForResult();
};

//Funcion para ordenar por menos dulces
function sortByCandyCountDown() {
    arrayPoke = pokemones.sortByCandyCountDown();
    createCardForResult();
};

//Funcion para ordenar por mas dulces
function sortByKmCountUp() {
    arrayPoke = pokemones.sortByKmCountUp();
    createCardForResult();
};

//Funcion para ordenar por menos dulces
function sortByKmCountDown() {
    arrayPoke = pokemones.sortByKmCountDown();
    createCardForResult();
};

//Funcion para ordenar por mas dulces
function sortByNumUp() {
    arrayPoke = pokemones.sortByNumUp();
    createCardForResult();
};

//Funcion para ordenar por menos dulces
function sortByNumDown() {
    arrayPoke = pokemones.sortByNumDown();
    createCardForResult();
};

//Funcion para mostrar todos los pokemones - Pendiente de agregar al DOM
function callFindAll() {
    arrayPoke = pokemones.findAll();
createCardForResult();
};

//Funcion para ordenar por nombre a-z
function sortByNameUp() {
    arrayPoke = pokemones.sortByNameUp();
    createCardForResult();
};

//Funcion para ordenar por nombre z-a
function sortByNameDown() {
    arrayPoke = pokemones.sortByNameDown();
    createCardForResult();
};

//Aqui realice la funcion para generar las tarjetas idex
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
};

//Funcion para generar tarjetas detalle
function generarDetalle(pokemon) {
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
};

/*function searchType() {
    clickType = document.getElementsByClassName("type")[0].id;
    arrayPoke = pokemones.filterByType(clickType);
    createCardForResult();
}*/

// Funcion *Pendiente* para filtrar por tipo

//Funciones de botones, etc
logo.addEventListener ("click", refreshPage)
searchButton.addEventListener ("click", searchNumName)
upSortByNum.addEventListener("click", sortByNumUp)
downSortByNum.addEventListener("click", sortByNumDown)
upSortByName.addEventListener("click", sortByNameUp)
downSortByName.addEventListener("click", sortByNameDown)
upSortByCandy.addEventListener("click", sortByCandyCountUp)
downSortByCandy.addEventListener("click", sortByCandyCountDown)
upSortByKm.addEventListener("click", sortByKmCountUp)
downSortByKm.addEventListener("click", sortByKmCountDown)
typeBtns.forEach(typeBut=>{
    typeBut.addEventListener("click", refreshPage)
  })

//window.onload = callFindAll();
