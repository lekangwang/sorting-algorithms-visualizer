"use strict";

//add event listeners to each sorting algorithm button
//to only allow one button to be pressed at any given time
sortBtnContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("sorting-algo-btn")) return;
  const sortAlgoArr = uiComponentsArr.slice(0, 5);
  sortAlgoArr.forEach((btn) => btn.classList.remove("pressed"));
  e.target.classList.add("pressed");
});

//checks which algorithm was picked and returns the corresponding start function
function pickAlgorithm() {
  let sortFunc = {
    0: callBubbleSort,
    1: callInsertionSort,
    2: callQuickSort,
    3: callMergeSort,
    4: callHeapSort,
  };

  const sortAlgoArr = uiComponentsArr.slice(0, 5);
  for (let [i, algo] of Object.entries(sortAlgoArr)) {
    if (algo.classList.contains("pressed")) {
      return sortFunc[i];
    }
  }
}
