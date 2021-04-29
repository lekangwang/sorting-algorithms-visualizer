"use strict";

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j].value > arr[j + 1].value) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
