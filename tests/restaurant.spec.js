const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Teste 01
   expect(createMenu()).toHaveProperty('fetchMenu');
   expect(typeof createMenu().fetchMenu).toBe('function');
  });
    // Teste 02
   it('Teste 2: createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks', () => {
    expect(createMenu({ food: {}, drink: {} }).fetchMenu()).toEqual({ food: {}, drink: {}});
   });
   // Teste 03
   it('Teste 3', () => {
    expect(createMenu({food: {coxinha: 3.90, sanduiche: 9.90}, drinks: {agua: 3.90, cerveja: 6.90}}).fetchMenu()).toEqual({food: {coxinha: 3.90, sanduiche: 9.90}, drinks: {agua: 3.90, cerveja: 6.90}});
   });
   it('Teste 5', () => {
    expect(createMenu({food: {coxinha: 3.90, sanduiche: 9.90}, drinks: {agua: 3.90, cerveja: 6.90}})).toHaveProperty('consumption', [])
   })
   // Teste 7 
  //  it('Teste 7', () => {
  //   expect(createMenu()).order.toThrow(new Error("Item Indisponível"))
  //  })
 });