/**
 * Inspired by Square Every Digit (and by the inimitable myjinxin2015's many clever one-line kata), your goal here is precisely the same (to square every digit in the given number), in 36 or fewer characters (JavaScript), or 47 or fewer in Ruby

(Note: in Ruby, spaces do not count towards your total-- within reason. Spacing shouldn't be more than 30% of your total to avoid possible cheats).

Your return value should be in integer format.

Your input will always be a valid, non-negative integer... no tricks!

Bonus: Can you get it down to 34 characters? (43 in Ruby!)

Note: Just as a head's up, numbers are > 2^31, so bitwise operators aren't viable.

Examples:

sd(0)=>    0
sd(64)=>   3616
sd(1111)=> 1111
sd(2222)=> 4444
sd(3333)=> 9999
sd(3212)=> 9414
sd(1234)=> 14916
sd(77455754)=> 4949162525492516
sd(99999999)=> 8181818181818181
 */

// write the sd function in 36 characters or less remove whitespace

// 35 characters
sd=x=>+[...x+""].map(n=>n*n).join``

// 33 characters
s=n=>+`${n}`.replace(/./g,x=>x*x)

console.log(sd(64));
