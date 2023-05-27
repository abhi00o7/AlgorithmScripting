// Binary search

// Time complexity: O(log n)
// Space complexity: O(1)

// Binary search is a much faster form of search
// Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
// Binary search only works on sorted arrays!

// Divide and conquer
// This algorithm works by dividing the array in half and then checking to see if the target element is greater than or less than the middle element
// If it is greater than the middle element, you know that the target element, if it is in the array, is going to be to the right of the middle element
// Then you repeat the process again with the right half of the array
// If the target element is less than the middle element, you repeat the process with the left half of the array
// You repeat this process until you either find the target element or until the array is empty

// Pseudocode

// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer:
//   Create a pointer in the middle

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);

  while (arr[middle] !== target && left <= right) {
    if (target < arr[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((right + left) / 2);
  }

  return arr[middle] === target ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2

// If the target element is less than the middle element, you repeat the process with the left half of the array
// If the target element is greater than the middle element, you repeat the process with the right half of the array
// You repeat this process until you either find the target element or until the array is empty

// Refactored

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);

  while (arr[middle] !== target && left <= right) {
    if (target < arr[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((right + left) / 2);
  }

  return arr[middle] === target ? middle : -1;
}
