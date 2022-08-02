function solution(pairs){
  console.log({pairs})
  return Object.entries(pairs).map(e => e[0] + ' = ' + e[1]).join(',')
}