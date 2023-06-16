/**
 * Here we will move on to an intermediate sorting algorithm: quick sort. 
 * Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. 
 * In this method, a pivot value is chosen in the original array. 
 * The array is then partitioned into two subarrays of values less than and greater than the pivot value. 
 * We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. 
 * This continues until the base case of an empty or single-item array is reached, 
 * which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. 
It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Instructions: Write a function quickSort which takes an array of integers as input 
and returns an array of these integers in sorted order from least to greatest. 
While the choice of the pivot value is important, any pivot will do for our purposes here. 
For simplicity, the first or last element could be used.
 */

function quickSortRecursive(arr, start, end) {
  // // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // // Returns pivotIndex
    let index = partition(arr, start, end);
    
    // // Recursively apply the same logic to the left and right subarrays
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}

// example 1
array = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSortRecursive(array, 0, array.length - 1);

console.log(array);

function quickSortIterative(arr) {
  // Creating an array that we'll use as a stack, using the push() and pop() functions
  stack = [];

  // Adding the entire initial array as an "unsorted subarray"
  stack.push(0);
  stack.push(arr.length - 1);

  // There isn't an explicit peek() function
  // The loop repeats as long as we have unsorted subarrays
  while (stack[stack.length - 1] >= 0) {
    // Extracting the top unsorted subarray
    end = stack.pop();
    start = stack.pop();

    pivotIndex = partition(arr, start, end);

    // If there are unsorted elements to the "left" of the pivot,
    // we add that subarray to the stack so we can sort it later
    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    // If there are unsorted elements to the "right" of the pivot,
    // we add that subarray to the stack so we can sort it later
    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
}