function mergeSort(initialUnsortedArray, arrayOfArrays) {

  let brokenArray;
  let newArrayOfArrays = [];

  if (initialUnsortedArray) {
    brokenArray = initialUnsortedArray.map(item => {
      return [item];
    })
    return mergeSort(null, brokenArray);
  } else {
    if (arrayOfArrays.length === 1) return arrayOfArrays[0];

    for (let i = 0; i < arrayOfArrays.length; i = i + 2) {
      if (!arrayOfArrays[i + 1]) {
        newArrayOfArrays.push(arrayOfArrays[i]);
      } else {
        let newArray = merge(arrayOfArrays[i], arrayOfArrays[i + 1])
        newArrayOfArrays.push(newArray);
      }
    }
  }

  return mergeSort(null, newArrayOfArrays);
}

function merge(arr1, arr2) {
  let sortedArray = []

  while((arr1.length + arr2.length) > 0) {
    if (!arr1[0]) sortedArray.push(arr2.shift());
    else if (!arr2[0]) sortedArray.push(arr1.shift());
    else if (arr1[0] < arr2[0]) sortedArray.push(arr1.shift());
    else sortedArray.push(arr2.shift());
  }

  return sortedArray;
}

module.exports = mergeSort;
