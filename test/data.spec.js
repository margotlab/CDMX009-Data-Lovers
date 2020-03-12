// importamos la función `example`
import { data } from "../src/data";

/*describe('data', () => {

  it('debería ser una función', () => {
    expect(typeof data).toBe('function');
  });*/

describe('pokemones', () => {

            it('debería ser un objeto', () => {
                expect(typeof pokemones).toBe('object');
            });

            describe('findAll', () => {

                        it('debería ser una funcion', () => {
                            expect(typeof findAll).toBe('function');
                        });

                        describe('filterByName', () => {

                                    it('debería regresar Charmander al ingresar el nombre Charmander en la caja de busqueda', () => {
                                        expect(typeof findAll).toBe('function');
                                    });

                                    describe('filterByName', () => {

                                        it('debería regresar el pokemon que corresponda al numero ingresado en la caja de busqueda', () => {
                                            expect(typeof findAll).toBe('function');
                                        });


                                    });