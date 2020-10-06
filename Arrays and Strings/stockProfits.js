//this problem is from independent practice

//Say you have an array for which the ith element is the price of a given stock on day i.

//If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

//Note that you cannot sell a stock before you buy one.

// for example:
// ---------------Input: [7,1,5,3,6,4]
// ---------------Output: 5

// input: []
// output: 0

// input: [7,6,4,1]
//output: 0

// input: [7, 5, 9, 1, 8]
// output: 7

function profit(arr) {
  let maxProfit = 0
  if(arr.length < 2) return maxProfit
  for(let i = 0; i < arr.length; i++){
      for(let j = i + 1; j < arr.length; j++){
          if(arr[j] - arr[i] > maxProfit){
              maxProfit = arr[j] - arr[i]
          }
      }
  }
  return maxProfit
}

//big(o) = (n^2)
