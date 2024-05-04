var findTarget = function(root, k, map={}) {
  if(!root) return false
  if(root.val + map[root.val] === k) return true
  map[k-root.val] = root.val
  return findTarget(root.left, k, map) || findTarget(root.right, k, map)
}