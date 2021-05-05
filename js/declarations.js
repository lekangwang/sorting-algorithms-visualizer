"use strict";

/*---Buttons---*/
const generateBtn = document.querySelector("#generate-array-btn");
//sort buttons
const bubbleSortBtn = document.querySelector("#bubble-sort-btn");
const insertionSortBtn = document.querySelector("#insertion-sort-btn");
const quickSortBtn = document.querySelector("#quick-sort-btn");
const mergeSortBtn = document.querySelector("#merge-sort-btn");
const heapSortBtn = document.querySelector("#heap-sort-btn");
//control buttons
const startBtn = document.querySelector("#start-btn");

/*---Input Fields---*/
const arraySizeInput = document.querySelector("#array-size-input");
const sortSpeedInput = document.querySelector("#sort-speed-input");

/*---Containers---*/
const arrayContainer = document.querySelector("#visualizer-bar-container");
const sortBtnContainer = document.querySelector(
  ".controls-algorithm-container"
);
let totalDelay = 0;

//stores all ui elements
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
