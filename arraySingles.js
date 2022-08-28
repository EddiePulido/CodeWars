function repeats(arr){
  let hash = {}
  
  arr.forEach(e => {
    hash[e] = ++hash[e] || 1
  })
  
  return arr.reduce((acc, c) => hash[c] === 1 ? acc + c : acc, 0)
};