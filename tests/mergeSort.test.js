const mergeSort = require('../mergeSort');

test('Array with 6 items', () => {
  const unsortedArray = [11, 7, 4, 1, 15, 12, 3];

  expect(mergeSort(unsortedArray)).toEqual(
    [1, 3, 4, 7, 11, 12, 15]
  );
});

test('Array with 11 items', () => {
  const unsortedArray = [6000, 34, 203, 3, 746, 984, 198, 764, 1, 9, 1];

  expect(mergeSort(unsortedArray)).toEqual(
    [1, 1, 3, 9, 34, 198, 203, 746, 764, 984, 6000]
  );
});
