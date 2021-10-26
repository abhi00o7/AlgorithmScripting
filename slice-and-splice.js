function frankenSplice(arr1, arr2, n) {
  var arr3 = [...arr2]
  for(let index = arr1.length -1; index >= 0; index--){
    arr3.splice( n, 0, arr1[index])
  }
  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);