function union(arrays) {
	const f = (a,c) => {
    const set = new Set(a)
    
    for(const e of c){
      if(!set.has(e)){
        a.push(e)
      }
    }
    
    return a
  }
  
  return reduce(arrays, f)
}