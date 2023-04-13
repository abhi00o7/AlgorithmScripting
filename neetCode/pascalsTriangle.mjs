// write a program that prints the first n rows of pascal's triangle
/**
 * @param {number} numRows
 * @return {number[][]}
 * @description
 * 1. create a function that takes in a number
 * 2. create an array to hold the rows
 * 3. create a for loop that iterates through the number of rows
 * 4. create a variable to hold the current row
 * 5. create a for loop that iterates through the current row
 * 6. create a variable to hold the current value
 * 7. if the current value is the first or last value, set it to 1
 * 8. otherwise, set it to the sum of the previous row's current value and the previous row's previous value
 * 9. push the current value to the current row
 * 10. push the current row to the rows array
 * 11. return the rows array
 * @example
 * Input: 5
 * Output: [
 * [1],
 * [1,1],
 * [1,2,1],
 * [1,3,3,1],
 * [1,4,6,4,1]
 */

const pascalsTriangle = (numRows) => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      let val;
      if (j === 0 || j === i) {
        val = 1;
      } else {
        val = rows[i - 1][j - 1] + rows[i - 1][j];
      }
      row.push(val);
    }
    rows.push(row);
  }
  return rows;
}