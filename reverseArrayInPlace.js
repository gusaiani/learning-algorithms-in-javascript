function reverseArrayInPlace(arr) {
  return arr.reduce((acc, item) => {
    acc.unshift(item);
    return acc;
  }, []);
}

function reverseArrayInPlaceWithFor(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

module.exports = reverseArrayInPlace;
