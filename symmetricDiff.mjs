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
    args[0]
}

// alternative solution

const diff = (arr1, arr2) => [
  ...arr1.filter((e) => !arr2.includes(e)),
  ...arr2.filter((e) => !arr1.includes(e))
];

const anotherSym = (...args) => [...new Set(args.reduce(diff, []))];

// test here
// sym([1, 2, 3], [5, 2, 1, 4]);

// test cases
// console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))
// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))
// console.log(sym([1, 2, 5], [2, 3, 5], ))
// console.log(sym([1, 2, 5]))
// console.log(sym([1, 3], [3, 4, 5]))
// console.log(sym())

// performance test cases

// higherOrder functions
// higher order function
function performanceTimer(func) {
  let count = 0 
  return function (...args) {
    const t0 = performance.now();
    const results = func.apply(null, args)
    const t1 = performance.now();
    console.log(`Function Call took ${t1 - t0} milliseconds. COUNT:${++count}`);
    return results
  }
}

const firstFuncTimer = performanceTimer(sym)
const secondFuncTimer = performanceTimer(diff)
const thirdFuncTimer = performanceTimer(anotherSym)

console.log(firstFuncTimer([1, 2, 5], [2, 3, 5], [3, 4, 5]))
console.log(firstFuncTimer([1, 2, 3, 3], [5, 2, 1, 4]))
console.log(firstFuncTimer([1, 2, 5], [2, 3, 5], ))
console.log(firstFuncTimer([1, 2, 5]))
console.log(firstFuncTimer([1, 3], [3, 4, 5]))
console.log(firstFuncTimer())

console.log(secondFuncTimer([1, 2, 5], [2, 3, 5], [3, 4, 5]))
console.log(secondFuncTimer([1, 2, 3, 3], [5, 2, 1, 4]))
console.log(secondFuncTimer([1, 2, 5], [2, 3, 5], ))
// console.log(secondFuncTimer([1, 2, 5]))
console.log(secondFuncTimer([1, 3], [3, 4, 5]))
// console.log(secondFuncTimer())

console.log(thirdFuncTimer([1, 2, 5], [2, 3, 5], [3, 4, 5]))
console.log(thirdFuncTimer([1, 2, 3, 3], [5, 2, 1, 4]))
console.log(thirdFuncTimer([1, 2, 5], [2, 3, 5], ))
console.log(thirdFuncTimer([1, 2, 5]))
console.log(thirdFuncTimer([1, 3], [3, 4, 5]))
// console.log(thirdFuncTimer())


// const t0 = performance.now();
// console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))
// const t1 = performance.now();
// console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

// const t2 = performance.now();
// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))
// const t3 = performance.now();
// console.log(`Call to doSomething took ${t3 - t2} milliseconds.`);

// const t4 = performance.now();
// console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))
// const t5 = performance.now();
// console.log(`Call to doSomething took ${t5 - t4} milliseconds.`);