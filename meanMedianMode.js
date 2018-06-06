function getMean(arr) {
  const sum = arr.reduce((acc, item) => {return acc + item}, 0)
  return sum / arr.length;
}

function getMedian(arr) {
  const sorted = arr.sort();
  const arrLength = arr.length;
  const isArrayLengthEven = (arrLength % 2 == 0) ? true : false;

  if (isArrayLengthEven) {
    const arrayHalfLength = arr.length / 2
    const firstItem = arr[Math.floor(arrayHalfLength)];
    const secondItem = arr[Math.ceil(arrayHalfLength)];
    return (firstItem + secondItem) / 2;
  } else {
    return arr[arr.length / 2]
  }
}

function getMode(arr) {
  let occurrences = {};
  let mostFrequent, frequency = 0;

  arr.forEach(item => {
    if (occurrences['' + item]) {
      occurrences['' + item]++;
    } else {
      occurrences['' + item] = 1;
    }
  });

  Object.keys(occurrences).forEach(key => {
    if (occurrences[key] > frequency) {
      mostFrequent = key;
      frequency = occurrences[key]
    }
  })

  return parseFloat(mostFrequent);
}

function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
}

module.exports = meanMedianMode;
