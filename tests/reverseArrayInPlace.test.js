const reverseArrayInPlace = require('../reverseArrayInPlace');

test('Reverse [0, 1, 2]', () => {
  expect(reverseArrayInPlace([0, 1, 2])).toEqual([2, 1, 0]);
});

test('Reverse [0, 1, 2, 3, 4, 5]', () => {
  expect(reverseArrayInPlace([0, 1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1, 0]);
});
