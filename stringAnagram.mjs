/**
 * Given two strings, write a function to determine
 if the second string is an anagram of the first.An anagram is
 a word, phrase, or name formed by rearranging the
 letters of another, such as cinema, formed from iceman.
 */

let oneStr = 'I am lovinit'
let twoStr = 'am I itlovin'

const frequency = (countObj, element) => {
  const currentCount = countObj[element] ?? 0
  return {
    ...countObj,
    [element]: currentCount + 1
  }
}

function isAnagram(str1, str2) {
  // check the length 
  if (str1.length !== str2.length) return false

  // frequency of letters in string
  const frequencyStr1 = str1.toLowerCase().split('').reduce(frequency, 0);
  const frequencyStr2 = str2.toLowerCase().split('').reduce(frequency, 0);

  for (const letter in frequencyStr2) {
    if (!frequencyStr1[letter]) return false;
    if (frequencyStr1[letter] !== frequencyStr2[letter]) return false;
  }
  return true
}

const t0 = performance.now();
console.log(isAnagram(twoStr, oneStr))
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);


// refactor using just one object
function checkAnagram(str1, str2) {
  // check the length 
  if (str1.length !== str2.length) return false

  // frequency of letters in string
  const frequencyStr1 = str1.toLowerCase().split('').reduce(frequency, 0);
  const arrayStr2 = str2.toLowerCase().split('')

  for (const letter of arrayStr2) {
    if (!frequencyStr1[letter]) return false;
    frequencyStr1[letter] -= 1
  }
  return true
}

const t2 = performance.now();
console.log(checkAnagram(twoStr, oneStr))
const t3 = performance.now();
console.log(`Call to doSomething took ${t3 - t2} milliseconds.`);


// check anagram without using map

function checkAnagramV3(str1, str2) {
  let newStr1 = str1.toLowerCase().replace(/[^a-z]/g, '')
  let newStr2 = str2.toLowerCase().replace(/[^a-z]/g, '')

  if (newStr1.length !== newStr2.length) {
    return false
  }

  let hash1 = {}
  let hash2 = {}

  newStr1.split('').map(letter => {
    hash1[letter] ? hash1[letter]++ : hash1[letter] = 1
  })

  newStr2.split('').map(letter => {
    hash2[letter] ? hash2[letter]++ : hash2[letter] = 1
  })

  let hash1keys = Object.keys(hash1)
  let hash2keys = Object.keys(hash2)

  for (let i = 0; i < hash1keys.length; i++) {
    if (!hash2keys.includes(hash1keys[i])) {
      return false
    }
    if (hash1[hash1keys[i]] !== hash2[hash1keys[i]]) {
      return false
    }
  }

  return true
}

const t4 = performance.now();
console.log(checkAnagramV3(twoStr, oneStr))
const t5 = performance.now();
console.log(`Call to doSomething took ${t5 - t4} milliseconds.`);
