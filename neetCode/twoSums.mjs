/**
 * @param {number[]} numArray
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numArray, target) {
  let indices = [];
  for (let i = 0; i < numArray.length - 1; i++) {
    const complement = target - numArray[i]
    for (let j = i + 1; j <= numArray.length; j++) {
      if (complement === numArray[j]) {
        indices.push(i);
        indices.push(j);
        return indices;
      }
    }
  }
  return `target not possible`;
}
  
  const twoSumHashTable = function (numArray, target) {
  let indices = {};
  for (let i = 0; i < numArray.length; i++) {
    const complement = target - numArray[i];
    if (indices.hasOwnProperty(complement)) {
      return [indices[complement], i];
    }
    indices[numArray[i]] = i;
  }
  return `target not possible`;
};

console.log(twoSumHashTable([2, 7, 11, 15], 9));
console.log(twoSumHashTable([2, 7, 11, 15], 18));
console.log(twoSumHashTable([3, 2, 4, 6], 8));
console.log(twoSumHashTable([3, 2, 4], 6));
console.log(twoSumHashTable([-1, -2, -3, -4, -5], -8));
