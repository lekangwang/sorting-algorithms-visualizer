"use strict";

//function to render the passed array to the DOM
function renderArray(arr) {
  //clear the array container in the DOM
  arrayContainer.innerHTML = "";
  const heightUnit = (arrayContainer.offsetHeight * 0.95) / 100;
  const widthUnit = (arrayContainer.offsetWidth * 0.9) / arr.length - 4;
  arr.forEach((bar) => {
    const html = `<div class="bar-background 
    ${bar.class}" 
    style="
    height: ${heightUnit * bar.value}px;
    width: ${widthUnit}px;
    margin: ${2}px;
    ">
    <p>${+arraySizeInput.value > 30 ? "" : bar.value}</p>
    </div>`;
    arrayContainer.insertAdjacentHTML("afterbegin", html);
  });
}
