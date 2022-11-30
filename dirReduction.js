function dirReduc(arr){
  let stack = []
  
  let hash = {
    'NORTH' : 'SOUTH',
    'SOUTH' : 'NORTH',
    'EAST' : 'WEST',
    'WEST' : 'EAST',
  }
  
  for (let i = 0; i <= arr.length; i++) {
    if(stack.length && hash[stack[stack.length - 1]] === arr[i])
      stack.pop()
    else if(hash[arr[i]] === arr[i+1])
      i++
    else
      stack.push(arr[i])
  }
  
  return stack
}