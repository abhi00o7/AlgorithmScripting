// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func, state = false) {
    return arr
            .filter(item => func(item)? state = true : state)
  }
  //code explanation
/**
 * using filter function will remove every element which does not satisfy the condition provided with the input
 * BUT this counters the problem statement which says one the condition is terminated for the particular array ::
 * ::the array should pe printed as it is.
 * I achieved this by passing a false condition and using ternary operator. */ 

  console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))

//   test cases
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].

// Passed
// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].

// Passed
// dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].

// Passed
// dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].

// Passed
// dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].

// Passed
// dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].