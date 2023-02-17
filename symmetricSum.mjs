/**
 * Create a function that takes two or more arrays and 
 * returns an array of their symmetric difference. 
 * The returned array must contain only unique values (no duplicates).
 */


const frequency = (countObj, element) => {
  const currentCount = countObj[element] ?? 0
  return {
    ...countObj,
    [element]: currentCount + 1
  }
}


function sym(arr1, arr2) {
  // check the length 
  // if (arr1.length !== arr2.length) return false

  // frequency of letters in string
  const frequencyArr1 = arr1.split('').reduce(frequency, 0);
  console.log("🚀 ~ file: maxSumKcorner.mjs:24 ~ sym ~ frequencyArr1", frequencyArr1)
  // const arrayArr2 = arr2.split('')

  for (const number of arr2) {
    if (!frequencyArr1[number]) return false;
    frequencyArr1[number] -= 1
  }
  return true
}

const t0 = performance.now();
sym([1, 2, 3], [5, 2, 1, 4]);
console.log("🚀 ~ file: maxSumKcorner.mjs:35 ~ sym([1, 2, 3], [5, 2, 1, 4])", sym([1, 2, 3], [5, 2, 1, 4]))
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
