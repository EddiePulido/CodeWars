const depthFirstValues = (root) => {
  if(!root) return []
  
  return [root.val, ...depthFirstValues(root.left), ...depthFirstValues(root.right)]
}