function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  // Your code goes here.
  // Remember to return the head of the list.
  if(listA === null){
    return listB
  }
  if(listB === null){
    return listA
  }
  
  let head = listA
  let switched = true
  
  while(listA != null){
    if(listA.next === null && switched){
      listA.next = listB
      switched = false
    }
    
    listA= listA.next
  }
  console.log(head)
  return head
}