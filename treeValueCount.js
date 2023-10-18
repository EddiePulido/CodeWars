const treeValueCount = (root, target) => {
  if(!root) return 0
  
  return +(root.val === target) + treeValueCount(root.left, target) + treeValueCount(root.right, target)
};