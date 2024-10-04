const parse = (str) => {
  if(str === 'null') return null
  const arr = str.split(' -> ')
  
  const head = new Node(+arr[0])
  let runner = head
  
  for(let i = 1; i < arr.length; i++){
    const curr = arr[i]
    if(curr !== 'null'){
      const node = new Node(+curr)
      runner.next = node
      runner = runner.next
    }
  }
  
  return head
}