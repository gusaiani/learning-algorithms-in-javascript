function binarySearch(arr, item) {
  const middleOfArray = Math.floor(arr.length / 2);

  const middleItem = arr[middleOfArray];

  if (item === middleItem) return true
  else if (arr.length === 1) return false
  else if (item > middleItem) {
    const halfArray = arr.splice(middleOfArray + 1, arr.length);
    return binarySearch(halfArray, item);
  } else if (item < middleItem) {
    const halfArray = arr.splice(0, middleOfArray);
    return binarySearch(halfArray, item);
  }
  return false;
}

module.exports = binarySearch;
