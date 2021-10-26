function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  
  for (var index = 0; index < arr.length; index++)
  {
    if(arr[index] == num){
      console.log(index)
      return index
    }
    else if(arr[index] > num){
      console.log(index)
      return index
  }
  }
    return index;
}

getIndexToIns([2, 5, 10], 15);