/**
 * Given two strings, write a function to determine
 if the second string is an anagram of the first.An anagram is
 a word, phrase, or name formed by rearranging the
 letters of another, such as cinema, formed from iceman.
 */

let oneStr = "I am lovinit";
let twoStr = "am I itlovin";

const frequency = (countObj, element) => {
  const currentCount = countObj[element] ?? 0;
  return {
    ...countObj,
    [element]: currentCount + 1,
  };
};

function isAnagram(str1, str2) {
  // check the length
  if (str1.length !== str2.length) return false;

  // frequency of letters in string
  const frequencyStr1 = str1.toLowerCase().split("").reduce(frequency, 0);
  const frequencyStr2 = str2.toLowerCase().split("").reduce(frequency, 0);

  for (const letter in frequencyStr2) {
    if (!frequencyStr1[letter]) return false;
    if (frequencyStr1[letter] !== frequencyStr2[letter]) return false;
  }
  return true;
}

// higher order function
function performanceTimer(func) {
  return function (...args) {
    const t0 = performance.now();
    const results = func.apply(null, args);
    const t1 = performance.now();
    console.log(`Function Call took ${t1 - t0} milliseconds.`);
    return results;
  };
}

const wrapped = performanceTimer(isAnagram);

console.log(wrapped(twoStr, oneStr));
console.log(`==================`);

// refactor using just one object
function checkAnagram(str1, str2) {
  // check the length
  if (str1.length !== str2.length) return false;

  // frequency of letters in string
  const frequencyStr1 = str1.toLowerCase().split("").reduce(frequency, 0);
  const arrayStr2 = str2.toLowerCase().split("");

  for (const letter of arrayStr2) {
    if (!frequencyStr1[letter]) return false;
    frequencyStr1[letter] -= 1;
  }
  return true;
}

const anotherWrap = performanceTimer(checkAnagram);

console.log(anotherWrap(twoStr, oneStr));
``;
console.log(`==================`);

// check anagram without using reduce

function checkAnagramV3(str1, str2) {
  let newStr1 = str1.toLowerCase().replace(/[^a-z]/g, "");
  let newStr2 = str2.toLowerCase().replace(/[^a-z]/g, "");

  if (newStr1.length !== newStr2.length) return false;

  let hash1 = {};
  let hash2 = {};

  newStr1.split("").map((letter) => {
    hash1[letter] ? hash1[letter]++ : (hash1[letter] = 1);
  });

  newStr2.split("").map((letter) => {
    hash2[letter] ? hash2[letter]++ : (hash2[letter] = 1);
  });

  let hash1keys = Object.keys(hash1);
  let hash2keys = Object.keys(hash2);

  for (const letter of hash1keys) {
    if (!hash2keys.includes(letter)) return false;
    if (hash1[letter] !== hash2[letter]) return false;
  }

  return true;
}

const wrappedV3 = performanceTimer(checkAnagramV3);
console.log(wrappedV3(twoStr, oneStr));
