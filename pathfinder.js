const pathFinder = (root, target) => {
  if(!root) return null
  
  if(root.val === target) return [ target ]
  
  const left = pathFinder(root.left, target)
  const right = pathFinder(root.right, target)
  
  if(left) return [root.val, ...left]
  if(right) return [root.val, ...right]
  
  return null
};