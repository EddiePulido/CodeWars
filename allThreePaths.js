const allTreePaths = (root, arr = []) => {
  if(!root) return []
  if(!root.left && !root.right) return [[root.val]]
  
  const leftPaths = allTreePaths(root.left)
  
  for(path of leftPaths){
    path.unshift(root.val)
  }
  
  const rightPaths = allTreePaths(root.right)
  for(path of rightPaths){
    path.unshift(root.val)
  }
  
  return [...leftPaths, ...rightPaths]
  
};

