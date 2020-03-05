import data from './data/pokemon/pokemon.js';


export const example = data.pokemon; 

export const tiposDePokemon = () => {
  example.filter((item) => console.log(item.type))
}
tiposDePokemon();



/*  () => {
  return example;
};
*/
/*
function filtrarArreglo(elemento, indice, arreglo)
{
    return elemento >= inicial && elemento <= final;
}
var filtrado = data.filter(filtrarArreglo);
alert(filtrado); */ 
/*export const filtro = function(){
  example.filter((item) => console.log(item.type))
} 
export function filtro(){
}
const tipos = example.filter(() => {})*/
