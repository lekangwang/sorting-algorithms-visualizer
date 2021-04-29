"use strict";

//populate the global array with randomly generated bar objects
function generateArray() {
  let barArr = [],
    max = 100,
    min = 5;
  for (let i = 0; i < +arraySizeInput.value; i++) {
    let obj = {
      value: Math.floor(Math.random() * (max - min)) + min,
      isSorted: false,
      class: "",
    };
    barArr.push(obj);
  }
  return barArr;
}
