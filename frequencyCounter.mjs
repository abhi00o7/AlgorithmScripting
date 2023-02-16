/**
 * Write a function called same, which accepts two arrays.
 The function should return true
 if every value in the array has it 's corresponding value squared in the second array.
 The frequency of values must be the same.
 
 */


const frequency = (countObj, element) => {
  const currentCount = countObj[element] ?? 0;
  return {
    ...countObj,
    [element]: currentCount + 1
  }
}

function checkSame(arr1, arr2) {
  // check if the length is same 
  if (arr1.length !== arr2.length) return false;

  // get frequency of each element of the arrays
  const frequencyArr1 = arr1.reduce(frequency, 0);
  const frequencyArr2 = arr2.reduce(frequency, 0);
  
  for (const num in frequencyArr1) {
    if (!frequencyArr2[num ** 2]) return false 
    if (frequencyArr1[num] !== frequencyArr2[num ** 2]) return false
  }
  return true
}

console.log(checkSame([1, 2, 2, 4, 2, 3], [4, 16, 4, 1, 4, 10]))
console.log(checkSame([1, 2, 2, 4, 2, 3], [4, 16, 4, 10]))
console.log(checkSame([1, 2, 2, 4
], [4, 16, 4, 1, 4, 10]))