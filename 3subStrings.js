var countGoodSubstrings = function(s) {
  return [...s].reduce((a,c,i,arr) =>{
      let set = new Set(arr.slice(i,i+3))
      if(set.size === 3) return ++a
      return a
  },0)
}