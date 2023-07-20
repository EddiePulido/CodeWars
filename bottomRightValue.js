const bottomRightValue = (root) => {
  const queue = root ? [root] : []
  
  while(queue.length){
    let curr = queue.shift()
    
    if(curr.left) queue.push(curr.left)
    if(curr.right) queue.push(curr.right)
    if(!queue.length) return curr.val
  }
  
  return null
};