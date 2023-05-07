/**
 * Here we will implement selection sort.
 * Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list.
 * It then starts at the second position,
 *  selects the smallest value in the remaining list,
 *  and swaps it with the second element. 
 * It continues iterating through the list and swapping elements until 
 * it reaches the end of the list. Now the list is sorted. 
 * Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which 
takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 */

const selectionSort = (arr) => {
  let minIdx;
  let temp;
  for (let i = 0; i < arr.length; i++) {
    minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) minIdx = j;
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}

console.log(selectionSort([1, 5, 2, 4, 3, 6, 7, 8, 9, 10]));