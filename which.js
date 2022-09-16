function inArray(array1,array2){
  let arr = []
  
  array1.forEach(e => {
    array2.forEach(c => {
      if(c.includes(e)){
        if(!arr.includes(e)) arr.push(e)
      }
    })
  })
  
  return arr.sort()
}