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

// explain the problem statement
// A thief wants to rob a store. He is carrying a bag of capacity W. The store has ‘n’ items. Its weight is given by the ‘wt’ array and its value by the ‘val’ array. He can either include an item in its knapsack or exclude it but can’t partially have it as a fraction. We need to find the maximum value of items that the thief can steal.

// explain the solution
// We will use recursion to solve this problem. We will use a choice diagram to solve this problem. We will have two choices at each step. Either we can include the item or we can exclude the item. We will take the maximum of both the choices. If the weight of the item is less than the capacity of the bag, then we will include the item and reduce the capacity of the bag by the weight of the item. If the weight of the item is greater than the capacity of the bag, then we will exclude the item and move to the next item. We will keep on doing this until we reach the base condition. The base condition will be when the capacity of the bag is 0 or when we have reached the end of the array. If we have reached the end of the array, then we will return 0. If the capacity of the bag is 0, then we will return 0. We will return 0 because we can’t include any item in the bag.