/**
 * Given an integer array num, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 */

/**
 */

function containsDuplicateV2(numArr = []) {
  return numArr.some((element, index) => numArr.lastIndexOf(element) !== index);
}

function containsDuplicateV3(numArr = []) {
  return new Set(numArr).size !== numArr.length;
}

function containsDuplicateV4(numArr = []) {
  return new Set(numArr).size !== numArr.length;
}

function performanceTimer(func) {
  let count = 0;
  return function (...args) {
    const t0 = performance.now();
    const results = func.apply(null, args);
    const t1 = performance.now();
    console.log(`Function Call took ${t1 - t0} milliseconds. COUNT:${++count}`);
    return results;
  };
}

const timerV2 = performanceTimer(containsDuplicateV2);
const timerV3 = performanceTimer(containsDuplicateV3);
const timerV4 = performanceTimer(containsDuplicateV4);

console.log(timerV2([1, 2, 3, 4, 5, 6])); //false
console.log(timerV2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true
console.log(timerV2()); // false

console.log(timerV3([1, 2, 3, 4, 5, 6])); //false
console.log(timerV3([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true
console.log(timerV3()); //false
//true
console.log(timerV4([1, 2, 3, 4, 5, 6])); //false
console.log(timerV4([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true
console.log(timerV4()); //false
