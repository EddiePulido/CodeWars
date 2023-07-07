const treeLevels = (root, level = 0, levels = []) => {
  if(!root) return levels
  
  if(levels[level]) levels[level].push(root.val)
  else levels[level] = [root.val]
  
  const left = treeLevels(root.left, level+1, levels)
  const right = treeLevels(root.right, level+1, levels)
  
  
  return levels
}