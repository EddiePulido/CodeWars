var uniqueInOrder=function(iter){
  //your code here - remember iterable can be a string or an array
  let a
  
  if(typeof iter === 'string'){
    a = iter.split('')
  }else{
    a = iter
  }
  const arr = []
  
  let i = 0;
  let j = 0;
  
  while(j < a.length){
    const currI = a[i]
    const currJ = a[j]
    if(i === j){
      arr.push(currI)
    }
    if(currI === currJ){
      j++
    }else{
      i = j
    }
  }
  
  return arr
}