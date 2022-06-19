function findLongest(array){
  let num = 0
  let digs = 0
  array.forEach(n => {
    let d = n.toString().length 
    if(d > digs){
      num = n
      digs = d
    }
  })
  
  return num
}