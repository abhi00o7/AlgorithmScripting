// Length of Longest Substring without any Repeating Character

const longestNoRepeat = (str) => {
  let longest = 0;
  let start = 0;
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      start = Math.max(start, map.get(str[i]) + 1);
    }
    map.set(str[i], i);
    longest = Math.max(longest, i - start + 1);
  }
  return longest;
}

console.log(longestNoRepeat('abcabcbb')); // 3
console.log(longestNoRepeat('bbbbb')); // 1

// reges to match only negative numbers
// ^-?[0-9]+(\.[0-9]+)?$
