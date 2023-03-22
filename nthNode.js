function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  const node = new Node(data)
  if(!index){
    node.next = head
    return node
  }
  
  let i = 0
  let curr = head
  while(curr){
    if(i+1 === index){
      node.next = curr.next
      curr.next = node
      return head
    }
    i++
    curr = curr.next
  }
  
  throw error
    
}