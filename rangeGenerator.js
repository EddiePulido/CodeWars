const range = (start, step, end) => {
  if(!step){
    end = start
    start = 1
    step = 1
  }
  
  if(!end){
    end = step
    step = 1
  }
  
  const arr = []
  
  for(let i = start; i <= end; i+= step){
    arr.push(i)
  }
  
  return arr
}