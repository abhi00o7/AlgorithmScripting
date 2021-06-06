// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(...arr) {

    return arr
        // this flattens the array if concat item with merged it will not be in original order 
        .reduce((merged, item) => merged.concat(item))
        .filter((element, index, array) => array.indexOf(element) === index)
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])) //expected output --> [ 1, 3, 2, 5, 4 ]

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])) //expected output --> [ 1, 2, 3, 5, 4, 6, 7, 8 ]

// test cases 
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

// Passed
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].

// Passed
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

// another solution for es6 using the 'Set' to find unique values 

function anotherUniteUnique(...arr) {
    return [...new Set(arr.flat())]
  }