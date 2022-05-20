function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  // Your code goes here.
  
  let len = 0;
  
  while(head != null){
    len++
    head = head.next
  }
  
  return len
}

function count(head, data) {
  // Your code goes here.
  let c = 0
  
  while(head != null){
    if(head.data === data){
      c++
    }
    head = head.next
  }
  
  return c
}