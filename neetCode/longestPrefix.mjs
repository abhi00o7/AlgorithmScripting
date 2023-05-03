// longest common prefix problem
/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * You are given an array 'ARR' consisting of 'N' strings. Your task is to find
the longest common prefix among all these strings. If there is no common
prefix, you have to return an empty string.
A prefix of a string can be defined as a substring obtained after removing
some or all characters from the end of the string.
 */

// Solution 1: Using Horizontal Scanning

// Time Complexity: O(s)
// Space Complexity: O(1)

// function to find the longest common prefix

function longestCommonPrefix(arr) {
  // base condition
  if (arr.length === 0) {
    return "";
  }
  // initialize the prefix with the first string
  let prefix = arr[0];
  // iterate through the array
  for (let i = 1; i < arr.length; i++) {
    // iterate through the string
    for (let j = 0; j < prefix.length; j++) {
      // check if the prefix exists in the string
      if (prefix[j] !== arr[i][j]) {
        // update the prefix
        prefix = prefix.substring(0, j);
        break;
      }
    }
  }
  return prefix;
}

// Solution 2: Using Vertical Scanning

// Time Complexity: O(s)
// Space Complexity: O(1)

// function to find the longest common prefix
/*
function longestCommonPrefix(arr) {
  // base condition
  if (arr.length === 0) {
    return "";
  }
  // iterate through the string
  for (let i = 0; i < arr[0].length; i++) {
    // iterate through the array
    for (let j = 1; j < arr.length; j++) {
      // check if the prefix exists in the string
      if (arr[j][i] !== arr[0][i]) {
        return arr[0].substring(0, i);
      }
    }
  }
  return arr[0];
}
*/

// Solution 3: Using Divide and Conquer

// Time Complexity: O(s)
// Space Complexity: O(m * log n)

// function to find the longest common prefix

/*

function longestCommonPrefix(arr) {
  // base condition
  if (arr.length === 0) {
    return "";
  }
  return lcp(arr, 0, arr.length - 1);
}

// recursive function to find the longest common prefix
function lcp(arr, left, right) {
  // base condition
  if (left === right) {
    
    return arr[left];
  }
  // find the middle index
  const mid = Math.floor((left + right) / 2);
  // find the longest common prefix in the left half
  const lcpLeft = lcp(arr, left, mid);
  // find the longest common prefix in the right half
  const lcpRight = lcp(arr, mid + 1, right);
  // return the common prefix between the left and right halves
  return commonPrefix(lcpLeft, lcpRight);
}
*/

// examples


console.log(longestCommonPrefix(["dog", "racecar", "car"]));

console.log(longestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer"]));