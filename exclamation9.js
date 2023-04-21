function removeOrAdd (str){
  const countEnd = (s,b=true) => [...s].reduceRight((a,c) => b && c === '!' ? ++a : (b=false, a), 0)
  return str.split(' ').map(w => countEnd(w) > 1 ? w : !countEnd(w) ? w + '!' : w.slice(0,-1)).join(' ')
}