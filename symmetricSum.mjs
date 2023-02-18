/**
 * Create a function that takes two or more arrays and 
 * returns an array of their symmetric difference. 
 * The returned array must contain only unique values (no duplicates).
 */


// the following algorithm works perfectly well for upto two arrays.

function sym(...args) {
  if (args.length < 1) return `Please provide arguments`

  let firstItem = args.shift()
  let secondItem = args.shift()

  let intersection = [
    ...new Set(firstItem), ...new Set(secondItem)
  ].filter(
    (element, index, array) => array.indexOf(element) === array.lastIndexOf(element)
  );
  args = [intersection, ...args]
  return args.length > 1 ?
    sym(...args) :
    args
}
// test cases
// console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))
// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))
// console.log(sym([1, 2, 5], [2, 3, 5],))
// console.log(sym([1, 2, 5]))
// console.log(sym([1, 3], [3, 4, 5]))
// console.log(sym())

// performance test cases
const t0 = performance.now();
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

const t2 = performance.now();
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))
const t3 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);