function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      const item1 = arr[j];
      const item2 = arr[j + 1];

      if (item1 > item2) {
        arr[j] = item2;
        arr[j + 1] = item1;
      }
    }
  }

  return arr;
}

module.exports = bubbleSort;
