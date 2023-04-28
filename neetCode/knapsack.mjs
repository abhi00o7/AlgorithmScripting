// problem statement
// A thief wants to rob a store. He is carrying a bag of capacity W. The store has ‘n’ items. Its weight is given by the ‘wt’ array and its value by the ‘val’ array. He can either include an item in its knapsack or exclude it but can’t partially have it as a fraction. We need to find the maximum value of items that the thief can steal.

function knapsack(wt, val, W, n) {
    // base condition
  if (n === 0 || W === 0) {
    return 0;
  }
  // choice diagram
  if (wt[n - 1] <= W) {

    return Math.max(
      val[n - 1] + knapsack(wt, val, W - wt[n - 1], n - 1), // include
      knapsack(wt, val, W, n - 1) // exclude
    );
  }
  else if (wt[n - 1] > W) {
    return knapsack(wt, val, W, n - 1);
  }
}

// examples
console.log(knapsack([10, 20, 30], [60, 100, 120], 50, 3)); // 220