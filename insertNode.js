const insertNode = (head, value, index, curr=head, prev=null) => {
  if(!index){
    const newNode = new Node(value)
    if(prev){
      prev.next = newNode
      newNode.next = curr
      return head
    }
    
    newNode.next = head
    return newNode
  }
    
    return insertNode(head, value, --index, curr.next, curr)
};