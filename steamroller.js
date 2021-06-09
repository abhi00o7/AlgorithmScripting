// Flatten a nested array. You must account for varying levels of nesting.



function steamrollArray(arr) {
    return arr
        .reduce((merged, item) => merged.concat(Array.isArray(item) ? steamrollArray(item) : item), [])

}

console.log(steamrollArray([1, {},[3, [[4]]]]))


