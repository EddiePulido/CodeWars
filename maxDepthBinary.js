maxDepth(root) {
  let max = 0

  const queue = root ? [ [root, 1] ] : [] 

  while(queue.length){
      const [curr, depth] = queue.shift()

      if(!curr.left && !curr.right){
          max = Math.max(max, depth)
      }

      if(curr.left) queue.push([curr.left, depth + 1])
      if(curr.right) queue.push([curr.right, depth + 1])
  }

  return max
}
}