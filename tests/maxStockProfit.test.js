const maxStockProfit = require('../maxStockProfit');

test('Array with 6 items', () => {
  const arr = [32, 46, 26, 38, 40, 48, 42];
  expect(maxStockProfit(arr)).toEqual(22);
});

test('A profit of zero should return zero', () => {
  const arr = [5, 5, 5, 5, 5];
  expect(maxStockProfit(arr)).toEqual(0);
});

test('No profit should return -1', () => {
  const arr = [6, 5, 4, 3, 2, 1];
  expect(maxStockProfit(arr)).toEqual(-1);
});

test('A profit of zero should return zero', () => {
  const arr = [5, 5, 5, 5, 4];
  expect(maxStockProfit(arr)).toEqual(0);
});

test('A profit of zero should return zero', () => {
  const arr = [5, 5, 4, 4, 4];
  expect(maxStockProfit(arr)).toEqual(0);
});
