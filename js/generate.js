"use strict";

//populate the global array with randomly generated bar objects
let barArr = [];
//display an array of divs, styling and appending each div
//to array container div
//push objects representing each bar (element, color, height)
function generateArray() {
  totalDelay = 0;
  arrayContainer.innerHTML = "";
  const barArr = []; //clear the global bar array
  const min = +arraySizeInput.getAttribute("min");
  const max = +arraySizeInput.getAttribute("max");
  const arrLen = +arraySizeInput.value;

  //recalculate height and width units for bars
  const [heightUnit, widthUnit] = calcUnits();
  console.log(`height unit (from generateArray): ${heightUnit}`);
  for (let i = 0; i < arrLen; i++) {
    const obj = {
      element: null,
      height: Math.floor(Math.random() * (max - min)) + min,
    };

    //create and style a bar wrapper div
    const barElement = document.createElement("div");
    barElement.setAttribute("class", `bar-background ${obj.color}`);
    barElement.style = `height: ${heightUnit * obj.height}px;
    width: ${widthUnit}px;
    padding: ${widthUnit > 20 ? 10 : 0}px;
    margin: ${2}px;`;
    barElement.innerText = `${+arraySizeInput.value > 30 ? "" : obj.height}`;

    //attach barElement to array container div
    arrayContainer.appendChild(barElement);

    //attach barElement to global array element object
    obj.element = barElement;
    barArr.push(obj);
  }
  return barArr;
}
