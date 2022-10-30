var addTwoNumbers = function(l1, l2) {
    
  let carry = 0
  let dummy = new ListNode()
  let dhead = dummy
  
  while(l1 || l2){
      let v1 = l1 ? l1.val : 0
      let v2 = l2 ? l2.val : 0
      let sum = v1 + v2 + carry
      if(sum >= 10){
          sum = sum % 10
          carry = 1
      }else{
          carry = 0
      }
      
      let newNode = new ListNode(sum)
      dummy.next = newNode
      dummy = dummy.next
      
      if(l1){
          l1 = l1.next
      }
      if(l2){
          l2 = l2.next
      }
  }
  
  if(carry){
      const node = new ListNode(1)
      dummy.next = node 
  }
  
  return dhead.next
};