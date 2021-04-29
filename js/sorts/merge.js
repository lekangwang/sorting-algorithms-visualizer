"use strict";

//divide the arr in to what will be subarrays with singular elements
//make calls to merge function to sort each sub-array
function mergeSort(arr) {
  const len = arr.length;
  //recursive condition to stop dividing
  if (len < 2) {
    return arr;
  } else {
    let halfIndex = Math.floor(len / 2);
    const left = arr.slice(0, halfIndex);
    const right = arr.slice(halfIndex);
    arr = merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  const lLen = left.length,
    rLen = right.length,
    result = [];
  let leftPointer = 0,
    rightPointer = 0;
  while (leftPointer < lLen && rightPointer < rLen) {
    if (left[leftPointer].value < right[rightPointer].value) {
      result.push(left[leftPointer]);
      leftPointer++;
    } else {
      result.push(right[rightPointer]);
      rightPointer++;
    }
  }

  return [...result, ...left.slice(leftPointer), ...right.slice(rightPointer)];
}
