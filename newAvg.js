function newAvg(arr, newavg) {
  let num = (arr.length + 1) * newavg - arr.reduce((a,c) => a + c, 0)
  if(num <=0 ) throw("Expected New Average is too low")
  
  return Math.ceil(num)
}