function bouncingBall(h,  bounce,  window) {
  if(window >= h || bounce >= 1 || bounce <= 0 || h <= 0){
    return -1
  }
  
  let times = 0
  
  while(h > window){
    
    times++
    h = h * bounce
    if(h > window) times++
  }
  
  return times
}