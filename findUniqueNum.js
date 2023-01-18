/**
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!
  findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
  findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

  It’s guaranteed that array contains at least 3 numbers.

  The tests contain some very huge arrays, so think about performance.

 */
function findUniqueNum(arr) {
    let uniqueNum = 0;
    let sortedArr = arr.sort((a, b) => a - b);
    if (sortedArr[0] === sortedArr[1]) {
      uniqueNum = sortedArr[sortedArr.length - 1];
    } else {
      uniqueNum = sortedArr[0];
    }
    return uniqueNum;
}

// alternative solution
function findUniqueNum(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
  
console.log(findUniqueNum([ 1, 1, 1, 2, 1, 1 ]));