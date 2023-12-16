class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (head1, head2) => {
  const dhead = new Node(0)
  let dummy = dhead
  let carry = 0
  
  while(head1 || head2){
    let val1 = head1?.val || 0
    let val2 = head2?.val || 0
    let sum = val1 + val2 + carry
    
    if(sum > 9){
      carry = 1
      sum -= 10
    }else{
      carry = 0
    }
    
    const node = new Node(sum)
    dummy.next = node
    dummy = dummy.next
    
    if(head1) head1 = head1.next
    if(head2) head2 = head2.next
  }
  
  if(carry){
    const node = new Node(1)
    dummy.next = node
  }
  
  return dhead.next
};

module.exports = {
  addLists,
};
