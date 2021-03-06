/*
Create a function maxProfit, which, given a list of stock prices
for a given day, returns the maximum profit that could have been
made by buying a stock at the given price and then selling the stock later on.
For example if the input is: [45, 24, 35, 31, 40, 38, 11]
then your program should return 16 because if you bought the stock
at $24 and sold it at $40, a profit of $16 was made and this is the
largest profit that could be made. If no profit could have been made, return -1.

Strategy 1: Brute Force
If you think about it for a few minutes, you'll realize
this problem is non-trivial to solve. So, let's not worry
about a "clean" or "efficient" solution. Here's the recommended
"brute force" strategy: for each pair of valid dates,
calculate the profit, then, figure out which dates corresponded to the max profit.

For example, if your values were: [a, b, c], you would check profits for: [a,b], [a,c] and [b,c].

Strategy 2: Elegant Solution
Try to come up with a non-brute-force solution (warning: not easy).
You may want to read up on: Divide and Conquer.
*/


var test = [45, 24, 35, 31, 40, 38, 11];

function bruteForce(input) {
  //create empty array to store possible profits
  let bestTrade = 0;
  let lowestPrice = input[0];
  //for each price i
  for (i = 0; i < input.length; i++) {
    //calculate difference between the price i and each later price j
    //storing each calc in the profits array
    if (input[i] < lowestPrice) {
      lowestPrice = input[i];
    }
    if ((input[i] - lowestPrice) > bestTrade) {
      bestTrade = (input[i] - lowestPrice);
    }
  }
  return bestTrade;
}
console.log(bruteForce(test));

//ceate an empty array to hold the largest profits
//compare profits and return highest
//console.log(profits);
// function findHighest (profits) {
//   var moon = profits[0];
//   for (i = 1; i < profits.length; i++) {
//     console.log(moon + " vs " + profits[i])
//     if (profits[i] > moon) {
//       moon = profits[i];
//     }
//   }
//   return moon;
// }

// console.log(findHighest(bruteForce(test)));

