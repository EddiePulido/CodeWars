function maxRot(n) {
  let str = n.toString()  
  let arr = [n]
  
  for(let i = 0; i < str.length; i++){
    const front = str.slice(0,i)
    const num = str[i]
    const back = str.slice(i+1) + num
    
    str = front + back
    
    arr.push(Number(str))
  }

  return Math.max(...arr)
  
  
}