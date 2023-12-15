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

const removeNode = (head, targetVal, curr = head, prev = null) => {
  if(!head) return null
  if(head.val === targetVal) return head.next
   head.next = removeNode(head.next, targetVal)
   
   return head
 };
 