const pathFinder = (root, target) => {
  if(!root) return null
  
  if(root.val === target) return [ target ]
  
  const left = pathFinder(root.left, target)
  const right = pathFinder(root.right, target)
  
  if(left) return [root.val, ...left]
  if(right) return [root.val, ...right]
  
  return null
};

const pathFinder = (root, target) => {
  const result = pathFinderHelper(root, target)
  return result?.reverse() || null
}

const pathFinderHelper = (root, target) => {
  if(!root) return null
  
  if(root.val === target)  return [ root.val ]
  
  const left = pathFinderHelper(root.left, target)
  
  
  if(left){
    left.push(root.val)
    return left
  } 
  
  const right = pathFinderHelper(root.right, target)
  if(right) {
    right.push(root.val)
    return right
  }
  
  return null
};

const pathFinder = (root, target) => {
  const stack = root ? [ [root, [root.val] ]] : []
  
  while(stack.length){
    const [curr, route] = stack.pop()
    
    if(curr.val === target){
      return route
    }
    
    if(curr.right) stack.push([curr.right, route.concat(curr.right.val)])
    if(curr.left) stack.push([curr.left, route.concat(curr.left.val)])
    
  }
  
  return null
};