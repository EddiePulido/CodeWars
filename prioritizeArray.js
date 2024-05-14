function prioritize(array, callback) {
	const t = []
  const f = []
  
  for(const e of array){
    callback(e) ? t.push(e) : f.push(e)
  }
  
  return t.concat(f)
}
