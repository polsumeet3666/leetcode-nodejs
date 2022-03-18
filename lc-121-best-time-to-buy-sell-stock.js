/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  
  let min = Number.MAX_SAFE_INTEGER;
  let profit = 0;
  for (let i=0;i<prices.length;i++) {
    if (prices[i]< min){
      min = prices[i];
    } else if (prices[i]-min > profit) {
      profit = prices[i]-min
    }
  }
  return profit;
 
};

// let prices = [3,2,6,5,0,3];
// let prices = [7,1,5,3,6,4];
// let prices = [7,6,4,3,1];
let prices = [2,1,4]
// let prices = [2,4,1]
// let prices = [2,1,2,1,0,1,2];
console.log(maxProfit(prices))