"use strict";

function quickSort() {
  totalDelay = 0;
  quickRecurse(0, +arraySizeInput.value - 1);
}

function quickRecurse(start, end) {
  if (start < end) {
    let pivotPos = partition(barArr, start, end);
    quickRecurse(start, pivotPos - 1);
    quickRecurse(pivotPos + 1, end);
  }
}

function partition(arr, start, end) {
  let i = start + 1;
  let pivot = arr[start];
  updateDiv(pivot.element, pivot.height, "yellow");

  for (let j = start + 1; j <= end; j++) {
    if (arr[j].height < pivot.height) {
      updateDiv(arr[j].element, arr[j].height, "yellow");
      updateDiv(arr[i].element, arr[i].height, "red");
      updateDiv(arr[j].element, arr[j].height, "red");

      let temp = arr[i].height;
      arr[i].height = arr[j].height;
      arr[j].height = temp;

      updateDiv(arr[i].element, arr[i].height, "red");
      updateDiv(arr[j].element, arr[j].height, "red");

      updateDiv(arr[i].element, arr[i].height, "blue");
      updateDiv(arr[j].element, arr[j].height, "blue");

      i++;
    }
  }

  updateDiv(pivot.element, pivot.height, "red");
  updateDiv(arr[i - 1].element, arr[i - 1].height, "red");

  let temp = arr[i - 1].height;
  arr[i - 1].height = pivot.height;
  pivot.height = temp;

  updateDiv(pivot.element, pivot.height, "red");
  updateDiv(arr[i - 1].element, arr[i - 1].height, "red");

  for (let k = start; k <= i; k++) {
    updateDiv(arr[k].element, arr[k].height, "purple");
  }

  return i - 1;
}

// function quickSort() {
//   totalDelay = 0;
//   quickRecurse(0, +arraySizeInput.value - 1);
// }

// function quickRecurse(start, end) {
//   if (start < end) {
//     let pivotPosition = partition(start, end, barArr);
//     quickRecurse(start, pivotPosition - 1);
//     quickRecurse(pivotPosition + 1, end);
//   }
// }

// function partition(start, end, arr) {
//   let pointer = start + 1;
//   let pivot = arr[start];

//   updateDiv(pivot.element, pivot.height, "yellow");
//   for (let j = start + 1; j <= end; j++) {
//     if (arr[j].height < pivot.height) {
//       updateDiv(arr[j].element, arr[j].height, "yellow");
//       updateDiv(arr[pointer].element, arr[pointer].height, "red");
//       updateDiv(arr[j].element, arr[j].height, "red");

//       let temp = arr[j].height;
//       arr[j].height = arr[pointer].height;
//       arr[pointer].height = temp;

//       updateDiv(arr[pointer].element, arr[pointer].height, "red");
//       updateDiv(arr[j].element, arr[j].height, "red");

//       updateDiv(arr[pointer].element, arr[pointer].height, "blue");
//       updateDiv(arr[j].element, arr[j].height, "blue");
//       pointer++;
//     }
//   }
//   updateDiv(pivot.element, pivot.height, "red");
//   updateDiv(arr[pointer - 1].element, arr[pointer - 1].height, "red");
//   let temp = pivot.height;
//   pivot.height = arr[pointer - 1].height;
//   arr[pointer - 1].height = temp;

//   for (let k = start; k <= pointer; k++) {
//     updateDiv(arr[k].element, arr[k].height, "purple");
//   }
//   return pointer - 1;
// }
