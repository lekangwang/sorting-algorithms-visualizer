"use strict";

//add event listeners to each algorithm choice
//button to only allow one button to be pressed
//at a time
sortAlgoArr.forEach((sort, i, arr) => {
  sort.addEventListener("click", () => {
    for (let sort of arr) {
      if (sort.classList.contains("pressed")) {
        sort.classList.remove("pressed");
      }
    }
    sort.classList.add("pressed");
  });
});

//check which algorithm was picked returns the corresponding function
function pickAlgorithm() {
  let sortFunc = {
    0: callBubbleSort,
    1: callInsertionSort,
    2: callQuickSort,
    3: callMergeSort,
    4: callHeapSort,
  };
  for (let [i, algo] of Object.entries(sortAlgoArr)) {
    if (algo.classList.contains("pressed")) {
      return sortFunc[i];
    }
  }
}
