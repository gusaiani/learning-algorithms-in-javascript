function memoizedFibonacci(
  index,
  cache = {
    currentIndex: 1,
    lastItem: 1,
    nextToLastItem: 0,
  }
) {
  if (index === 1) return 1;

  if (cache.currentIndex === index) {
    return cache.lastItem;
  } else {
    const {
      currentIndex,
      lastItem,
      nextToLastItem,
    } = cache
    return memoizedFibonacci(
      index,
      {
        currentIndex: currentIndex + 1,
        lastItem: lastItem + nextToLastItem,
        nextToLastItem: lastItem
      }
    )
  }
}

function arrayFibMemo(index, cache) {
  cache = cache || [];

  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = arrayFibMemo(index - 1, cache) + arrayFibMemo(index - 2, cache);
    }
  }

  return cache[index];

}

module.exports = arrayFibMemo;
