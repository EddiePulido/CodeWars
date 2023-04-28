const pathFinder = (root, target, path=[]) => {
  if(!root) return null
    
  path = path.slice().concat(root.val)

  if(root.val === target) return path
  
  return pathFinder(root.left, target, path) || pathFinder(root.right, target, path)
};

module.exports = {
  pathFinder,
};