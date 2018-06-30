function maxStockProfit(arr) {
  let firstMin = firstMax = arr.shift();

  const {min, max, anyUpwardMotion, anyDownwardMotion} = arr.reduce((acc, price) => {
    if (price > acc.min) { acc.anyUpwardMotion = true }
    if (price < acc.max) { acc.anyDownwardMotion = true }
    if (price < acc.min) { acc.min = price };
    if (price > acc.max) { acc.max = price };
    return acc;
  },
    {min: firstMin, max: firstMax, anyUpwardMotion: false, anyDownwardMotion: false});

  if (!anyUpwardMotion && anyDownwardMotion) return -1;
  return max - min;
}

module.exports = maxStockProfit;
