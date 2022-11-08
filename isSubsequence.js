const isSubsequence = (s, t) => {
  const arr = [...s].reverse()
  for(c of t){
      if(c === arr.slice(-1)[0]) arr.pop()
  }

  return !arr.length
}