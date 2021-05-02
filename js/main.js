"use strict";

window.onload = () => (barArr = [...generateArray()]);
generateBtn.addEventListener("click", () => (barArr = [...generateArray()]));
arraySizeInput.addEventListener("input", () => (barArr = [...generateArray()]));

bubbleSortBtn.addEventListener("click", () => bubbleSort(barArr));
insertionSortBtn.addEventListener("click", () => insertionSort(barArr));
quickSortBtn.addEventListener("click", () => callQuickSort());
heapSortBtn.addEventListener("click", () => callHeapSort());
mergeSortBtn.addEventListener("click", () => callMergeSort());
