import * as engine from "./src/engine.js";
import { displayPuzzle } from "./src/view.js";

let w,
  h,
  shuffled = [];

const generatePuzzle = (wCount, hCount) => {
  w = wCount;
  h = hCount;
  shuffled = engine.generatePuzzle(wCount, hCount);
  console.log(shuffled);
  displayPuzzle(w, h, shuffled, $("#shuffled-puzzle"));
};

const sortPuzzle = () => {
  const { linearResult } = engine.sortPuzzle(shuffled);
  console.log(linearResult);
  displayPuzzle(w, h, linearResult, $("#sorted-puzzle"));
};

window.generatePuzzle = generatePuzzle;
window.sortPuzzle = sortPuzzle;
