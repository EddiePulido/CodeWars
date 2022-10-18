function repeats(arr){
  let hash = arr.reduce((a,c) => {
    a[c] = ++a[c] || 1
    return a
  },{})

  return arr.reduce((a,c) => hash[c] === 1 ? a + c : a, 0)
};