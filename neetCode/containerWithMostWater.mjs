/**
 * You are given an integer array height of length n.
 * There are n vertical lines drawn such that 
 * the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, 
such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.
 */

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

// Input: height = [1,1]
// Output: 1

// Input: height = [4,3,2,1,4]
// Output: 16

// solution 1

function maxArea(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let current = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, current);

    if (height[left] < height[right]) left++;
    else right--;
  }

  return max;
}

// example 1
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49


