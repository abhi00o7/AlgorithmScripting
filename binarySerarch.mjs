// binary search algorithm in JavaScript

// binary search algorithm
// @param {array} arr - array to search
// @param {number} target - target value to search for
// @return {number} - index of target or -1 if not found
const binarySearch = (arr, target) => {
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

// examples

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
