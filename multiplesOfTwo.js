function multiples(s1,s2,s3){
  const arr = []
  
  for(let i = 1; i < s3; i++){
    if(!(i % s1) && !(i % s2)) arr.push(i)
  }
  
  return arr
}