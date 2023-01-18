/* Your task is to write a function,
smartSum, that returns the sum of an arbitrary number of arguments.
But be careful, some of your arguments can be arrays of numbers or nested arrays.

smartSum(1,2,3,[4,5],6); // returns 21
smartSum(1,2,[[3,4],5],6); // returns 21
*/

const anotherSmartSum = (...args) => {
  let sum = 0;
  args.forEach((arg) => {
    if (Array.isArray(arg)) {
      sum += smartSum(...arg);
    } else {
      sum += arg;
    }
  });
  return sum;
};

