function twoSumON2TimeComplexity(arr, sum) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] + arr[i] == sum) {
        result.push([arr[j], arr[i]]);
      }
    }
  }

  return result;
}

module.exports = twoSumON2TimeComplexity;

