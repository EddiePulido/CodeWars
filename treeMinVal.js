const treeMinValue = (root, min = Infinity) => {
  if(!root) return min
  min = Math.min(min, root.val)
  return Math.min(treeMinValue(root.left, min),treeMinValue(root.right,min))
};