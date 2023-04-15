// Given an array Arr[] of integers, rearrange the numbers of the given array into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange to the lowest possible order (i.e., sorted in ascending order).

// Note: The replacement must be in-place and use only constant extra memory.

// Example 1:

// Input: Arr[] = {1, 2, 3}
// Output: {1, 3, 2}
// Example 2:

// Input: Arr[] = {3, 2, 1}
// Output: {1, 2, 3}
// Example 3:

// Input: Arr[] = {1, 1, 5}

// Output: {1, 5, 1}

const nextPermutation = (arr) => {
  let i = arr.length - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = arr.length - 1;
    while (j >= 0 && arr[j] <= arr[i]) {
      j--;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  let start = i + 1;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
};

console.log(nextPermutation([1, 2, 3Gg]));
