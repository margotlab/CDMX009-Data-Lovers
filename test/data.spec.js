import pokemones from '../src/data';

describe('probando funcion pokemones', () => {
    it('should be an object', () => {
        expect(typeof pokemones).toBe('object');
    });

    describe('pokemones.findAll', () => {
        it('should be a function', () => {
            expect(typeof pokemones.findAll).toBe('function');
        });
    });
});