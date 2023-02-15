/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const result = [];
  const temp = [];
  // we are using a common strategy to initialize an 'answer' object, and pass it into
  // a recursion helper to modify the values. Sometimes it helps to separate this because
  // there are times you will want to have conditionals or a for loop in the top level code
  // before you call a recursive function.
  findPermutations(temp, nums, result);
  return result;
};

const findPermutations = (temp, nums, result) => {
  if (!nums.length) {
    // Here it is important to call concat(), just a fancy way of copying the original array.
    // See what happens when you remove concat, things will go crazy because you are 
    // modifying an object that is referenced elsewhere!
    result.push(temp.concat());
    return;
  }

  for (var i = 0; i < nums.length; i++) {
    const newNum = nums[i];
    // we've picked our new number to add, so add it to our "picked" array called temp
    temp.push(newNum);
    // remember, in the first iteration, after picking 1, we need to pass in [2, 3] as the numbers left.
    nums.splice(i, 1);
    findPermutations(temp, nums, result);
    // Remember to "reset" our temp and nums array before our next iteration, where we pick the 2, and leave [1,3] 
    temp.pop();
    nums.splice(i, 0, newNum);
  }
};