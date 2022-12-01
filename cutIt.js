function cutIt(arr){
  let len = Math.min(...(arr.map(e => e.length)))
  return arr.map(e => e.slice(0,len))
}