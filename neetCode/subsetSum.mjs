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