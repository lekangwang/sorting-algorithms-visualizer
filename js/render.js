"use strict";

//function to update the height and color of each bar div element
function updateDiv(div, height, color) {
  const [heightUnit] = calcUnits();
  setTimeout(() => {
    div.style.height = height * heightUnit + "px";
    div.classList.remove("red");
    div.classList.remove("green");
    div.classList.remove("blue");
    div.classList.remove("yellow");
    div.classList.remove("purple");
    div.classList.add(`${color}`);
    div.innerText = `${div.innerText != "" ? height : ""}`;
  }, (totalDelay += 500 / +sortSpeedInput.value));
}

//recalculate height unit and width unit for each div element
function calcUnits() {
  const arrLen = +arraySizeInput.value;
  const heightUnit = (arrayContainer.offsetHeight * 0.95) / 100;
  const widthUnit = (arrayContainer.offsetWidth * 0.9) / arrLen - 4;
  return [heightUnit, widthUnit];
}
