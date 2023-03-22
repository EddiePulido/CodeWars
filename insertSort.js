function Node(data) {
  this.data = data;
  this.next = null;
}

function insertSort(head) {
  let newHead = new Node(0)
  
  while(head){
    sortedInsert(newHead,head.data)
    head = head.next
  }
  
  return newHead.next
}