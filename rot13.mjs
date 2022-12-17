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

function ROT13(inputString) {
  let inputStringArr = inputString.split("");
  const inputArr = input.split("");
  const outputArr = output.split("");

  inputString.split('')
    .map((element, index) => {
      if (inputArr.includes(element)) {
        inputStringArr[index] = outputArr[input.indexOf(element)];
      }
    })

  return inputStringArr.join('');
}

console.log(ROT13("the"));
