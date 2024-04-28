function intersection(arrays) {
  
  const f = (a,c) => {
    return a.filter(e => c.includes(e))
  }
  
	return reduce(arrays, f)
}
