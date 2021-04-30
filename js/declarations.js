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
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

/*---Input Fields---*/
const arraySizeInput = document.getElementById("array-size-input");
const sortSpeedInput = document.getElementById("sort-speed-input");

/*---Containers---*/
const arrayContainer = document.getElementById("visualizer-bar-container");
let totalDelay = 0;
