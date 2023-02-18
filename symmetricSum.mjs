/**
 * Create a function that takes two or more arrays and 
 * returns an array of their symmetric difference. 
 * The returned array must contain only unique values (no duplicates).
 */


// the following algorithm works perfectly well for upto two arrays.

function sym(...args) {
  let oneArray = []
  for (const arg of args) {
    oneArray = oneArray.concat([...new Set(arg)])
  }

  return oneArray.filter((element, index, array) => {
    return  array.indexOf(element) === array.lastIndexOf(element)
  });
}


const t0 = performance.now();
console.log(sym([1, 2, 3], [5, 2, 1, 4]))
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

const t2 = performance.now();
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))
const t3 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);