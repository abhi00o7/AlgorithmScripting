// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
  let previous = 0;
  let current = 1;
  let sum = 0;
  let next;

  for (current; current <= num; ) {
    next = current + previous;
    previous = current;
    //   check for odd number
    if (current % 2 !== 0) {
      sum += current;
    }
    current = next;
  }
  return sum;
}

console.log(sumFibs(54816843183848));
