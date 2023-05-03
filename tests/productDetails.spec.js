const productDetails = require('../src/productDetails');
const assert = require('assert');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(productDetails('function'));
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails));
    // Teste se o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails(), 'object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Alcool', 'Mascaras descartaveis')[0] !== productDetails('Alcool', 'Mascaras descartaveis')[1]).toBe(true);
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('Alcool', 'Mascaras descartaveis')[0].details).toHaveProperty('productId', 'Alcool123');
    expect(productDetails('Alcool', 'Mascaras descartaveis')[1].details).toHaveProperty('productId', 'Mascaras descartaveis123');
  });
});
