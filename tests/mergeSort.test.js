const mergeSort = require('../mergeSort');

test('Array with 6 items', () => {
  const unsortedArray = [11, 7, 4, 1, 15, 12, 3];

  expect(mergeSort(unsortedArray)).toEqual(
    [1, 3, 4, 7, 11, 12, 15]
  );
});

