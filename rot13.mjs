/**
 * How can you tell an extrovert from an introvert at NSA?
 * Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
 *
 * I found this joke on USENET, but the punchline is scrambled.
 * Maybe you can decipher it? According to Wikipedia,
 * ROT13 (http://en.wikipedia.org/wiki/ROT13)
 * is frequently used to obfuscate jokes on USENET.
 *
 */

const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

function rot13(inputString) {
  let inputStringArr = inputString.split("");
  const inputArr = input.split("");
  const outputArr = output.split("");

  inputString.split("").map((element, index) => {
    if (inputArr.includes(element)) {
      inputStringArr[index] = outputArr[input.indexOf(element)];
    }
  });

  return inputStringArr.join("");
}

// same thing but using .replace() func

function rot13usingReplace(inputString) {
  return inputString.replace(/[a-z]/gi, function (match) {
    // String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
    return String.fromCharCode(
      match.charCodeAt(0) + (match.toLowerCase() < "n" ? 13 : -13)
    );
  });
}

console.log(rot13usingReplace("guvf vf fcnegn"));
console.log(rot13usingReplace("EBG13 rknzcyr"));
console.log(rot13usingReplace("This is my first ROT13 excercise!"));
