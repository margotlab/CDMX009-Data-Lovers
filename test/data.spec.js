// importamos la función `example`
import { data } from "../src/data";

describe('data', () => {

  it('debería ser una función', () => {
    expect(typeof data).toBe('function');
  });

  describe('data', () => {
    // escribe aquí tu test
  });
});
