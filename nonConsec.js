function allNonConsecutive (arr) {
  return arr.reduce((a,c,i) => {
    if(i !== 0 &&c !== arr[i-1] + 1) a.push({i: i, n: c})
    return a
  },[])
}