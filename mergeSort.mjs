// merge sort implementation in js

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle, arr.length);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  leftArr = leftArr || [];
  rightArr = rightArr || [];
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
};

// examples

console.log(mergeSort([1, 5, 2, 4, 3, 6, 7, 8, 9, 10]))
