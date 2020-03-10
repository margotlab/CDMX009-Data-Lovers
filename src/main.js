import { pokemones } from './data.js'

//nodos
let home = document.getElementById("derecha");
let logo = document.getElementById("logo");
let searchButton = document.getElementById("search");
<<<<<<< HEAD
let upSortByNum = document.getElementById("upNumber");
let downSortByNum = document.getElementById("downNum");
=======
let upNum = document.getElementById("upNumber");
let downNum = document.getElementById("downNumber");
>>>>>>> 8239fe5bf25629a8c01ec8fd4b21e2fbdf6f2ffb
let upSortByName = document.getElementById("upName");
let downSortByName = document.getElementById("downName");
let upSortByKm = document.getElementById("upKm");
let downSortByKm = document.getElementById("downKm");
let upSortByCandy = document.getElementById("upCandy");
let downSortByCandy = document.getElementById("downCandy");

let arrayPoke;

<<<<<<< HEAD
//funcion para actualizar pagina cuando presionan el logo
function refreshPage(){
    window.location.reload();
};
=======
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
>>>>>>> 8239fe5bf25629a8c01ec8fd4b21e2fbdf6f2ffb

//creamos una funcion general para que se genere la tarjeta para cada resultado
function createCardForResult() {
    home.innerHTML = "";
    arrayPoke.forEach(pokemon => {
<<<<<<< HEAD
    let column = generarTarjeta(pokemon);
    home.appendChild(column);
    })
};
=======
        let column = generarTarjeta(pokemon);
        home.appendChild(column);
    })
}
>>>>>>> 8239fe5bf25629a8c01ec8fd4b21e2fbdf6f2ffb

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
<<<<<<< HEAD
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

//Funcion para mostrar todos los pokemones 
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

//Funcion para ordenar por mas Km
function sortByKmCountUp() {
    arrayPoke = pokemones.sortByKmCountUp();
    createCardForResult();
};

//Funcion para ordenar por menos Km
function sortByKmCountDown() {
    arrayPoke = pokemones.sortByKmCountDown();
    createCardForResult();
};

//Funcion para ordenar menos a mas por numero
function sortByNumUp() {
    arrayPoke = pokemones.sortByNumUp();
    createCardForResult();
};

//Funcion para ordenar mas a menos por numero
function sortByNumDown() {
    arrayPoke = pokemones.sortByNumDown();
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
=======
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
    arrayPoke = pokemones.sortByKmUp();
    createCardForResult();
}

function sortByKmDown() {
    arrayPoke = pokemones.sortByKmDown();
    createCardForResult();
}

//Funcion para ordenar por dulces
function sortByCandyCountUp() {
    let arrayPoke = pokemones.sortByCandyCountUp();
    createCardForResult();
}

function sortByCandyCountDown() {
    let arrayPoke = pokemones.sortByCandyCountDown();
    createCardForResult();
}
>>>>>>> 8239fe5bf25629a8c01ec8fd4b21e2fbdf6f2ffb

//Funcion para ordenar por tipo
let btns = document.querySelectorAll(".typePoke")

btns.forEach(boton => {
    boton.addEventListener('click', e => {
        arrayPoke = pokemones.filterByType(boton.id);
        createCardForResult();
    })
})

//Funciones de botones, etc
<<<<<<< HEAD
logo.addEventListener ("click", refreshPage)
searchButton.addEventListener ("click", searchNumName)
upSortByNum.addEventListener("click", sortByNumUp)
downSortByNum.addEventListener("click", sortByNumDown)
=======
window.onload = callFindAll();
logo.addEventListener("click", refreshPage)
searchButton.addEventListener("click", searchNumName)
>>>>>>> 8239fe5bf25629a8c01ec8fd4b21e2fbdf6f2ffb
upSortByName.addEventListener("click", sortByNameUp)
downSortByName.addEventListener("click", sortByNameDown)
upSortByCandy.addEventListener("click", sortByCandyCountUp)
downSortByCandy.addEventListener("click", sortByCandyCountDown)
<<<<<<< HEAD
upSortByKm.addEventListener("click", sortByKmCountUp)
downSortByKm.addEventListener("click", sortByKmCountDown)
=======
upSortByKm.addEventListener("click", sortByKmUp)
downSortByKm.addEventListener("click", sortByKmDown)
downNum.addEventListener("click", sortByNumDown)
upNum.addEventListener("click", sortByNumUp)
>>>>>>> 8239fe5bf25629a8c01ec8fd4b21e2fbdf6f2ffb
