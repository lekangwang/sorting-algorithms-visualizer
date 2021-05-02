"use strict";

//basic steps:

//swap last element of array with root node
function swap(arr, firstItemIndex, lastItemIndex) {
  updateDiv(arr[firstItemIndex].element, arr[firstItemIndex].height, "red");
  updateDiv(arr[lastItemIndex].element, arr[lastItemIndex].height, "red");
  var tmp = arr[firstItemIndex].height;
  // Swap first and last items in the array.
  arr[firstItemIndex].height = arr[lastItemIndex].height;
  arr[lastItemIndex].height = tmp;
  updateDiv(arr[firstItemIndex].element, arr[firstItemIndex].height, "red");
  updateDiv(arr[lastItemIndex].element, arr[lastItemIndex].height, "red");
  updateDiv(arr[firstItemIndex].element, arr[firstItemIndex].height, "blue");
  updateDiv(arr[lastItemIndex].element, arr[lastItemIndex].height, "blue");
}

function heapSort(arr) {
  // Build our max heap.
  buildMaxHeap(arr);

  // Find last element index
  let lastElement = arr.length - 1;
  updateDiv(arr[lastElement].element, arr[lastElement].height, "yellow");

  // Continue heap sorting until we have
  // just one element left in the array.
  while (lastElement > 0) {
    //swap the root node value with the last element value in the heap
    swap(arr, 0, lastElement);

    //create a heap with the remaining elements in the array
    heapify(arr, 0, lastElement);
    updateDiv(arr[lastElement].element, arr[lastElement].height, "blue");
    lastElement--;
    updateDiv(arr[lastElement].element, arr[lastElement].height, "yellow");
  }
}

//build a max heap from our array
function buildMaxHeap(arr) {
  //find the middle index
  let i = Math.floor(arr.length / 2 - 1);
  updateDiv(arr[i].element, arr[i].height, "yellow");

  // Build a max heap out of
  // all array elements passed in.
  while (i >= 0) {
    heapify(arr, i, arr.length);
    updateDiv(arr[i].element, arr[i].height, "blue");
    i--;
    updateDiv(arr[i].element, arr[i].height, "yellow");
  }
}

//place root node to the correct place by comparing and swapping
function heapify(heap, i, max) {
  let index, leftChild, righChild;

  while (i < max) {
    index = i;
    leftChild = 2 * i + 1;
    righChild = leftChild + 1;

    if (leftChild < max && heap[leftChild].height > heap[index].height) {
      index = leftChild;
    }

    if (righChild < max && heap[righChild].height > heap[index].height) {
      index = righChild;
    }

    if (index == i) {
      return;
    }
    swap(heap, i, index);
    i = index;
  }
}
