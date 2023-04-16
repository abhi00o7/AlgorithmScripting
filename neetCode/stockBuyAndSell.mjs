// stock buy and sell
/**
 * You are given an array of prices where prices[i] is 
 * the price of a given stock on an ith day.
You want to maximize your profit by choosing a single day to buy 
one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0.
 */

/**
 *
 * @param {number[]} prices
 * @return {number}
 * @description
 * 1. create a function that takes in an array of numbers
 * 2. create a variable to hold the max profit
 * 3. create a for loop that iterates through the array
 * 4. create a variable to hold the current price
 * 5. create a variable to hold the current profit
 * 6. create a for loop that iterates through the array starting at the current index
 * 7. create a variable to hold the next price
 * 8. create a variable to hold the next profit
 * 9. if the next profit is greater than the current profit, set the current profit to the next profit
 * 10. if the current profit is greater than the max profit, set the max profit to the current profit
 * 11. return the max profit
 * @example
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 *
 *
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 */

const maxProfit = (prices) => {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    let currentPrice = prices[i];
    let currentProfit = 0;
    for (let j = i + 1; j < prices.length; j++) {
      let nextPrice = prices[j];
      let nextProfit = nextPrice - currentPrice;
      if (nextProfit > currentProfit) {
        currentProfit = nextProfit;
      }
    }
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
  }
  return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]))