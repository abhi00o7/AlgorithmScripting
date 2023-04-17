// Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]


function rotateMatrix(arr) {
  // program to rotate a matrix by 90 degrees clockwise
  // create a variable to hold the length of the array
  let n = arr.length;
  // create a variable to hold the new array
  let newArr = [];
  // create a for loop that iterates through the array
  for (let i = 0; i < n; i++) {
    // create a variable to hold the current row
    let currentRow = [];
    // create a for loop that iterates through the array
    for (let j = 0; j < n; j++) {
      // push the current row into the new array
      currentRow.push(arr[j][i]);
    }
    // push the current row into the new array
    newArr.push(currentRow);
  }
  // return the new array
  return newArr;
}

console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]))