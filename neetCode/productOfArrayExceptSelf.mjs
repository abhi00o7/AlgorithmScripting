/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
 */


function productExceptSelf(arr) {
  let result = [];
  let left = 1;
  let right = 1;

  for (let i = 0; i < arr.length; i++) {
    result[i] = left;
    left *= arr[i];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= arr[i];
  }

  return result;
}


// example 1
console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]