"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.reduce((a, c) => a.concat(c), []).sort((a,b) => a - b)
  
}