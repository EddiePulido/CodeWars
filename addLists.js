const addLists = (head1, head2) => {
  const dHead = new Node(0)
  let dummy = dHead
  let carry = 0
  
  while(head1 || head2){
    const val1 = head1?.val || 0
    const val2 = head2?.val || 0
    
    let sum = val1 + val2 + carry
    
    if(sum > 9){
      sum -= 10
      carry = 1
    }else{
      carry = 0
    }
    
    const node = new Node(sum)
    dummy.next = node
    dummy = node
    
    if(head1) head1 = head1.next
    if(head2) head2 = head2.next
  }
  
  if(carry){
    const node = new Node(1)
    dummy.next = node
  }
  
  return dHead.next
};