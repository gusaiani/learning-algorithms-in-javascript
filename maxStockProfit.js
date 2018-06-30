function maxStockProfit(arr) {
  const {min, max} = arr.reduce((acc, price) => {
    if (price < acc.min) { acc.min = price };
    if (price > acc.max) { acc.max = price };
    return acc;
  },
  {min: Infinity, max: -Infinity});

  return max - min;
}

module.exports = maxStockProfit;
