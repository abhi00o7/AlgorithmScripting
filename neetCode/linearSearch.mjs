// linear search

function linearSearch(arr) {
  // loop through array
  for (let i = 0; i < arr.length; i++) {
    // if current element is 42
    if (arr[i] === 42) {
      // return true
      return true;
    }
  }
  return false
}

// example 1
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 42])); // true