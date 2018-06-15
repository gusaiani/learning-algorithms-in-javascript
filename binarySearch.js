function binarySearch(arr, key) {
  const arrayHalfLength = Math.floor(arr.length / 2)
  const middleElement = arr[arrayHalfLength];

  if (middleElement === key)  {
    return true;
  } else if (arr.length === 1) {
    return false;
  } else if (key > middleElement) {
    return binarySearch(arr.splice(arrayHalfLength, arr.length), key)
  } else {
    return binarySearch(arr.splice(0, arrayHalfLength), key)
  }
}

function kindOfABinarySearch(arr, key) {
  const halfArray = arr.slice(Math.floor(arr.length / 2));

  if (halfArray.indexOf(key) > -1) {
    return true;
  } else if (arr.length === 1) {
    return false;
  } else {
    const otherHalf = arr.slice(Math.floor(-arr.length / 2));
    return binarySearch(otherHalf);
  }
}

module.exports = binarySearch;

