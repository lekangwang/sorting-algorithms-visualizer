"use strict";

function callMergeSort() {
  totalDelay = 0;
  mergePartition(barArr, 0, +arraySizeInput.value - 1);
}

function mergePartition(arr, start, end) {
  if (start < end) {
    let midIndex = Math.floor((start + end) / 2);
    updateDiv(arr[midIndex].element, arr[midIndex].height, "yellow");

    mergePartition(arr, start, midIndex);
    mergePartition(arr, midIndex + 1, end);

    mergeSort(arr, start, midIndex, end);
  }
}

function mergeSort(arr, start, mid, end) {
  let x = start,
    y = mid + 1,
    k = 0,
    Arr = [];
  for (let i = start; i <= end; i++) {
    if (x > mid) {
      Arr[k++] = arr[y++].height;
      updateDiv(arr[y - 1].element, arr[y - 1].height, "red");
    } else if (y > end) {
      Arr[k++] = arr[x++].height;
      updateDiv(arr[x - 1].element, arr[x - 1].height, "red");
    } else if (arr[x].height < arr[y].height) {
      Arr[k++] = arr[x++].height;
      updateDiv(arr[x - 1].element, arr[x - 1].height, "red");
    } else {
      Arr[k++] = arr[y++].height;
      updateDiv(arr[y - 1].element, arr[y - 1].height, "red");
    }
  }

  for (let t = 0; t < k; t++) {
    arr[start++].height = Arr[t];
    updateDiv(arr[start - 1].element, arr[start - 1].height, "purple");
  }
}
