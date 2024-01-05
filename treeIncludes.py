def tree_includes(root, target):
  if not root:
    return False
  
  return root.val == target or tree_includes(root.left, target) or tree_includes(root.right, target)