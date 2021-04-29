"use strict";

function quickSort(arr) {
  //recursive case to return each individual element
  if (arr.length == 1) return arr;

  const pivot = arr[arr.length - 1];
  const lArr = [],
    rArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      lArr.push(arr[i]);
    } else {
      rArr.push(arr[i]);
    }
  }

  if (lArr.length > 0 && rArr.length > 0) {
    return [...quickSort(lArr), pivot, ...quickSort(rArr)];
  } else if (lArr.length == 0) {
    return [pivot, ...quickSort(rArr)];
  } else {
    return [...quickSort(lArr), pivot];
  }
}
