// For this problem will find all prime numbers up to the number you are given as a parameter and return their sum. It is a good idea to research algorithms for finding prime numbers.

// Sieve of  Eratosthenes
/*
 *   pseudo-code
 *       input: an integer n > 1.
 *       output: all prime numbers from 2 through n.

 *       let A be an array of Boolean values, indexed by integers 2 to n,
 *       initially all set to true.
 *       
 *       for i = 2, 3, 4, ..., not exceeding √n do
 *           if A[i] is true
 *               for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n do
 *                   A[j] := false

 *       return all i such that A[i] is true.
 */

// code contains optimization as mentioned in this article >> https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Segmented_sieve
function sumPrimes(num) {
  let primeArr = Array.from(
    {
      length: num + 1,
    },
    (item) => true
  );

  primeArr[1] = false; //one is not prime and its index will change the sum unlike 0

  for (let index = 2; index <= Math.sqrt(num); index++) {
    if (primeArr[index]) {
      for (let j_index = index ** 2; j_index <= num; j_index += index) {
        primeArr[j_index] = false;
      }
    }
  }

  return primeArr.reduce((sum, prime, index) => (prime ? sum + index : sum), 0);
}

// Testing and debugging

console.log(sumPrimes(177));
console.log(sumPrimes(277));
console.log(sumPrimes(377));
console.log(sumPrimes(477));
console.log(sumPrimes(577));
console.log(sumPrimes(677));
console.log(sumPrimes(977));

console.log(Math.round(Math.sqrt(277)));
