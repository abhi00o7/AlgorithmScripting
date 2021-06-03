// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.


function sumAll(arr) {
    let sum = 0

    for (let index = Math.min(...arr); index <= Math.max(...arr); index++) {

        sum += index
        // console.log(sum)
    }

    return sum
}

console.log(sumAll([100000, 4]))


