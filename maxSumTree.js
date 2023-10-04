function maxSum(root) {
  if(!root) return 0
  if(!root.left && !root.right) return root.value
  
  return root.value + Math.max(maxSum(root.left), maxSum(root.right))
}