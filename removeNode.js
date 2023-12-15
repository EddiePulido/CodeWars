const removeNode = (head, target, curr = head, prev = null) => {
  if(curr.val === target){
    if(prev){
      prev.next = prev.next.next
      return head
    }
    
    return head.next 
  }
  
  return removeNode(head, target, curr.next, curr)
};
