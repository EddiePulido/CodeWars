const maxPathSum = (root) => {
  if(!root) return 0
  
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right))
};