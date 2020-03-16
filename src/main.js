import pokemones from './data.js';

//nodos
let home = document.getElementById("derecha");
let logo = document.getElementById("logo");
let searchButton = document.getElementById("search");
let upNum = document.getElementById("upNumber");
let downNum = document.getElementById("downNumber");
let upSortByName = document.getElementById("upName");
let downSortByName = document.getElementById("downName");
let upSortByKm = document.getElementById("upKm");
let downSortByKm = document.getElementById("downKm");
let upSortByCandy = document.getElementById("upCandy");
let downSortByCandy = document.getElementById("downCandy");

let newCardInfo = document.getElementById("");

let arrayPoke;

//Funcion para generar las tarjetas
function generarTarjeta(pokemon) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    let cardHead = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("class", "styleImg");
    image.setAttribute("alt", pokemon.name);
    image.setAttribute("src", pokemon.img);
    let cardText = document.createElement("p");
    cardText.setAttribute("class", "cardText");
    cardText.textContent = `${pokemon.name} ${pokemon.num}`;

    cardHead.appendChild(image);
    card.appendChild(cardHead);
    card.appendChild(cardText);
    return card;
}

//creamos una funcion general para que se genere la tarjeta para cada resultado
function createCardForResult() {
    home.innerHTML = "";
    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

//Funcion para mostrar todos los pokemones
function callFindAll() {
    arrayPoke = pokemones.findAll();
    createCardForResult();
}

//funcion para actualizar pagina cuando presionan el logo
function refreshPage() {
    window.location.reload();
}

//funcion para buscar por nombre y numero
function searchNumName(enterName) {
    enterName = (document.getElementById("enterTextBox").value);
    arrayPoke = pokemones.filterByName(enterName);
    createCardForResult();
}

//Funciones para ordenar por numero
function sortByNumUp() {
    arrayPoke = pokemones.sortByNumUp(arrayPoke);
    createCardForResult();
}

function sortByNumDown() {
    arrayPoke = pokemones.sortByNumDown(arrayPoke);
    createCardForResult();
}

//Funcion para ordenar por nombre a-z y z-a
function sortByNameUp() {
    arrayPoke = pokemones.sortByNameUp(arrayPoke);
    createCardForResult();
}

function sortByNameDown() {
    arrayPoke = pokemones.sortByNameDown(arrayPoke);
    createCardForResult();
}

//Funciones para ordenar por Km
function sortByKmUp() {
    arrayPoke = pokemones.sortByKmUp(arrayPoke);
    createCardForResult();
}

function sortByKmDown() {
    arrayPoke = pokemones.sortByKmDown(arrayPoke);
    createCardForResult();
}

//Funcion para ordenar por dulces
function sortByCandyCountUp() {
    arrayPoke = pokemones.sortByCandyCountUp(arrayPoke);
    createCardForResult();
}

function sortByCandyCountDown() {
    arrayPoke = pokemones.sortByCandyCountDown(arrayPoke);
    createCardForResult();
}

//Funcion para ordenar por tipo
let btns = document.querySelectorAll(".typePoke")

btns.forEach(boton => {
    boton.addEventListener('click', e => {
        arrayPoke = pokemones.filterByType(boton.id);
        createCardForResult();
    })
})

//Funciones de botones, etc
window.onload = callFindAll();
logo.addEventListener("click", refreshPage);
searchButton.addEventListener("click", searchNumName);
upSortByName.addEventListener("click", sortByNameUp);
downSortByName.addEventListener("click", sortByNameDown);
upSortByCandy.addEventListener("click", sortByCandyCountUp);
downSortByCandy.addEventListener("click", sortByCandyCountDown);
upSortByKm.addEventListener("click", sortByKmUp);
downSortByKm.addEventListener("click", sortByKmDown);
downNum.addEventListener("click", sortByNumDown);
upNum.addEventListener("click", sortByNumUp);