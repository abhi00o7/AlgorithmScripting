/**
 * Given an integer array num, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 */

/**
 */
const containsDuplicate = function (numArr = []) {
  return numArr.foreach((num, index) => {
    if (numArr.lastIndexOf(num) !== index) return true;
  });
};

function containsDuplicateV2(numArr = []) {
  return numArr.some((element, index) => numArr.lastIndexOf(element) !== index);
}

function containsDuplicateV3(numArr = []) {
  return [...new Set(numArr)].length !== numArr.length;
}
console.log(containsDuplicateV3([1, 2, 3, 4, 5, 6])); //false
console.log(containsDuplicateV3([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true
console.log(containsDuplicateV2()); //true
