function maxStockProfit(prices) {
  var maxProfit = -1

  var buyPrice = 0
  var sellPrice = 0

  var changeBuyPrice = true

  for (let i = 0; i < prices.length; i++) {
    if (changeBuyPrice) buyPrice = prices[i]
    nextPrice = prices[i + 1]

    if (nextPrice < buyPrice) {
      changeBuyPrice = true
    } else {
      var tempProfit = nextPrice - buyPrice
      if (tempProfit > maxProfit) maxProfit = tempProfit
      changeBuyPrice = false
    }
  }

  return maxProfit
}

module.exports = maxStockProfit;
