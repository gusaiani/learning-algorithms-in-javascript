const reverseArrayInPlace = require('../reverseArrayInPlace');

test('Reverse [0, 1, 2]', () => {
  expect(reverseArrayInPlace([0, 1, 2])).toEqual([2, 1, 0]);
});
