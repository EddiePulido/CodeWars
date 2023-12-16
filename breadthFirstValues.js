const breadthFirstValues = root => {
  const queue = root ? [ root ] : []
  const arr = []

  while(queue.length){
    const curr = queue.shift()
    arr.push(curr.val)

    curr.right && queue.push(curr.right)
    curr.left && queue.push(curr.left)
  }

  return arr
}