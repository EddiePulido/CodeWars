function orderWeight(str){
  const nums = str.split(' ')
  
  const getWeight = s => s.split('').reduce((a,c) => a + +c, 0)
  
  return nums.sort().map(n => {
    return [n, getWeight(n).toString()]
  }).sort((a,b) => {
    if(a[1] === b[1]){
      return a[0].localeCompare(b[0])
    }else{
      return a[1] - b[1]
    }
    }).map(e => e[0]).join(' ')
}