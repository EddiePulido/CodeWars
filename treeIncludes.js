const treeIncludes = (root, target) => {
  if(!root) return false
  
  return root.val === target || treeIncludes(root.left, target) || treeIncludes(root.right, target)
};