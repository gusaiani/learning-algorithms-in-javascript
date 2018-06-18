const binarySearch = require('../binarySearch');

test.only('A true binarySearch test', () => {
  expect(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 16)).toBe(true);
});

test('A false binarySearch test', () => {
  expect(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 37)).toBe(false);
});

test('A true binarySearch test', () => {
  expect(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 71)).toBe(true);
});

test('A true binarySearch test', () => {
  expect(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 5)).toBe(true);
});

