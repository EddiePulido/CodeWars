def tree_includes(root, t):
  if not root:
    return False

  return root.val == t or tree_includes(root.left, t) or tree_includes(root.right, t)