function groupBy(array, callback) {
	const obj = {}
  
  for(const e of array){
    const result = callback(e)
    if(!obj[result]) obj[result] = []
    
    obj[result].push(e)
  }
  
  return obj
}