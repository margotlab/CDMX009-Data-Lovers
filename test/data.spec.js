import pokemones from '../src/data';

describe('probando funcion pokemones', () => {
    it('should be an object', () => {
        expect(typeof pokemones).toBe('object');
    });

    it('should be a function', () => {
            expect(typeof pokemones.findAll).toBe('function');
    });

    it('deberia de regresar "Charmander" al ingresar charmander en el cuadro de busqueda', () => {
        expect(pokemones.filterByName("charmander")).toBeTruthy();
    });

    it('deberia de regresar "Voltorb" al ingresar el numero 100 en el cuadro de busqueda', () => {
        expect(pokemones.filterByName("100")).toBeTruthy();
    });

    it('la lista de pokemon por typo fuego deberia de tener "charmeleon"', () => {
        expect(pokemonResult).toContain(name.'charmeleon');
    });
})