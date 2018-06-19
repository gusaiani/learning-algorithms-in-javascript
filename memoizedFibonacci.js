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

module.exports = memoizedFibonacci;
