function countIf(head, p) {
  let count = 0;
  while (head != null){
    if (p(head.data)){
      count++;
    }
    head = head.next;
  }
  return count;
}