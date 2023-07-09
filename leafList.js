const leafList = (root, leafs = []) => {
  if(!root) return leafs
  if(!root.left && !root.right) leafs.push(root.val)
  
  leafList(root.left, leafs)
  leafList(root.right, leafs)
  
  return leafs
};