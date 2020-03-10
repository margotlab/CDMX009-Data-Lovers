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
let downNum = document.getElementById("downNumber");
let upNum = document.getElementById("upNumber");

let arrayPoke;

//funcion para actualizar pagina cuando presionan el logo
function refreshPage() {
    window.location.reload();
}

//creamos una funcion general para que se genere la tarjeta para cada resultado
function createCardForResult() {
    home.innerHTML = "";
    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

//funcion para buscar por nombre y numero
function searchNumName(enterName) {
    enterName = (document.getElementById("enterTextBox").value);
    arrayPoke = pokemones.filterByName(enterName);
    createCardForResult();
}

//Funcion para ordenar por mas dulces
function sortByCandyCountUp() {
    home.innerHTML = "";
    let arrayPoke = pokemones.sortByCandyCountUp();
    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

//Funcion para ordenar por menos dulces
function sortByCandyCountDown() {
    home.innerHTML = "";
    let arrayPoke = pokemones.sortByCandyCountDown();
    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

//Funcion para mostrar todos los pokemones - Pendiente de agregar al DOM
function callFindAll() {
    home.innerHTML = "";
    arrayPoke = pokemones.findAll();
    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

//Funcion para ordenar por nombre a-z
function sortByNameUp() {
    home.innerHTML = "";
    arrayPoke = pokemones.sortByNameUp(arrayPoke);
    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}
//Funcion para ordenar por nombre z-a
function sortByNameDown() {
    home.innerHTML = "";
    arrayPoke = pokemones.sortByNameDown(arrayPoke);
    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

function sortByKmUp() {
    home.innerHTML = "";
    let arrayPoke = pokemones.sortByKmUp();
    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

function sortByKmDown() {
    home.innerHTML = "";
    let arrayPoke = pokemones.sortByKmDown();
    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

function sortByNumUp() {
    home.innerHTML = "";
    arrayPoke = pokemones.sortByNumUp(arrayPoke);
    arrayPoke.forEach(pokemon => {
            let column = generarTarjeta(pokemon);
            home.appendChild(column);
        })
        // arrayPoke.forEach(createCardForResult);
}

function sortByNumDown() {
    //home.innerHTML = ""; Quitar de cada sort
    home.innerHTML = "";
    arrayPoke = pokemones.sortByNumDown(arrayPoke);
    arrayPoke.forEach(pokemon => {
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}

//Funcion para ordenar por tipo
let btns = document.querySelectorAll(".typePoke")

btns.forEach(boton => {
    boton.addEventListener('click', e => {
        arrayPoke = pokemones.filterByType(boton.id);
        home.innerHTML = "";
        debugger
        arrayPoke.forEach(pokemon => {
            let column = generarTarjeta(pokemon);
            home.appendChild(column);
        })
    })
})


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
    cardText.setAttribute("class", "cardText")
    cardText.textContent = `${pokemon.name} ${pokemon.num}`;
    cardHead.appendChild(image);
    card.appendChild(cardHead);
    card.appendChild(cardText);
    return card;
}

//Funciones de botones, etc
logo.addEventListener("click", refreshPage)
searchButton.addEventListener("click", searchNumName)
upSortByName.addEventListener("click", sortByNameUp)
downSortByName.addEventListener("click", sortByNameDown)
upSortByCandy.addEventListener("click", sortByCandyCountUp)
downSortByCandy.addEventListener("click", sortByCandyCountDown)
upSortByKm.addEventListener("click", sortByKmUp)
downSortByKm.addEventListener("click", sortByKmDown)
window.onload = callFindAll();
downNum.addEventListener("click", sortByNumDown)
upNum.addEventListener("click", sortByNumUp)