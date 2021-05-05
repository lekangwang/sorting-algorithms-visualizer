"use strict";

function createNewArray() {
  barArr = [...generateArray()];
}

window.onload = createNewArray;
generateBtn.addEventListener("click", createNewArray);
arraySizeInput.addEventListener("input", createNewArray);

//start animation
startBtn.addEventListener("click", () => {
  toggleControls();
  pickAlgorithm()();
});
