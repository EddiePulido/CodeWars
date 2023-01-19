function duplicates(arr) {
  let result = new Set()
  let map = arr.reduce((a,c) => {
    if(a.has(c)){
      a.set(c,a.get(c) + 1)
      result.add(c)
    } else{
      a.set(c,1)
    }
    return a
  }, new Map())
  
  return [...result]
}