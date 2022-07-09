function padIt(str,n){
  let start = ''
  let end = ''
  
  let i = 0
  
  while(i < n) i++ % 2 ? end += '*' : start += '*'
  
  return start + str + end
}