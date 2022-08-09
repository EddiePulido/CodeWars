/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array
*/
const stantonMeasure = arr => {
  let ones = arr.filter(n => n === 1).length
  return arr.filter(n => n === ones).length
}