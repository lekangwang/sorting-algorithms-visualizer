"use strict";

function bubbleSort(arr) {
  totalDelay = 0;
  const len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      updateDiv(arr[j].element, arr[j].height, "yellow");
      updateDiv(arr[j + 1].element, arr[j + 1].height, "yellow");
      if (arr[j].height > arr[j + 1].height) {
        updateDiv(arr[j].element, arr[j].height, "red");
        updateDiv(arr[j + 1].element, arr[j + 1].height, "red");
        let temp = arr[j].height;
        arr[j].height = arr[j + 1].height;
        arr[j + 1].height = temp;
        updateDiv(arr[j].element, arr[j].height, "red");
        updateDiv(arr[j + 1].element, arr[j + 1].height, "red");
      }
      updateDiv(arr[j].element, arr[j].height, "blue");
    }
    updateDiv(arr[i].element, arr[i].height, "purple");
  }
}
