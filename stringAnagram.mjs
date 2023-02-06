/**
 * Given two strings, write a function to determine
 if the second string is an anagram of the first.An anagram is
 a word, phrase, or name formed by rearranging the
 letters of another, such as cinema, formed from iceman.
 */

const frequency = (countObj, element) => {
  const currentCount = countObj[element] ?? 0
  return {
    ...countObj,
    [element]: currentCount + 1
  }
}
 
function isAnagram(str1, str2){
  // check the length 
  if(str1.length !== str2.length) return false

  // frequency of letters in string
  const frequencyStr1 = str1.split('').reduce(frequency, 0);
  const frequencyStr2 = str2.split('').reduce(frequency, 0);

  for (const letter in frequencyStr2) {
    if (!frequencyStr1[letter]) return false;
    if (frequencyStr1[letter] !== frequencyStr2[letter]) return false;
  }
  return true
}

console.log(isAnagram(`cinema`, `iceman`))
console.log(isAnagram(`azz`, `zza`))
console.log(isAnagram(`azz`, `zzdda`))
console.log(isAnagram(`azz`, `zzsssa`))

// refactor using just one object

function checkAnagram(str1, str2) {
  // check the length 
  if (str1.length !== str2.length) return false

  // frequency of letters in string
  const frequencyStr1 = str1.split('').reduce(frequency, 0);
  const arrayStr2 = str2.split('')

  for (const letter of arrayStr2) {
    if (!frequencyStr1[letter]) return false;
    frequencyStr1[letter] -= 1
  }
  return true
}
