"use strict";

function insertionSort(arr) {
  totalDelay = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let counter = i;
    updateDiv(arr[i].element, arr[i].height, "yellow");
    while (
      counter > 0 &&
      i > 0 &&
      arr[counter].height < arr[counter - 1].height
    ) {
      updateDiv(arr[counter - 1].element, arr[counter - 1].height, "yellow");
      updateDiv(arr[counter].element, arr[counter].height, "red");
      updateDiv(arr[counter - 1].element, arr[counter - 1].height, "red");
      let temp = arr[counter].height;
      arr[counter].height = arr[counter - 1].height;
      arr[counter - 1].height = temp;
      updateDiv(arr[counter].element, arr[counter].height, "red");
      updateDiv(arr[counter - 1].element, arr[counter - 1].height, "red");
      counter--;
      updateDiv(arr[counter + 1].element, arr[counter + 1].height, "purple");
      updateDiv(arr[counter].element, arr[counter].height, "yellow");
    }
    updateDiv(arr[counter].element, arr[counter].height, "purple");
  }
}
