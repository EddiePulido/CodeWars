class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const zipperLists = (head1, head2) => {
  let dhead = new Node(0);
  let dtail = dhead;
  let i = 1;
  
  while(head1 && head2){
    if(i % 2){
      dtail.next = head1;
      dtail = dtail.next;
      head1 = head1.next;
    }else{
      dtail.next = head2;
      dtail = dtail.next;
      head2 = head2.next;
    }
    i++
  }
  
  if(head1) dtail.next = head1;
  if(head2) dtail.next = head2;
  
  return dhead.next
  
};
