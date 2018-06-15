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

function firstAttemptAtTwoSumONTimeComplexity(arr, sum) {
  /*
   * This attempt almost works, and at the same time is much less elegant
   * and efficient than the following.
   * Since the hashTable as object doesn't preserve the order with which
   * the array is presented, I was able to return an array with almost identical items,
   * the difference being that the inner arrays sometimes come in reversed orders.
  */
  let hashTable = {};
  let result = [];

  arr.forEach(item => {
    if (!hashTable[item]) hashTable[item] = 0;
    hashTable[item]++;
  })

  const hashKeys = Object.keys(hashTable);

  for (let i = 0; i < hashKeys.length / 2; i ++) {
    const keyInt = parseInt(hashKeys[i]);
    const keyToSearch = sum - keyInt;
    const hasValidSum = hashKeys.indexOf(keyToSearch.toString()) > i;

    if (hasValidSum) {
      const numberOfRepetitions = hashTable[hashKeys[i]] * hashTable[keyToSearch];

      for (let j = 0; j < numberOfRepetitions; j++) {
        result.push([keyToSearch, keyInt]);
      }
    }
  }

  return result;
}

function twoSumONTimeComplexity(numArray, sum) {
  var pairs = [];
  var hashtable = [];

  for (let i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - numArray[i];

    if (hashtable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashtable.push(currNum);
  }

  return pairs;
}

module.exports = twoSumONTimeComplexity;

