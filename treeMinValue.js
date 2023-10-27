const treeMinValue = (root) => {
  if(!root) return Infinity
  
  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right))
};
