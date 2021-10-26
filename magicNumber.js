// A magic number is a number formed by concatenation of numbers 1, 14 and 144. We can use each of these numbers any number of times.
// Therefore 14144, 141414 and 1411 are magic numbers but 1444, 514 and 414 are not.
// Input
// The first line of input contains an integer n, (1 ≤ n ≤ 10⁹). This number doesn't contain leading zeros.

function magicNumberCheck(number) {
    return number
                .toString()
                .replace(/144|14|1/gm , '')
                .length == 0 ? 'YES' : 'NO'
}

console.log(magicNumberCheck(141414)) // expected output : 'YES'
console.log(magicNumberCheck(1411)) // expected output : 'YES'
console.log(magicNumberCheck(1444)) // expected output : 'NO'
console.log(magicNumberCheck(514)) // expected output : 'NO'
console.log(magicNumberCheck(5)) // expected output : 'NO'