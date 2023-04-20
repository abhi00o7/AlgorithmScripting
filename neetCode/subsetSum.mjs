// Problem Statement: Given an array print all the sum of the subset generated from it, in the increasing order.

function subsetSum(arr) {
    let sum = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result.push(sum);
    }
    return result;
}

console.log(subsetSum([1, 2, 3, 4, 5])); // [1, 3, 6, 10, 15]

// subset sum with recursion

function subsetSum(arr) {
    let result = [];
    function helper(arr, sum, i) {
        if (i === arr.length) {
            result.push(sum);
            return;
        }
        helper(arr, sum, i + 1);
        helper(arr, sum + arr[i], i + 1);
    }
    helper(arr, 0, 0);
    return result;
}

// subset sum with recursion and memoization

function subsetSum(arr) {
    let result = [];
    let memo = {};
    function helper(arr, sum, i) {
        if (i === arr.length) {
            result.push(sum);
            return;
        }
        if (memo[i]) {
            return;
        }
        memo[i] = true;
        helper(arr, sum, i + 1);
        helper(arr, sum + arr[i], i + 1);
    }
    helper(arr, 0, 0);
    return result;
}