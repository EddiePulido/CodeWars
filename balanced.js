function balancedNum(number, n = number.toString()){
  if(n.length === 1 || n.length === 2) return 'Balanced'
  let left, right
  if(n.length % 2 === 1){
    left = n.slice(0, n.length/2)
    right = n.slice(Math.ceil(n.length/2))
  }else{
    left = n.slice(0, n.length/2 - 1)
    right = n.slice(Math.ceil(n.length/2) + 1)
  }
  
  let lsum = left.split('').reduce((a,c) => a + +c, 0)
  let rsum = right.split('').reduce((a,c) => a + +c, 0)
  
  return lsum === rsum ? 'Balanced' : 'Not Balanced'
}