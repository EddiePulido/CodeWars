class Solution {
  /**
   * @param {number} prices
   * @return {number}
   */
  maxProfit(prices) {
      let min = prices[0]
      let profit = 0

      for(const price of prices){
          if(price < min){
              min = price
          }else{
              profit = Math.max(profit, price - min)
          }
      }

      return profit
  }
}
