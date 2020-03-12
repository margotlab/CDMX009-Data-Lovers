// importamos la función `example`
//import { example } from "../src/data";

require('./main.js');
require('./data.js');

/*describe('este es un grupo', () => {
  it('debería ser un objeto', () => {
    expect(typeof pokemones).toBe('object');
  });*/

describe('Este es un grupo', () => {
  it('debería ser una funcion', () => {
    expect(typeof pokemones.findAll).toBe('function');
  });

  it('debería regresar Charmander al ingresar el nombre Charmander en la caja de busqueda', () => {
    expect(pokemones.findAll("charmander")).toBeTruthy();
  });

/*describe('filterByName', () => {
  it('debería regresar el pokemon que corresponda al numero ingresado en la caja de busqueda', () => {
    expect(typeof findAll).toBe('function');
  });*/

});