// merge sort implementation in js

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle, arr.length);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const merge = (leftArr, rightArr) => {