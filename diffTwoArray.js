// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

//solution 1 for a more iterative approach:
function diffArray(arr1, arr2) {
    let newArr = []

    let combiArr = arr1.concat(arr2)

    for (let index = 0; index <= combiArr.length - 1; index++) {

        if (!arr2.includes(combiArr[index]) || !arr1.includes(combiArr[index])) {

            newArr.push(combiArr[index])
        }
    }

    return newArr;
}



// another declarative solution for the same problem:
function diffArrays(arr1,arr2){
    return arr1
    .concat(arr2)
    .filter(item =>!arr1.includes(item) || !arr2.includes(item))
}


console.log(diffArrays([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// expected output [4]