import { example } from './data.js';
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
    let home = document.getElementById("derecha");
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
    let column = document.createElement("div");
    column.setAttribute("class", "col-3 mt-2");

    let card = document.createElement("div");
    card.setAttribute("class", "card");

    // let image = document.createElement("img");
    // image.setAttribute("class", "card-img-top");
    // image.setAttribute("alt", pokemon.name);
    // image.setAttribute("src", pokemon.img);

    // let cardBody = document.createElement("div");
    // cardBody.setAttribute("class", "card-body", "background-color:#6ab150");

    // let cardText = document.createElement("p");
    // cardText.textContent = `${pokemon.name} ${pokemon.num}`;

    // cardBody.appendChild(cardText);
    // card.appendChild(image);
    // card.appendChild(cardBody);
    // column.appendChild(card);

    return column;
}

/* <div class="col-3">
        <div class="mycard">
                            <img src="" class="" alt="">
                            <div class="myCardBody">
                                <p class="cardText"></p>
                            </div>
                        </div>
                    </div> */

//findAll();
//findByNumber("10");

//filterByName("chari");