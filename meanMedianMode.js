function getMean(arr) {
  const sum = arr.reduce((acc, item) => {return acc + item}, 0)
  return parseFloat((sum / arr.length).toFixed(4));
}

function getMedian(arr) {
  const sorted = arr.sort();
  const arrLength = arr.length;
  const isArrayLengthEven = (arrLength % 2 == 0) ? true : false;

  if (isArrayLengthEven) {
    const arrayHalfLength = arr.length / 2
    const firstItem = arr[arrayHalfLength - 1];
    const secondItem = arr[arrayHalfLength];
    return (firstItem + secondItem) / 2;
  } else {
    return arr[Math.floor(arr.length / 2)];
  }
}

function getMode(arr) {
  let occurrences = {};
  let mostFrequent = [], frequency = 0;

  arr.forEach(item => {
    if (occurrences['' + item]) {
      occurrences['' + item]++;
    } else {
      occurrences['' + item] = 1;
    }
  });

  Object.keys(occurrences).forEach(key => {
    if (occurrences[key] > frequency) {
      mostFrequent = [parseFloat(key)];
      frequency = occurrences[key]
    } else if (occurrences[key] == frequency) {
      if (mostFrequent.indexOf(key) == -1) {
        mostFrequent.push(parseFloat(key))
      }
    }
  })

  return mostFrequent;
}

function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
}

module.exports = meanMedianMode;
