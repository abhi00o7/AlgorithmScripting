/**
 * There is an array of strings. All strings contains similar letters except one. Try to find it!
 * findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
* findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

 */

// @TODO: write a function that takes an array of strings and returns the unique string

function findUniqueString(arr) {

  let uniqueString = "";
  let sortedArr = arr.sort((a, b) => a.length - b.length);
  if (sortedArr[0].length === sortedArr[1].length) {
    uniqueString = sortedArr[sortedArr.length - 1];
  } else {
    uniqueString = sortedArr[0];
  }
  return uniqueString;
}

console.log(findUniqueString(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]));