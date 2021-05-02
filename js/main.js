"use strict";

window.onload = () => (barArr = [...generateArray()]);
generateBtn.addEventListener("click", () => (barArr = [...generateArray()]));
arraySizeInput.addEventListener("input", () => (barArr = [...generateArray()]));
startBtn.addEventListener("click", () => {
  toggleControls();
  pickAlgorithm()();
});
