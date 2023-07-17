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