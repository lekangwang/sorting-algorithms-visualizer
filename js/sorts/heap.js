"use strict";

//basic steps:

function heapSort(arr) {
  // Build our max heap.
  buildMaxHeap(arr);

  // Find last element.
  let lastElement = arr.length - 1;

  // Continue heap sorting until we have
  // just one element left in the array.
  while (lastElement > 0) {
    swap(arr, 0, lastElement);

    heapify(arr, 0, lastElement);

    lastElement--;
  }

  return arr;
}

//build a max heap from our array
function buildMaxHeap(arr) {
  let i = Math.floor(arr.length / 2 - 1);

  // Build a max heap out of
  // all array elements passed in.
  while (i >= 0) {
    heapify(arr, i, arr.length);
    i--;
  }
}

//place root node to the correct place by comparing and swapping
function heapify(heap, i, max) {
  var index, leftChild, righChild;

  while (i < max) {
    index = i;
    leftChild = 2 * i + 1;
    righChild = leftChild + 1;

    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    if (righChild < max && heap[righChild] > heap[index]) {
      index = righChild;
    }

    if (index == i) {
      return;
    }
    swap(heap, i, index);
    i = index;
  }
}

//swap last element of array with root node
function swap(arr, firstItemIndex, lastItemIndex) {
  var tmp = arr[firstItemIndex];

  // Swap first and last items in the array.
  arr[firstItemIndex] = arr[lastItemIndex];
  arr[lastItemIndex] = tmp;
}
