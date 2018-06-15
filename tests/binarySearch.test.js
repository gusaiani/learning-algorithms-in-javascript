  const binarySearch = require('../binarySearch');

test('A longer, true binarySearch test', () => {
  expect(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 71)).toBe(true);
});

