// Problem Statement: Given an unsorted array, print Kth Largest and Smallest Element from an unsorted array.


// Solution 1: Using Heap

// Time Complexity: O(n log k)
// Space Complexity: O(k)

function kthLargestHeap(arr, k) {
    let heap = new Heap();
    for (let i = 0; i < arr.length; i++) {
        heap.insert(arr[i]);
        if (heap.size() > k) {
            heap.remove();
        }
    }
    return heap.remove();
}

// Solution 2: Using Sorting

// Time Complexity: O(n log n)
// Space Complexity: O(1)

function kthLargestSort(arr, k) {
    arr.sort((a, b) => b - a);
    return arr[k - 1];
}

// examples 
console.log(kthLargestHeap([7, 10, 4, 3, 20, 15], 3)); // 15
console.log(kthLargestSort([7, 10, 4, 3, 20, 15], 3)); // 7