/**
 * Given an integer array num, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 */

/**
 * @param {number[]} num
 * @return {boolean}
 */
const containsDuplicate = function (numArr) {
  return numArr.filter((num, index) =>
    numArr.lastIndexOf(num) !== index ? true : false
  );
};


console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true