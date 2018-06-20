const bubbleSort = require('../bubbleSort');

test('Array with 6 items', () => {
  const unsortedArray = [5, 3, 8, 2, 1, 4];

  expect(bubbleSort(unsortedArray)).toEqual(
    [1, 2, 3, 4, 5, 8]
  );
});

test('Array with 6 items', () => {
  const unsortedArray = [5, 3, 8, 2, 1, 4];

  expect(bubbleSort(unsortedArray)).toEqual(
    [1, 2, 3, 4, 5, 8]
  );
});
