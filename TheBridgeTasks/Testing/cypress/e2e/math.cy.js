const { suma, multiplica, resta } = require('../../math');

describe('Funciones matemáticas', () => {
context('Función suma', () => {
    it('suma correctamente dos números positivos', () => {
      expect(suma(2, 3)).to.eq(5);
    });

    it('suma correctamente un número positivo y uno negativo', () => {
      expect(suma(5, -2)).to.eq(3);
    });
  });

context('Función multiplica', () => {
    it('multiplica correctamente dos números positivos', () => {
      expect(multiplica(2, 3)).to.eq(6);
    });

    it('multiplica correctamente por cero', () => {
      expect(multiplica(5, 0)).to.eq(0);
    });
  });

context('Función resta', () => {
    it('resta correctamente dos números', () => {
      expect(resta(2, 3)).to.eq(-1);
    });
  });
});