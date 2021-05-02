"use strict";

function callHeapSort() {
  totalDelay = 0;
  heapSort(barArr);
}

function heapSort(arr) {
  //build max heap
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }

  //sort the array
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    updateDiv(arr[i].element, arr[i].height, "purple");
    updateDiv(arr[i].element, arr[i].height, "yellow");

    heapify(arr, 0, i);

    updateDiv(arr[i].element, arr[i].height, "blue");
    updateDiv(arr[i].element, arr[i].height, "purple");
  }
  updateDiv(arr[i].element, arr[i].height, "purple");
}

function swap(arr, i, j) {
  updateDiv(arr[i].element, arr[i].height, "red");
  updateDiv(arr[j].element, arr[j].height, "red");
  let temp = arr[i].height;
  arr[i].height = arr[j].height;
  arr[j].height = temp;
  updateDiv(arr[i].element, arr[i].height, "red");
  updateDiv(arr[j].element, arr[j].height, "red");
  updateDiv(arr[i].element, arr[i].height, "blue");
  updateDiv(arr[j].element, arr[j].height, "blue");
}

function heapify(arr, start, nElements) {
  let maxIndex = start;
  let lChildIndex = 2 * start + 1,
    rChildIndex = 2 * start + 2;
  if (
    lChildIndex < nElements &&
    arr[lChildIndex].height > arr[maxIndex].height
  ) {
    if (maxIndex !== start) {
      updateDiv(arr[maxIndex].element, arr[maxIndex].height, "blue");
    }
    maxIndex = lChildIndex;
    updateDiv(arr[maxIndex].element, arr[maxIndex].height, "red");
  }

  if (
    rChildIndex < nElements &&
    arr[rChildIndex].height > arr[maxIndex].height
  ) {
    if (maxIndex !== start) {
      updateDiv(arr[maxIndex].element, arr[maxIndex].height, "blue");
    }
    maxIndex = rChildIndex;
    updateDiv(arr[maxIndex].element, arr[maxIndex].height, "red");
  }

  if (maxIndex !== start) {
    swap(arr, start, maxIndex);
    heapify(arr, maxIndex, nElements);
  }
}
