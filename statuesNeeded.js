function solution(statues) {
  const set = new Set(statues.sort((a,b) => a - b))
  let count = 0
  
  for(let i = statues[0];i <= statues[statues.length - 1]; i++){
      if(!set.has(i)) count++
  }
  
  return count
}
