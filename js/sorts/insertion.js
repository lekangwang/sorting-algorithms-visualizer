"use strict";

function insertionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let minBar = [arr[i], i];
    for (let j = i; j < len; j++) {
      if (arr[j].value < arr[i].value && i !== j) {
        minBar[0] = arr[j];
        minBar[1] = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minBar[1]];
    arr[minBar[1]] = temp;
  }
}
