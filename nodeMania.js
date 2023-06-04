function searchKFromEnd(head, k) {
  let end = head
  let curr = head
  
  while(k--){
    if(!end) return null
    end = end.next
  }
  
  while(end){
    end = end.next
    curr = curr.next
  }
  
  return curr.data
  
}