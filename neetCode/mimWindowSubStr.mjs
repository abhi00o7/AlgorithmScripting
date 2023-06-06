/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. 
 If there is no such substring, return the empty string "".

The test cases will be generated such that the answer is unique.
 */


function minWindow(s, t) {
  let left = 0;
  let right = 0;
  let min = Infinity;
  let minStr = '';
  let map = {};

  for (let char of t) {
    map[char] = map[char] + 1 || 1;
  }

  let count = Object.keys(map).length;

  while (right < s.length) {
    let char = s[right];

    if (map[char] !== undefined) {
      map[char]--;
      if (map[char] === 0) count--;
    }

    while (count === 0) {
      let temp = s[left];

      if (map[temp] !== undefined) {
        map[temp]++;
        if (map[temp] > 0) count++;
      }

      if (right - left + 1 < min) {
        min = right - left + 1;
        minStr = s.slice(left, right + 1);
      }

      left++;
    }

    right++;
  }

  return minStr;
}

// example 1
console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
// example 2
console.log(minWindow("a", "a")); // "a"

// another method

function minWindow(s, t) {
  let left = 0;
  let right = 0;
  let min = Infinity;
  let minStr = '';
  let map = {};

  for (let char of t) {
    map[char] = map[char] + 1 || 1;
  }

  let count = Object.keys(map).length;

  while (right < s.length) {
    let char = s[right];

    if (map[char] !== undefined) {
      map[char]--;
      if (map[char] === 0) count--;
    }

    while (count === 0) {
      let temp = s[left];

      if (map[temp] !== undefined) {
        map[temp]++;
        if (map[temp] > 0) count++;
      }

      if (right - left + 1 < min) {
        min = right - left + 1;
        minStr = s.slice(left, right + 1);
      }

      left++;
    }

    right++;
  }

  return minStr;
}

// refactor above solution

function minWindow(s, t) {
  let left = 0;
  let right = 0;
  let min = Infinity;
  let minStr = '';
  let map = {};

  for (let char of t) {
    map[char] = map[char] + 1 || 1;
  }

  let count = Object.keys(map).length;

  while (right < s.length) {
    let char = s[right];

    if (map[char] !== undefined) {
      map[char]--;
      if (map[char] === 0) count--;
    }

    while (count === 0) {
      let temp = s[left];

      if (map[temp] !== undefined) {
        map[temp]++;
        if (map[temp] > 0) count++;
      }

      if (right - left + 1 < min) {
        min = right - left + 1;
        minStr = s.slice(left, right + 1);
      }

      left++;
    }

    right++;
  }

  return minStr;
}