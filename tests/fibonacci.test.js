const fibonacci = require('../fibonacci');

test('At position 3', () => {
  expect(fibonacci(3)).toEqual(2);
});

test('At position 4', () => {
  expect(fibonacci(4)).toEqual(3);
});

test('At position 9', () => {
  expect(fibonacci(9)).toEqual(34);
});

test('At position 11', () => {
  expect(fibonacci(11)).toEqual(89);
});
