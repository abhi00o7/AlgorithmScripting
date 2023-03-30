// Kadane’s Algorithm : Maximum Subarray Sum in an Array

// Function to find the maximum subarray sum in an array
// of integers
function kadaneAlgo(arr) {
  // stores the maximum sum subarray found so far
  let maxSoFar = 0;

  // stores the maximum sum of subarray ending at the current position
  let maxEndingHere = 0;

  // traverse the given array
  for (let i = 0; i < arr.length; i++) {
    // update the maximum sum of subarray "ending" at index i (by adding the
    // current element to maximum sum ending at previous index i-1)
    maxEndingHere = maxEndingHere + arr[i];

    // if the maximum sum is negative, set it to 0 (which represents
    // an empty subarray)
    maxEndingHere = Math.max(maxEndingHere, 0);

    // update the result if the current subarray sum is found to be greater
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
// First we create a new instance of the class
// We pass the name of the class to the constructor
// The name of the class is passed as a string
// The class name is passed as a string because the class does not exist yet
// The class is declared in the same file as the code that creates the instance
  // The class is declaredS
}

// TEST CASES 
console.log(kadaneAlgo([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(kadaneAlgo([1, 2, 3, 4, 5])); // 15
console.log(kadaneAlgo([-1, -2, -3, -4, -5])); // 0
