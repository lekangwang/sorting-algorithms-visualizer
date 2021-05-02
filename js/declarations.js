"use strict";

/*---Buttons---*/
const generateBtn = document.getElementById("generate-array-btn");
//sort buttons
const bubbleSortBtn = document.getElementById("bubble-sort-btn");
const insertionSortBtn = document.getElementById("insertion-sort-btn");
const quickSortBtn = document.getElementById("quick-sort-btn");
const mergeSortBtn = document.getElementById("merge-sort-btn");
const heapSortBtn = document.getElementById("heap-sort-btn");
//control buttons
const startBtn = document.getElementById("start-btn");

/*---Input Fields---*/
const arraySizeInput = document.getElementById("array-size-input");
const sortSpeedInput = document.getElementById("sort-speed-input");

/*---Containers---*/
const arrayContainer = document.getElementById("visualizer-bar-container");
let totalDelay = 0;
const uiComponentsArr = [
  bubbleSortBtn,
  insertionSortBtn,
  quickSortBtn,
  mergeSortBtn,
  heapSortBtn,
  arraySizeInput,
  sortSpeedInput,
  generateBtn,
  startBtn,
];

const sortAlgoArr = uiComponentsArr.slice(0, 5);
