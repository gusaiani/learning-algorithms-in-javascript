const maxStockProfit = require('../maxStockProfit');

test('Array with 6 items', () => {
  const arr = [32, 46, 26, 38, 40, 48, 42];
  expect(maxStockProfit(arr)).toEqual(22);
});
